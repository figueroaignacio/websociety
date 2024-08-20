// Hooks
import { getTranslations } from "next-intl/server";

// Next
import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const t = await getTranslations("postsConfig");

  return new ImageResponse(
    (
      <div
        style={{
          fontWeight: "bold",
          background: "#09090b",
          color: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
          position: "relative",
        }}
      >
        <svg
          width="124"
          height="124"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="34" height="34" rx="6" fill="#6B21A8" />
          <path
            d="M6 11C6 9.34315 7.34315 8 9 8V8C10.6569 8 12 9.34315 12 11V23C12 24.6569 10.6569 26 9 26V26C7.34315 26 6 24.6569 6 23V11Z"
            fill="#F5F5F5"
          />
          <rect x="13" y="8" width="15" height="5" rx="2.5" fill="#F5F5F5" />
          <rect x="13" y="14" width="10" height="5" rx="2.5" fill="#F5F5F5" />
          <circle cx="27.5" cy="24.5" r="1.5" fill="#F5F5F5" />
        </svg>
        <div style={{ textAlign: "center" }}>Frontend Society</div>
        <div style={{ textAlign: "center" }}>{t("title")}</div>
        <div
          style={{
            textAlign: "center",
            fontSize: ".75rem",
          }}
        >
          {t("description")}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
