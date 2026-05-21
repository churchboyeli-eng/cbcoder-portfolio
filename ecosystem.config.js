module.exports = {
  apps: [
    {
      name: 'cbcoder-portfolio',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      instances: 'max', // Utilizes all CPU cores for clustering
      exec_mode: 'cluster', // Enables Node.js clustering
      watch: false,
      max_memory_restart: '1G', // Restarts if memory leaks exceed 1GB
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      error_file: './logs/pm2-error.log',
      out_file: './logs/pm2-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
    },
  ],
};
