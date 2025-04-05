import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Weather Forecast - Your City Weather",
  description:
    "Get accurate and hourly weather forecast for your city. Plan your day with confidence!",
  keywords: "weather, forecast, hourly, climate, city, temperature, rain, wind",
  authors: [{ name: "Hovhannes" }],
  openGraph: {
    title: "Weather Forecast",
    description: "Live hourly weather updates and forecast",
    url: "https://g-forecast-weather.netlify.app",
    siteName: "Weather Forecast",
    images: [
      {
        url: "/weather-og.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Weather Forecast",
    description: "Get the latest weather updates now!",
    images: ["/weather-og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
