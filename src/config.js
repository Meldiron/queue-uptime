export const config = {
  queues: [
    {
      name: 'webhooks',
      maxSize: 100,
      heartbeatUrl: process.env.HEARTBEAT_URL_WEBHOOKS,
    },
    {
      name: 'logs',
      maxSize: 100,
      heartbeatUrl: process.env.HEARTBEAT_URL_LOGS,
    },
    {
      name: 'certificates',
      maxSize: 100,
      heartbeatUrl: process.env.HEARTBEAT_URL_CERTIFICATES,
    },
    {
      name: 'builds',
      maxSize: 100,
      heartbeatUrl: process.env.HEARTBEAT_URL_BUILDS,
    },
    {
      name: 'databases',
      maxSize: 100,
      heartbeatUrl: process.env.HEARTBEAT_URL_DATABASES,
    },
    {
      name: 'deletes',
      maxSize: 100,
      heartbeatUrl: process.env.HEARTBEAT_URL_DELETES,
    },
    {
      name: 'mails',
      maxSize: 100,
      heartbeatUrl: process.env.HEARTBEAT_URL_MAILS,
    },
    {
      name: 'messaging',
      maxSize: 100,
      heartbeatUrl: process.env.HEARTBEAT_URL_MESSAGING,
    },
    {
      name: 'migrations',
      maxSize: 100,
      heartbeatUrl: process.env.HEARTBEAT_URL_MIGRATIONS,
    },
    {
      name: 'functions',
      maxSize: 1000,
      heartbeatUrl: process.env.HEARTBEAT_URL_FUNCTIONS,
    }
  ],
};
