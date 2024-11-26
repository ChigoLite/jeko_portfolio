import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Context from "@/Components/context";
import { ThemeProvider } from "@mui/material";
import Theme from "@/theme";
import Footer from "../Components/home/footer";
import Navbar from "../Components/home/navbar";
import Head from "next/head";
export const metadata = {
  title: "AKA CHRISTIAN",
  description: "A Fulltime DevOps Engineer.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <title>{metadata.title}</title>
      </head>
      <body>
        <ThemeProvider theme={Theme}>
          <div className="home">
            <Navbar />
            <Context>{children}</Context>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
