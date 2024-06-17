import { UserContextProvider } from "@/contexts/user/provider";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserContextProvider>
          <header>
            <Link href="/">Home</Link>
            <Link href="/about-us">AboutUs</Link>
            <Link href="/headphones">Headphones</Link>
          </header>
          <div>{children}</div>
        </UserContextProvider>
      </body>
    </html>
  );
}
