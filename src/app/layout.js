import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata = {
  title: "UniEnglish | کلاس خصوصی آنلاین زبان انگلیسی",
  description:
    "کلاس‌های خصوصی و آنلاین زبان انگلیسی با مسیر آموزشی شخصی‌سازی‌شده، زمان‌بندی منعطف و تمرکز بر مکالمه و اعتمادبه‌نفس.",
  keywords: ["آموزش زبان انگلیسی", "کلاس خصوصی زبان", "کلاس آنلاین زبان", "UniEnglish"],
  openGraph: {
    title: "UniEnglish | انگلیسی را برای زندگی واقعی یاد بگیر",
    description: "کلاس خصوصی آنلاین زبان انگلیسی، متناسب با هدف و مسیر شما.",
    type: "website",
    locale: "fa_IR",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} font-sans`}>
      <body className="antialiased min-h-screen font-sans">{children}</body>
    </html>
  );
}
