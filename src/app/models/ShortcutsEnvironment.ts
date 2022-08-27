interface ShortcutsEnvironment {
  operatingSystem: OS;
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

type OS = 'Windows' | 'MacOS' | 'Linux';

export { ShortcutsEnvironment, Shortcut, Value, OS };
