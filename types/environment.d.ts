export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SUPABASE_URL: string;
      SUPABASE_SERVICE_ROLE_KEY: string;
    }
  }
}
