import { graphql, HttpResponse } from "msw";

import { eventByUserIdFixture } from "@/helpers/tests/mockServer/fixtures/events";

export const eventHandlers = [
  graphql.query("EventByUserId", () => {
    return HttpResponse.json({
      data: eventByUserIdFixture,
    });
  }),
];
