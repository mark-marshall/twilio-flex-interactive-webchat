import { MessageStyle } from "../MessagingCanvas/MessagingCanvas";
import { MessageState } from "../../../state/ChannelState";
import * as React from "react";
export interface AvatarProps {
    messageStyle: MessageStyle;
    message: MessageState;
    avatarUrl?: string;
}
export declare const Avatar: React.FC<AvatarProps>;
