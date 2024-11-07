import { Profile } from "./user";

export interface ChatItem {
    users: Profile[];
    id: string;
    latestMessage: LatestMessageItem;
}

export interface LatestMessageItem {
    id: string;
    content: string;
    chat: string;
    createdAt: string;
    updatedAt: string;
    sender: Profile;
}

export interface MessageItem {
    id: string;
    sender: { name: string; id: string };
    content: string;
    createdAt: string;
    updatedAt: string;
}
