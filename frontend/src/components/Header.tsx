const Header = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600 lg:hidden">
            ☰
          </div>

          <label className="hidden min-w-0 flex-1 items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-slate-500 lg:flex">
            <span aria-hidden="true">⌕</span>
            <input
              type="text"
              placeholder="Search tasks or projects"
              className="w-full border-0 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />
          </label>
        </div>

        <div className="flex items-center gap-3">
          <button className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-indigo-200 hover:text-indigo-600">
            + New task
          </button>

          <button
            type="button"
            aria-label="Notifications"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-indigo-200 hover:text-indigo-600"
          >
            🔔
          </button>

          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-2 py-1.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-700">
              AM
            </div>
            <div className="hidden text-left sm:block">
              <p className="text-sm font-semibold text-slate-900">
                Abbas Mirza
              </p>
              <p className="text-xs text-slate-500">Product Lead</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
