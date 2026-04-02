import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://dualcodesolutions.com"),
  title: "Dual Code Solutions | Desarrollo de Software a la Medida",
  description:
    "Transformamos tus ideas en soluciones digitales escalables que impulsan tu negocio. Desarrollo web, apps móviles, APIs, UI/UX y consultoría TI desde Mérida, Yucatán.",
  keywords:
    "desarrollo web, apps móviles, software, React, Next.js, Flutter, Node.js, Mérida, Yucatán, México, Dual Code Solutions",
  authors: [{ name: "Dual Code Solutions" }],
  openGraph: {
    title: "Dual Code Solutions | Desarrollo de Software a la Medida",
    description:
      "Transformamos tus ideas en soluciones digitales escalables que impulsan tu negocio.",
    url: "https://dualcodesolutions.com",
    siteName: "Dual Code Solutions",
    images: [{ url: "/logo-dual-code.png", width: 800, height: 600 }],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dual Code Solutions",
    description:
      "Desarrollo web, apps móviles, APIs y más desde Mérida, Yucatán.",
    images: ["/logo-dual-code.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${inter.variable} antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className="min-h-screen flex flex-col overflow-x-hidden w-full">{children}</body>
    </html>
  );
}
