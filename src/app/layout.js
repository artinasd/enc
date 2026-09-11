import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata = {
  title: "آموزش زبان انگلیسی - کلاس‌های خصوصی آنلاین",
  description: "کلاس‌های آنلاین و خصوصی زبان انگلیسی با بهترین کیفیت و پشتیبانی",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazirmatn.variable} font-sans scroll-smooth`}
    >
      <body className="antialiased min-h-screen bg-gray-50 text-gray-900 flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
