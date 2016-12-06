export abstract class NotificationManager {

    abstract success(text: string, title?: string, options?: Object);

    abstract warning(text: string, title?: string, options?: Object);

    abstract error(text: string, title?: string, options?: Object);

    abstract remove();

    abstract clear();

}
