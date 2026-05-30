import Badge from "./Badge";

export default function PlatformSection() {
  return (
    <div className="bg-stone-50">
      <div className="px-4 py-12 flex flex-col">
        <Badge className="self-center">Platform</Badge>
        <article className="text-center">
          <h2 className="font-bold text-3xl mt-4 tracking-tight">
            Everything You Need to Ship APIs
          </h2>
          <p className="mt-3">
            A complete toolkit for building, deploying, and managing
            production-grade APIs at any scale.
          </p>
        </article>
      </div>
    </div>
  );
}
