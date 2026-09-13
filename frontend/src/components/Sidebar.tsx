const Sidebar = () => {
  const navigation = [
    { label: "Dashboard", icon: "⌂", active: true },
    { label: "Projects", icon: "▣" },
    { label: "Tasks", icon: "✓" },
    { label: "Team", icon: "♙" },
  ];

  return (
    <aside className="flex w-24 shrink-0 flex-col border-r border-slate-200 bg-white px-2 py-6 text-slate-700 lg:w-72 lg:px-4">
      <div className="flex items-center justify-center gap-3 px-2 lg:justify-start lg:px-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold text-white">
          C
        </div>
        <span className="hidden text-xl font-bold tracking-tight text-slate-900 lg:inline-block">
          Collab
        </span>
      </div>

      <div className="mt-10 hidden px-3 text-xs font-semibold uppercase tracking-wider text-slate-400 lg:block">
        Workspace
      </div>
      <nav className="mt-3 space-y-1">
        {navigation.map((item) => (
          <a
            key={item.label}
            href="#"
            title={item.label}
            className={`flex items-center justify-center gap-3 rounded-lg px-2 py-2.5 text-sm font-medium transition lg:justify-start lg:px-3 ${
              item.active
                ? "bg-indigo-50 text-indigo-700"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            <span className="flex w-5 justify-center text-base">
              {item.icon}
            </span>
            <span className="hidden lg:inline-block">{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="mt-8 hidden px-3 text-xs font-semibold uppercase tracking-wider text-slate-400 lg:block">
        Personal
      </div>
      <nav className="mt-3 space-y-1">
        <a
          href="#"
          title="Settings"
          className="flex items-center justify-center gap-3 rounded-lg px-2 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900 lg:justify-start lg:px-3"
        >
          <span className="flex w-5 justify-center">⚙</span>
          <span className="hidden lg:inline-block">Settings</span>
        </a>
        <a
          href="#"
          title="Help center"
          className="flex items-center justify-center gap-3 rounded-lg px-2 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900 lg:justify-start lg:px-3"
        >
          <span className="flex w-5 justify-center">?</span>
          <span className="hidden lg:inline-block">Help center</span>
        </a>
      </nav>

      <div className="mt-auto rounded-xl bg-slate-50 p-2 lg:p-3">
        <div className="flex items-center justify-center gap-2 lg:justify-start">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-700">
            AM
          </div>
          <div className="hidden min-w-0 flex-1 lg:block">
            <p className="truncate text-sm font-semibold text-slate-900">
              Abbas Mirza
            </p>
            <p className="truncate text-xs text-slate-500">abbas@example.com</p>
          </div>
          <button
            aria-label="More options"
            className="hidden text-lg text-slate-400 hover:text-slate-700 lg:inline-block"
          >
            •••
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
