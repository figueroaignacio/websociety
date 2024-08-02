// Next
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

// Config
import { siteConfig } from "@/config/site";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const title = searchParams.get("title");
    const description = searchParams.get("description");

    if (!title) {
      return new Response("No title provided", { status: 500 });
    }

    const heading =
      title.length > 140 ? `${title.substring(0, 140)}...` : title;

    return new ImageResponse(
      (
        <div tw="flex relative flex-col p-12 w-full h-full items-start bg-[#09090b] text-white">
          <div tw="flex items-center">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="34" height="34" rx="6" fill="#6B21A8" />
              <path
                d="M6 11C6 9.34315 7.34315 8 9 8V8C10.6569 8 12 9.34315 12 11V23C12 24.6569 10.6569 26 9 26V26C7.34315 26 6 24.6569 6 23V11Z"
                fill="#F5F5F5"
              />
              <rect
                x="13"
                y="8"
                width="15"
                height="5"
                rx="2.5"
                fill="#F5F5F5"
              />
              <rect
                x="13"
                y="14"
                width="10"
                height="5"
                rx="2.5"
                fill="#F5F5F5"
              />
              <circle cx="27.5" cy="24.5" r="1.5" fill="#F5F5F5" />
            </svg>
            <p tw="ml-2 font-bold text-2xl">Frontend Society</p>
          </div>
          <div tw="flex flex-col flex-1 py-10">
            <div tw="flex text-xl uppercase font-bold tracking-tight">POST</div>
            <div tw="flex text-[80px] font-bold text-[50px]">{heading}</div>
            <div>Description of the post</div>
          </div>
          <div tw="flex items-center w-full justify-between">
            <div tw="flex text-xl">{siteConfig.url}</div>
            <div tw="flex items-center text-xl">
              <div tw="flex ml-2">{siteConfig.links.github}</div>
            </div>
          </div>
        </div>
      ),
      { width: 1200, height: 630 }
    );
  } catch (error) {
    return new Response("Failed to generate image", { status: 500 });
  }
}
