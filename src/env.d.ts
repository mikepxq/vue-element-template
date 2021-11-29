interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_IS_MOCK: "true" | "false";
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
