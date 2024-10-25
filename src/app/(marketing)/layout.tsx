import { ReactNode } from "react";
import { Navbar } from "./_components/NavBar";
import { ClerkProvider } from "@clerk/nextjs";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <div className="selection:bg-[hsl(320,65%,52%,20%)]">
        <Navbar />
        {children}
      </div>
    </ClerkProvider>
  );
}
