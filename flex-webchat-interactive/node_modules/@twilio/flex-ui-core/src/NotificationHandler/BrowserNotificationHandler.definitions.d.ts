import { Notification } from "../NotificationManager";
/**
 * Notification options for the browser notification handler
 *
 * @typedef BrowserNotificationOptions
 * @memberof NotificationManager
 */
export interface BrowserNotificationOptions {
    title?: string;
    body?: string;
    onClick?: (notification: Notification, event: Event) => void;
    onClose?: (notification: Notification, event: Event) => void;
    onShow?: (notification: Notification, event: Event) => void;
    onError?: (notification: Notification, event: Event) => void;
    options?: NotificationOptions;
}
