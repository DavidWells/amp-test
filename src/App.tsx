import { useHealthCheck } from "./hooks";

function App() {
  const { status } = useHealthCheck();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          justifyContent: "center",
          flexDirection: "row",
          display: "flex",
          marginBottom: 30,
        }}
      >
        <img
          style={{ marginRight: 30, alignSelf: "flex-start" }}
          width="10%"
          height="20%"
          src="ampt.svg"
        />
        <h1>Hello from Ampt!</h1>
      </div>
      <h3>API Status: {status}</h3>
    </div>
  );
}

export default App;
