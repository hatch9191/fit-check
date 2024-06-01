import { setupServer } from "msw/node";

import { eventHandlers } from "./handlers/events";

export const server = setupServer(...eventHandlers);
