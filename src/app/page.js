export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative px-6 py-24 sm:py-32 lg:px-8 bg-primary-50">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
            تسلط به زبان انگلیسی، با تدریس خصوصی و آنلاین
          </h1>
          <p className="text-lg leading-8 text-gray-600 mb-10">
            یادگیری زبان انگلیسی را با برنامه‌ای کاملاً شخصی‌سازی شده، زمانبندی منعطف و در محیطی راحت تجربه کنید. مسیر موفقیت شما از اینجا آغاز می‌شود.
          </p>
          <div className="flex items-center justify-center gap-x-6">
            <a
              href="https://t.me/yourtelegram_username"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-all duration-300 transform hover:scale-105"
            >
              شروع مشاوره در تلگرام
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">مزایای کلاس‌های ما</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              چرا کلاس‌های خصوصی؟
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              با تمرکز کامل بر نیازها و اهداف شما، یادگیری زبان دیگر خسته‌کننده و زمان‌بر نخواهد بود.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary-100">
                  <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                  </svg>
                </div>
                <dt className="text-xl font-semibold leading-7 text-gray-900">برنامه شخصی‌سازی شده</dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">محتوای آموزشی کاملاً بر اساس سطح فعلی و اهداف شما طراحی می‌شود تا بهترین نتیجه را در کمترین زمان بگیرید.</p>
                </dd>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary-100">
                  <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <dt className="text-xl font-semibold leading-7 text-gray-900">زمان‌بندی منعطف</dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">کلاس‌ها در زمان‌هایی که برای شما مناسب‌تر است برگزار می‌شوند، حتی در روزهای تعطیل یا ساعات غیر اداری.</p>
                </dd>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary-100">
                  <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                  </svg>
                </div>
                <dt className="text-xl font-semibold leading-7 text-gray-900">۱۰۰٪ آنلاین</dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">بدون نیاز به رفت و آمد، از هر کجای دنیا و در راحتی خانه خودتان در کلاس‌ها شرکت کنید.</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">درباره مدرس</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              با سال‌ها تجربه در زمینه آموزش زبان انگلیسی، من اینجا هستم تا به شما کمک کنم به اهداف زبانی خود دست پیدا کنید. تمرکز من بر روی روش‌های نوین و کاربردی است تا یادگیری برای شما لذت‌بخش و مؤثر باشد.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="https://t.me/yourtelegram_username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold leading-6 text-primary-600 hover:text-primary-500"
              >
                ارتباط با من <span aria-hidden="true">&larr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 sm:py-16 lg:px-8 text-center border-t border-gray-100">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} کلیه حقوق محفوظ است. طراحی شده برای آموزش آنلاین زبان انگلیسی.
          </p>
        </div>
      </footer>
    </div>
  );
}
