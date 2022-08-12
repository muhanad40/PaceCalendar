import useSWR from "swr";
import { IEvent } from "../types";
import Events from "../components/Events";

import { TimesColumn } from "../components/TimesColumn";
import { TimesSeparatorLines } from "../components/TimesSeparatorLines";

const fetcher = (query: string) =>
  fetch("/api/graphql", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((json) => json.data);

export default function Index() {
  const { data, error } = useSWR<{events: IEvent[]}>(
    "{ events { id, title, start, end } }",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const { events } = data;

  return (
    <div className="container">
      <TimesSeparatorLines />
      <TimesColumn />

      <Events events={events} />
    </div>
  );
}
