import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Provider from "./Provider";
import { Host_Grotesk, Host_Grotesk } from "next/font/google";

const host_Grotesk = Host_Grotesk({
  subsets: ["latin"],
});

export const metadata = {
  title: "Logoipsum",
  description: "Ai Logo Generator",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={host_Grotesk.className}>
          <Provider>{children}</Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
