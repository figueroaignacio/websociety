import { getTranslations } from "next-intl/server";

// Next
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const t = await getTranslations("siteConfig");

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
        <div tw="flex relative flex-col p-12 w-full h-full items-start bg-[#09090b] text-[#f5f5f5]">
          <div tw="flex items-center gap-2">
            <svg
              width="34"
              height="34"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="200" height="200" fill="#6b21a8" rx="34" />
              <g
                fill="none"
                stroke="#ffffff"
                strokeWidth="16"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M50 100 L75 75 L50 50" />
                <path d="M150 100 L125 125 L150 150" />
                <path d="M75 150 L125 50" />
              </g>
            </svg>
            <div>Devs</div>
          </div>
          <div tw="flex flex-col flex-1 py-10">
            <div tw="flex text-xl uppercase font-bold tracking-tight text-[#f5f5f5]">
              POST
            </div>
            <div tw="flex text-[80px] font-bold text-[50px]">{heading}</div>
            <div tw="text-[#f5f5f5] text-lg">{description}</div>
          </div>
          <div tw="flex items-center w-full justify-between">
            <div tw="flex text-xl text-[#f5f5f5]">{t("url")}</div>
            <div tw="flex items-center text-xl">
              <div tw="flex ml-2">
                https://github.com/figueroaignacio/frontendsociety
              </div>
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
