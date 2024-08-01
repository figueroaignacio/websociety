import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 50,
  height: 50,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          borderRadius: "5px",
        }}
      >
        FS
      </div>
    ),
    {
      ...size,
    }
  );
}
