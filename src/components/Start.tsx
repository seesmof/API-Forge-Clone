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
              <option value="" disabled selected hidden>
                Select a project type
              </option>
              <option value="residential">Residential Consturction</option>
              <option value="commercial">Commercial Building</option>
              <option value="renovation">Renovation & Remodeling</option>
              <option value="interior">Interior Design</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="details">Project Details</label>
            <textarea
              className="resize-none"
              name="details"
              id="details"
              rows={5}
              placeholder="Tell us about your project..."
            />
          </div>

          <button className="cursor-pointer duration-150 hover:bg-orange-700 bg-orange-600 text-white font-semibold w-full rounded-md py-2 shadow shadow-orange-300">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
