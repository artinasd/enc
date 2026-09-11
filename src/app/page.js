import TelegramLink from "../components/TelegramLink";

const features = [
  {
    number: "۰۱",
    title: "مسیر کاملاً شخصی",
    description:
      "محتوای کلاس بر اساس سطح، هدف و نقاط قابل بهبود شما تنظیم می‌شود؛ نه یک برنامه یکسان برای همه.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
        <path d="M8 6h8M8 10h8" />
      </svg>
    ),
  },
  {
    number: "۰۲",
    title: "زمان‌بندی منعطف",
    description:
      "کلاس‌ها را با برنامه واقعی زندگی‌تان هماهنگ کنید و بدون رفت‌وآمد، از هر جا یاد بگیرید.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7v5l3.5 2" />
      </svg>
    ),
  },
  {
    number: "۰۳",
    title: "تمرکز روی نتیجه",
    description:
      "تمرین‌های کاربردی و بازخورد دقیق کمک می‌کنند اعتمادبه‌نفس و مهارت واقعی‌تان را قدم‌به‌قدم بسازید.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m4 15 4-4 3 3 7-8" />
        <path d="M18 6h2v2" />
        <path d="M4 19h16" />
      </svg>
    ),
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M15.5 10H4.5M9 4.5 3.5 10 9 15.5" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <nav className="nav" aria-label="ناوبری اصلی">
        <div className="container nav-inner">
          <a className="brand" href="#top" aria-label="صفحه اصلی EnCourse">
            <span className="brand-mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span>EnCourse</span>
          </a>

          <div className="nav-links">
            <a href="#benefits">مزایا</a>
            <a href="#about">درباره مدرس</a>
            <TelegramLink className="nav-cta">مشاوره رایگان</TelegramLink>
          </div>
        </div>
      </nav>

      <section id="top" className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" aria-hidden="true" />
              کلاس خصوصی آنلاین زبان انگلیسی
            </div>

            <h1>
              انگلیسی را یاد بگیر؛
              <span> برای زندگی واقعی.</span>
            </h1>

            <p className="hero-description">
              کلاس‌های خصوصی و آنلاین برای فارسی‌زبان‌هایی که می‌خواهند با یک مسیر
              شخصی، تمرین درست و بازخورد واقعی، انگلیسی را با اعتمادبه‌نفس استفاده کنند.
            </p>

            <div className="hero-actions">
              <TelegramLink className="primary-button">
                <span>شروع مشاوره</span>
                <ArrowIcon />
              </TelegramLink>
              <a className="secondary-button" href="#benefits">
                بیشتر بدانید
              </a>
            </div>

            <div className="hero-proof" aria-label="مزایای کلیدی">
              <div>
                <strong>۱ به ۱</strong>
                <span>تمرکز کامل روی شما</span>
              </div>
              <div className="proof-divider" aria-hidden="true" />
              <div>
                <strong>آنلاین</strong>
                <span>از هر جای دنیا</span>
              </div>
              <div className="proof-divider" aria-hidden="true" />
              <div>
                <strong>منعطف</strong>
                <span>هماهنگ با برنامه شما</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-label="نمایی از مسیر یادگیری زبان">
            <div className="visual-glow" aria-hidden="true" />
            <div className="learning-card">
              <div className="learning-topline">
                <span>مسیر یادگیری شما</span>
                <span className="live-pill"><i /> فعال</span>
              </div>

              <div className="progress-heading">
                <div>
                  <span>پیشرفت این هفته</span>
                  <strong>۷۸٪</strong>
                </div>
                <div className="progress-track" aria-hidden="true">
                  <span />
                </div>
              </div>

              <div className="lesson-list">
                <div className="lesson done">
                  <span className="lesson-icon">✓</span>
                  <div><strong>مکالمه روزمره</strong><small>تکمیل شد</small></div>
                  <span className="lesson-badge">تمام</span>
                </div>
                <div className="lesson current">
                  <span className="lesson-icon">→</span>
                  <div><strong>Speaking & Confidence</strong><small>درس امروز</small></div>
                  <span className="lesson-badge">امروز</span>
                </div>
                <div className="lesson">
                  <span className="lesson-icon">03</span>
                  <div><strong>Listening Skills</strong><small>جلسه بعدی</small></div>
                  <span className="lesson-badge">بعدی</span>
                </div>
              </div>
            </div>

            <div className="floating-note note-top">
              <span className="note-icon">✦</span>
              <div><strong>برنامه اختصاصی</strong><small>متناسب با هدف شما</small></div>
            </div>
            <div className="floating-note note-bottom">
              <span className="avatar-dot">E</span>
              <div><strong>بازخورد شخصی</strong><small>بعد از هر جلسه</small></div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="benefits section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-kicker">چرا EnCourse؟</span>
              <h2>یادگیری خوب، باید <em>برای شما</em> ساخته شود.</h2>
            </div>
            <p>
              هدف فقط تمام کردن یک کتاب نیست؛ می‌خواهیم انگلیسی بخشی طبیعی از زندگی و
              ارتباطات روزمره‌تان شود.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.number}>
                <div className="feature-top">
                  <span className="feature-icon">{feature.icon}</span>
                  <span className="feature-number">{feature.number}</span>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <span className="card-line" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="about section">
        <div className="container about-grid">
          <div className="about-art" aria-hidden="true">
            <div className="portrait-card">
              <div className="portrait-letter">E</div>
              <div className="portrait-lines"><i /><i /><i /></div>
              <span className="portrait-caption">ENGLISH · CONFIDENCE · PROGRESS</span>
            </div>
            <div className="about-stat"><strong>۱:۱</strong><span>Private<br />Sessions</span></div>
          </div>

          <div className="about-copy">
            <span className="section-kicker">درباره مدرس</span>
            <h2>یک مدرس، یک مسیر،<br /><em>تمرکز روی شما.</em></h2>
            <p>
              در کلاس‌های خصوصی، هر دقیقه برای هدف شماست. با بررسی سطح فعلی، شناخت
              نیازها و پیگیری مداوم، مسیر آموزشی به‌مرور دقیق‌تر و کاربردی‌تر می‌شود.
            </p>
            <p>
              اگر آماده‌اید جدی‌تر روی زبان انگلیسی کار کنید، از یک گفت‌وگوی کوتاه شروع
              می‌کنیم تا ببینیم بهترین نقطه شروع برای شما کجاست.
            </p>
            <TelegramLink className="text-link">
              <span>با من در تلگرام صحبت کنید</span>
              <ArrowIcon />
            </TelegramLink>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-card">
          <div>
            <span className="section-kicker">آماده‌ای شروع کنی؟</span>
            <h2>اولین قدم، فقط یک پیام است.</h2>
            <p>برای آشنایی و مشاوره، همین حالا در تلگرام پیام بده.</p>
          </div>
          <TelegramLink className="primary-button light-button">
            <span>شروع گفتگو در تلگرام</span>
            <ArrowIcon />
          </TelegramLink>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <a className="brand" href="#top" aria-label="بازگشت به ابتدای صفحه">
            <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
            <span>EnCourse</span>
          </a>
          <p>© {new Date().getFullYear()} EnCourse · آموزش خصوصی آنلاین زبان انگلیسی</p>
          <TelegramLink className="footer-link">ارتباط در تلگرام</TelegramLink>
        </div>
      </footer>
    </main>
  );
}
