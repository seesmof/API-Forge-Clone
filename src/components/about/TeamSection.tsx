import Image from "next/image";

interface Member {
  pictureName: string;
  name: string;
  position: string;
}

const members: Member[] = [
  { pictureName: "Alex", name: "Alex Kim", position: "CEO & Co-Founder" },
  { pictureName: "Maya", name: "Maya Rodriguez", position: "CTO & Co-Founder" },
  { pictureName: "Jordan", name: "Jordan Lee", position: "Head of Platform" },
  {
    pictureName: "Priya",
    name: "Priya Sharma",
    position: "Head of Developer Relations",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-white">
      <div className="px-4 py-20 mx-auto max-w-7xl">
        <article className="text-center">
          <h3 className="font-bold text-3xl">Meet the Team</h3>
          <p className="mt-4 text-stone-600">
            Engineers building tools for engineers.
          </p>
        </article>

        <article className="flex flex-col md:flex-row gap-6 mt-12">
          {members.map((member, index) => (
            <div
              className="flex flex-col items-center justify-center"
              key={index}
            >
              <Image
                src={`/${member.pictureName}.jfif`}
                height={140}
                width={140}
                alt="An image of the person."
                className="rounded-full"
              />
              <h4 className="font-bold mt-4">{member.name}</h4>
              <p className="text-stone-600 text-[0.9rem]">{member.position}</p>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}
