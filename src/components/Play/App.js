export default function App({ mapTilerApiKey }) {
  return (
    <div>
      <h1>hello</h1>
      <p>hello world</p>
      <p>{mapTilerApiKey ? "has key" : "no keys"} </p>
    </div>
  );
}
