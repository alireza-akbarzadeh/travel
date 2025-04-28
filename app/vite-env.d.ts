/// <reference types="vite/client" />

interface ViteTypeOptions {
  // Make the type of ImportMetaEnv strict to disallow unknown keys
  strictImportMetaEnv: true
}

interface ImportMetaEnv {
  // Application
  readonly VITE_APP_NAME: string
  readonly VITE_NODE_ENV: 'development' | 'test' | 'production'
  readonly VITE_PORT: string
  readonly VITE_PUBLIC_URL: string

  // API Configuration
  readonly VITE_API_KEY: string
  readonly VITE_API_BASE_URL: string

  // Database Configuration
  readonly VITE_DATABASE_URL: string

  // Authentication
  readonly VITE_JWT_SECRET: string
  readonly VITE_JWT_EXPIRES_IN: string

  // External Services - Stripe
  readonly VITE_STRIPE_PUBLIC_KEY?: string
  readonly VITE_STRIPE_SECRET_KEY?: string
  readonly VITE_STRIPE_WEBHOOK_SECRET?: string

  // Google APIs
  readonly VITE_GOOGLE_MAPS_API_KEY?: string
  readonly VITE_GOOGLE_CLIENT_ID?: string
  readonly VITE_GOOGLE_CLIENT_SECRET?: string

  // OpenAI API
  readonly VITE_OPENAI_API_KEY?: string

  // AWS S3
  readonly VITE_AWS_S3_BUCKET?: string
  readonly VITE_AWS_ACCESS_KEY_ID?: string
  readonly VITE_AWS_SECRET_ACCESS_KEY?: string
  readonly VITE_AWS_REGION?: string

  // Email Service
  readonly VITE_EMAIL_FROM?: string
  readonly VITE_EMAIL_SERVICE?: string
  readonly VITE_EMAIL_API_KEY?: string

  // Sentry
  readonly VITE_SENTRY_DSN?: string

  // Redis
  readonly VITE_REDIS_URL?: string

  // Feature Flags
  readonly VITE_ENABLE_BOOKING_SYSTEM?: string
  readonly VITE_ENABLE_CHATBOT?: string
  readonly VITE_ENABLE_REVIEWS?: string
  readonly VITE_ENABLE_RECOMMENDATIONS?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
