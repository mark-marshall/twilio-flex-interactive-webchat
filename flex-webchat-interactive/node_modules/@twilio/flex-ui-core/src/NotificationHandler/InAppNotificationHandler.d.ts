import { Notification, DefaultNotificationHandlerType } from "../NotificationManager";
import { BaseNotificationHandler } from "./BaseNotificationHandler";
/**
 * @private
 * @class InAppNotificationHandler
 * @extends {BaseNotificationHandler}
 */
export declare class InAppNotificationHandlerImpl extends BaseNotificationHandler {
    readonly id = DefaultNotificationHandlerType.InApp;
    canHandleNotification(n: Notification): boolean;
    handleNotification(n: Notification): void;
    dismissNotification(n: Notification): void;
    private activeNotifications;
    getActiveNotifications(): Notification[];
    private notifyChanged;
    static onChange: Function;
}
export declare const InAppNotificationHandler: InAppNotificationHandlerImpl;
