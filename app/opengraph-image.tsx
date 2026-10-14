import { ImageResponse } from "next/og";

export const alt = "Apoorva Sharma — Unity Gameplay Programmer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background: "#0B1120",
          color: "#F8FAFC",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#62E6CE",
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          Engineering Portfolio
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 76,
            fontWeight: 700,
            letterSpacing: "-0.04em",
          }}
        >
          Apoorva Sharma
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            color: "#CBD5E1",
            fontSize: 34,
          }}
        >
          Unity Gameplay Programmer
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 42,
            color: "#62E6CE",
            fontSize: 24,
          }}
        >
          Gameplay Systems • Interactive AI • XR
        </div>
      </div>
    ),
    size
  );
}
