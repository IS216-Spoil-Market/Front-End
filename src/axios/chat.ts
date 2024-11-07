import { ChatItem, MessageItem } from "../types/chat";
import { chatInstance, messageInstance } from "./client";

export const createOrGetChat = async (id: string) => {
    const { data } = await chatInstance.post("", { id });
    return data as ChatItem;
};

export const getChats = async () => {
    const { data } = await chatInstance.get("");
    return data as ChatItem[];
};

export const sendMessage = async (chatId: string, content: string) => {
    const { data } = await messageInstance.post("", { chatId, content });
    return data as MessageItem;
};

export const getAllMessagesByChatId = async (chatId: string) => {
    const { data } = await messageInstance.get(`/${chatId}`);
    return data as MessageItem[];
};
