import Badge from "./Badge";

export default function StartSection() {
  return (
    <div className="bg-white">
      <div className="px-4 pt-16 flex flex-col">
        <Badge className="self-center">Get Started</Badge>
        <article className="text-center">
          <h2 className="font-bold text-3xl mt-4 tracking-tight">
            Start Building Today
          </h2>
          <p className="mt-3 text-stone-700">
            Sign up for a free API key and start building in minutes. Our
            developer relations team is here to help you succeed.
          </p>
        </article>

        <form className="mt-12">
          <div className="flex flex-col">
            <label
              className="font-bold text-sm cursor-pointer"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              name="fullName"
              id="fullName"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-bold text-sm cursor-pointer" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              name="email"
              id="email"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-bold text-sm cursor-pointer" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="(555) 123-4567"
              name="phone"
              id="phone"
              maxLength={10}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="type">Project Type</label>
            <select name="type" id="type">
              <option value="residential">Residential Consturction</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
}
