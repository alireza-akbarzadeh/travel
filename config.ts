import {getEnv} from "@/lib/env";

/**
 * Application configuration derived from environment variables
 * Provides a clean, type-safe interface to access environment variables
 */
export const config = {
  app: {
    name: getEnv('APP_NAME'),
    environment: getEnv('NODE_ENV'),
    port: getEnv('PORT'),
    url: getEnv('PUBLIC_URL'),
    isProduction: getEnv('NODE_ENV') === 'production',
    isDevelopment: getEnv('NODE_ENV') === 'development',
    isTest: getEnv('NODE_ENV') === 'test',
  },
  
  api: {
    key: getEnv('API_KEY'),
    baseUrl: getEnv('API_BASE_URL'),
  },
  
  database: {
    url: getEnv('DATABASE_URL'),
  },
  
  auth: {
    jwtSecret: getEnv('JWT_SECRET'),
    jwtExpiresIn: getEnv('JWT_EXPIRES_IN'),
  },
  
  services: {
    stripe: {
      publicKey: getEnv('STRIPE_PUBLIC_KEY'),
      secretKey: getEnv('STRIPE_SECRET_KEY'),
      webhookSecret: getEnv('STRIPE_WEBHOOK_SECRET'),
    },
    google: {
      mapsApiKey: getEnv('GOOGLE_MAPS_API_KEY'),
      clientId: getEnv('GOOGLE_CLIENT_ID'),
      clientSecret: getEnv('GOOGLE_CLIENT_SECRET'),
    },
    openai: {
      apiKey: getEnv('OPENAI_API_KEY'),
    },
    aws: {
      s3Bucket: getEnv('AWS_S3_BUCKET'),
      accessKeyId: getEnv('AWS_ACCESS_KEY_ID'),
      secretAccessKey: getEnv('AWS_SECRET_ACCESS_KEY'),
      region: getEnv('AWS_REGION'),
    },
    email: {
      from: getEnv('EMAIL_FROM'),
      service: getEnv('EMAIL_SERVICE'),
      apiKey: getEnv('EMAIL_API_KEY'),
    },
    sentry: {
      dsn: getEnv('SENTRY_DSN'),
    },
    redis: {
      url: getEnv('REDIS_URL'),
    },
  },
  
  features: {
    enableBookingSystem: getEnv('ENABLE_BOOKING_SYSTEM'),
    enableChatbot: getEnv('ENABLE_CHATBOT'),
    enableReviews: getEnv('ENABLE_REVIEWS'),
    enableRecommendations: getEnv('ENABLE_RECOMMENDATIONS'),
  },
};
