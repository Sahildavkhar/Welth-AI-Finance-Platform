import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welth",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          {/* Favicon */}
          <link rel="icon" href="/app/favicon.ico" sizes="48x48" type="image/png" />
          <link rel="shortcut icon" href="/app/favicon.ico" type="image/png" />
          <meta name="theme-color" content="#0f172a" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body className={inter.className}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>Made with 💗 by Sahil Davkhar</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
