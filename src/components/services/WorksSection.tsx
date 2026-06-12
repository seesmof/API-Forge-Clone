interface Step {
  heading: string;
  paragraph: string;
}

const steps: Step[] = [
  {
    heading: "Import Your Spec",
    paragraph:
      "Upload your OpenAPI or GraphQL schema, or point us at your existing endpoints.",
  },
  {
    heading: "Configure Your Gateway",
    paragraph:
      "Set up routing rules, auth policies, rate limits, and transformations through the dashboard.",
  },
  {
    heading: "Generate SDKs",
    paragraph:
      "Auto-generate type-safe client libraries in every language your consumers need.",
  },
  {
    heading: "Ship & Monitor",
    paragraph:
      "Deploy to our global edge network and monitor everything in real-time from day one.",
  },
];

export default function WorksSection() {
  return (
    <section className="bg-stone-100">
      <div className="px-4 py-16 mx-auto max-w-7xl">
        <article className="text-center">
          <h2 className="font-bold text-2xl">How It Works</h2>
          <p>Go from zero to production API in four simple steps.</p>
        </article>
        <article className="mt-12 flex flex-col gap-8">
          {steps.map((step, index) => (
            <div
              className="flex flex-col items-center justify-center"
              key={index}
            >
              <div className="rounded-full h-12 w-12 justify-center items-center flex bg-orange-600 font-bold text-white">
                {index + 1}
              </div>
              <h3 className="font-bold text-lg mt-4">{step.heading}</h3>
              <p className="text-center mt-2 text-[0.9rem]">{step.paragraph}</p>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}
