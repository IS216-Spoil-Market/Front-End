import { Socket, io } from "socket.io-client";
import { DefaultEventsMap } from "@socket.io/component-emitter";

const endpoint = import.meta.env.DEV
	? import.meta.env.VITE_DEVELOPMENT_SERVER
	: import.meta.env.VITE_PRODUCTION_SERVER;

export const socket: Socket<DefaultEventsMap, DefaultEventsMap> = io(endpoint);
