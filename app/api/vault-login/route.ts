import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();
    const correctPassword = process.env.VAULT_PASSWORD || 'cbvault2026';

    if (password === correctPassword) {
      const response = NextResponse.json({ success: true });
      
      // Set secure cookie
      response.cookies.set('vault_session', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/',
      });

      return response;
    }

    return NextResponse.json(
      { success: false, error: 'Incorrect password.' },
      { status: 401 }
    );
  } catch (err) {
    console.error('[Vault Login Error]', err);
    return NextResponse.json(
      { success: false, error: 'Internal server error.' },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  // Clear the cookie
  response.cookies.delete('vault_session');
  return response;
}
