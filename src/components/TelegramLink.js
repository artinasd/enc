"use client";

const TELEGRAM_USERNAME = "EnCourseAdmin";
const TELEGRAM_APP_URL = `tg://resolve?domain=${TELEGRAM_USERNAME}`;
const TELEGRAM_WEB_URL = `https://t.me/${TELEGRAM_USERNAME}`;

export default function TelegramLink({ children, className = "" }) {
  const handleClick = (event) => {
    event.preventDefault();

    let fallbackTriggered = false;
    const fallbackTimer = window.setTimeout(() => {
      fallbackTriggered = true;
      window.location.assign(TELEGRAM_WEB_URL);
    }, 900);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        window.clearTimeout(fallbackTimer);
        fallbackTriggered = true;
        document.removeEventListener("visibilitychange", handleVisibilityChange);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.location.href = TELEGRAM_APP_URL;

    window.setTimeout(() => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (!fallbackTriggered) window.clearTimeout(fallbackTimer);
    }, 1200);
  };

  return (
    <a
      href={TELEGRAM_APP_URL}
      onClick={handleClick}
      className={className}
      aria-label="ارتباط با EnCourseAdmin در تلگرام"
    >
      {children}
    </a>
  );
}
