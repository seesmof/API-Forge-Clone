export default function ContactSection() {
  return (
    <div className="bg-linear-to-br from-orange-500 to-orange-800 mt-12">
      <div className="px-4 py-16 flex flex-col text-white text-center">
        <h2 className="mb-4 font-bold text-3xl">Ready to Ship Better APIs?</h2>
        <p className="font-medium">
          Join 1M+ developers building production-ready APIs with APIForge. Get
          started free — no credit card required.
        </p>
        <div className="flex gap-3 mt-10 justify-center">
          <button className="bg-white hover:bg-white/95 hover:outline-white/95 hover:shadow-xl cursor-pointer outline-2 outline-white rounded-md text-orange-800 p-2 px-6 transition duration-150">
            Get Free API Key
          </button>
          <button className="rounded-md cursor-pointer outline-2 outline-white/30 p-2 px-6 transition hover:outline-white/70 duration-150">
            Talk to Sales
          </button>
        </div>
      </div>
    </div>
  );
}
