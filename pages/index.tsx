import useSWR from "swr";

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
  const { data, error } = useSWR(
    "{ events { id, title, start, end } }",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const { events } = data;

  console.log({events})

  return (
    <div className="container">
      <div className="separator-lines">
        <div className="separator-line"></div>
        <div className="separator-line"></div>
        <div className="separator-line"></div>
        <div className="separator-line"></div>
        <div className="separator-line"></div>
        <div className="separator-line"></div>
      </div>

      <div className="time-col">
        <div className="time-label">00:00</div>
        <div className="time-label">01:00</div>
        <div className="time-label">02:00</div>
        <div className="time-label">03:00</div>
        <div className="time-label">04:00</div>
        <div className="time-label">05:00</div>
      </div>

      <div className="events">
        <div className="event" style={{
          top: `${50*1}px`,
        }}>Event 1</div>
      </div>
    </div>
  );
}
