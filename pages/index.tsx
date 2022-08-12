import useSWR from "swr";

import { TimesColumn } from "./TimesColumn";
import { TimesSeparatorLines } from "./TimesSeparatorLines";

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
  const eventBlockHeight = 50;
  const { data, error } = useSWR(
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

      <div className="events">
        {events.map(({ start, end, title }) => {
          const startHour = start / 60;
          const eventLengthMins = (end - start);
          const heightPx = (eventLengthMins / 60) * eventBlockHeight;

          return (
            <div
              className="event"
              title={title}
              style={{
                height:`calc(${heightPx}px - 2px)`,
                top: `${eventBlockHeight * startHour}px`,
            }}>
              {title}
            </div>
          )
        })}
      </div>
    </div>
  );
}
