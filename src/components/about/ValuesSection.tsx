const Icon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={`h-6 w-6 ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
      ></path>
    </svg>
  );
};

interface Value {
  header: string;
  content: string;
}

const values: Value[] = [
  {
    header: "Developer Experience",
    content:
      "We obsess over DX. Every API, SDK, and dashboard is designed to minimize friction and maximize developer productivity.",
  },
  {
    header: "Performance",
    content:
      "Sub-millisecond gateway latency, 99.999% uptime, and global edge deployment. We never compromise on speed or reliability.",
  },
  {
    header: "Security",
    content:
      "Zero-trust architecture, SOC 2 Type II certified, and end-to-end encryption. Security is not an add-on — it is the foundation.",
  },
];

export default function ValuesSection() {
  return (
    <section className="bg-stone-100">
      <div className="px-4 py-12 mx-auto max-w-7xl">
        <article className="text-center">
          <h2 className="font-bold text-3xl">Our Values</h2>
          <p className="mt-4 text-stone-600">
            The principles that drive every decision we make.
          </p>
        </article>

        <article className="flex flex-col md:flex-row gap-4 mt-14">
          {values.map((value, index) => (
            <div className="bg-white rounded-2xl shadow-md flex-1" key={index}>
              <div className="p-6 flex flex-col gap-4">
                <div className="h-12 w-12 rounded-md bg-orange-50 flex items-center justify-center">
                  <Icon className="text-orange-600" />
                </div>
                <h3 className="font-bold">{value.header}</h3>
                <p>{value.content}</p>
              </div>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}
