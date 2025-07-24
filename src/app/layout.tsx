import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NoSsr from '@mui/material/NoSsr';
import { Container, Paper } from "@mui/material";
import Header from "./components/header/Header";
import ThemeRegistry from "./theme/ThemeRegistry";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bhagyashri Padmawar",
  description: "Bhagyashri Padmawar's fun projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NoSsr>
          <ThemeRegistry>
          <Container>
            <Paper elevation={2}>
              <Header />
              {children}
            </Paper>
          </Container>
          </ThemeRegistry>
        </NoSsr>
      </body>
    </html>
  );
}
