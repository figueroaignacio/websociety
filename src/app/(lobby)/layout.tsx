// Components
import { FramerWrapper } from "@/components/framer";
import { Footer } from "@/components/layout/footer";
import { Gradient } from "@/components/layout/gradient";
import { Navbar } from "@/components/layout/navbar";

// Global styles
import "@/styles/globals.css";

export default function LobbyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-pt-[3.5rem]">
      <body>
        <Gradient />
        <Navbar />
        <main className="container">
          <FramerWrapper>{children}</FramerWrapper>
        </main>
        <Footer />
      </body>
    </html>
  );
}
