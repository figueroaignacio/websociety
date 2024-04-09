import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Dev Notes | Studio",
  description: "Hey! this is where you're gonna make the articles and posts",
};

export default function ArticleDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
