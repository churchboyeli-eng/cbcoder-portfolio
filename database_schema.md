# Database Schema (Relational)

This document maps out the backend data models required for the CBCODER CMS ecosystem.

```mermaid
erDiagram
    STORY ||--o{ MEDIA : "contains"
    STORY {
        uuid id PK
        string title
        text description
        string category
        string location
        date published_date
        string cover_image_url
        string video_url
        boolean featured
        string status
        timestamp created_at
    }
    
    MEDIA {
        uuid id PK
        uuid story_id FK
        string type
        string url
        string folder
        timestamp uploaded_at
    }
    
    INQUIRY {
        uuid id PK
        string name
        string email
        string project_type
        string budget
        text message
        string status
        timestamp created_at
    }
    
    SERVICE {
        uuid id PK
        string title
        text description
        boolean active
        decimal price
    }
```

## REST API Endpoints

### Public Endpoints (Frontend Use)
- `GET /api/v1/stories`: Retrieve paginated listed of published stories.
- `GET /api/v1/stories/:id`: Retrieve single story with associated media.
- `GET /api/v1/services`: Retrieve active services available.
- `POST /api/v1/inquiries`: Submit a new contact request.

### Protected Endpoints (CMS Admin Use)
- `POST /api/v1/admin/stories`: Create a new story draft.
- `PUT /api/v1/admin/stories/:id`: Update existing story.
- `DELETE /api/v1/admin/stories/:id`: Delete a story.
- `POST /api/v1/admin/media`: Upload assets and return CDN urls.
- `GET /api/v1/admin/inquiries`: Fetch all inquiries.
- `PUT /api/v1/admin/inquiries/:id`: Update lead status (e.g., from "New" to "In Progress").
