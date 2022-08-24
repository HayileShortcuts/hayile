export type Tshortcuts = {
  operatingSystem: string;
  environment: string;
  shortcuts: [
    {
      tittle: string;
      values: [
        {
          description: string;
          command: string;
        }
      ];
    }
  ];
};
