/// <reference types="vite/client" />
/// <reference types="vite-svg-loader" />

interface ImportMetaEnv {
  readonly VITE_PM_API_BASE: string
  readonly VITE_PM_INQUIRY_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
