import { Socket, io } from "socket.io-client";
import { DefaultEventsMap } from "@socket.io/component-emitter";

export const socket: Socket<DefaultEventsMap, DefaultEventsMap> = io("http://localhost:5001");
