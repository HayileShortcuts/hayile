interface ShortcutsEnvironment {
  operativeSystem: OS;
  environment: string;
  shortcuts: Shortcut[];
}

interface Shortcut {
  title: string;
  values: Value[];
}

interface Value {
  description: string;
  command: string;
}

type OS = 'Windows' | 'MacOS' | 'Linux';

export { ShortcutsEnvironment, Shortcut, Value, OS };
