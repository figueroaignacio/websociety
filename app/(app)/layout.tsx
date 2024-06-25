// Components
import { Footer } from "@/components/footer";
import { Gradient } from "@/components/gradient";
import { Navbar } from "@/components/navbar";

// Global styles
import "@/styles/globals.css";

// Font
import { onest } from "@/font/onest";

export default function LobbyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-pt-[3.5rem]">
      <body className={`${onest.className} antialiased min-h-screen`}>
        <Gradient />
        <div className="min-h-dvh flex flex-col py-6 m-auto container max-w-6xl">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
