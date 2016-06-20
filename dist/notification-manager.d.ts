export declare abstract class NotificationManager {
    abstract success(text: string, title?: string, options?: Object): any;
    abstract warning(text: string, title?: string, options?: Object): any;
    abstract error(text: string, title?: string, options?: Object): any;
    abstract remove(): any;
    abstract clear(): any;
}
