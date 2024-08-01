import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Frontend Society",
    short_name: "FS",
    description:
      "Frontend Society is a thriving community of frontend developers who come together to share knowledge, collaborate, and grow their skills. We are passionate about building beautiful and user-friendly web experiences.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#f5f5f5",
    icons: [
      {
        src: "/icon.tsx",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
