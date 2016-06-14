declare class Notification {

  static permission: string;
  
  static requestPermission(callback: (permission: string) => void): void;

  constructor(title: string, options?: any);

  onclick(callback: (event: MouseEvent) => void): void;

}
