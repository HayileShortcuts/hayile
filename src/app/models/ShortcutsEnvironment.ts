export interface ShortcutsEnvironment {
  operatingSystem: string;
  environment: string;
  shortcuts: Shortcut[];
}

interface Shortcut {
  tittle: string;
  values: Value[];
}

interface Value {
  description: string;
  command: string;
}
