import React from "react";

import {
  IEventByUserIdQuery,
  useEventByUserIdQuery,
} from "@/graphql/codegen/codegen_rq";

const Home = () => {
  const { data, isError, isLoading, error } = useEventByUserIdQuery<
    IEventByUserIdQuery,
    Error
  >({
    userId: "920f02b0-6c0e-11e9-975a-7d2b1c167fa2",
  });

  const [event] = data?.events || [];

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  if (isError) {
    return <h1>Something went wrong: {error.message}</h1>;
  }

  return <h1>Fortune and glory, kid. Fortune and glory. {event?.type}</h1>;
};

export default Home;
