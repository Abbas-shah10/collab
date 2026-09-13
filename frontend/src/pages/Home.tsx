const Home = () => {
  const stats = [
    {
      label: "Active projects",
      value: "12",
      tone: "bg-indigo-50 text-indigo-700",
    },
    { label: "Tasks due", value: "28", tone: "bg-amber-50 text-amber-700" },
    {
      label: "Team members",
      value: "9",
      tone: "bg-emerald-50 text-emerald-700",
    },
    { label: "Completion", value: "74%", tone: "bg-violet-50 text-violet-700" },
  ];

  const tasks = [
    {
      title: "Design system update",
      team: "Product",
      due: "Today",
      status: "In progress",
    },
    {
      title: "Sprint planning",
      team: "Engineering",
      due: "Tomorrow",
      status: "Review",
    },
    {
      title: "Client onboarding",
      team: "Operations",
      due: "Wed",
      status: "Blocked",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-600">
            Workspace overview
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Good morning, Abbas
          </h1>
        </div>

        <button className="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-500">
          View report
        </button>
      </div>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div
              className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${stat.tone}`}
            >
              {stat.label}
            </div>
            <div className="mt-4 text-3xl font-bold text-slate-900">
              {stat.value}
            </div>
          </div>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.5fr_0.9fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">
              Today’s priorities
            </h2>
            <span className="text-sm text-slate-500">Updated 5 min ago</span>
          </div>

          <div className="mt-5 space-y-4">
            {tasks.map((task) => (
              <div
                key={task.title}
                className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <div>
                  <p className="font-semibold text-slate-900">{task.title}</p>
                  <p className="mt-1 text-sm text-slate-500">
                    {task.team} · Due {task.due}
                  </p>
                </div>

                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                    task.status === "In progress"
                      ? "bg-indigo-100 text-indigo-700"
                      : task.status === "Review"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-rose-100 text-rose-700"
                  }`}
                >
                  {task.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            Team activity
          </h2>

          <div className="mt-5 space-y-4">
            {[
              {
                name: "Maya",
                action: "commented on onboarding flow",
                time: "12m ago",
              },
              { name: "Ari", action: "completed API review", time: "36m ago" },
              { name: "Lena", action: "shared sprint notes", time: "1h ago" },
            ].map((item) => (
              <div key={item.name} className="flex items-start gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-xs font-semibold text-slate-700">
                  {item.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-slate-900">
                    {item.name}
                  </p>
                  <p className="text-sm text-slate-500">{item.action}</p>
                </div>
                <span className="ml-auto text-xs text-slate-400">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
