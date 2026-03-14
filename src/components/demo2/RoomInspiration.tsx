import Image from "next/image";
import { roomInspiration } from "@/components/demo2/content";

export default function RoomInspiration() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto w-full max-w-6xl px-4">
        <h2 className="text-center text-3xl font-semibold text-slate-800 md:text-4xl">Tiles in Real Spaces</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {roomInspiration.map((room) => (
            <article key={room.title} className="group relative h-72 overflow-hidden rounded-2xl shadow-lg">
              <Image src={room.image} alt={room.title} fill className="object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent" />
              <h3 className="absolute bottom-5 left-5 text-2xl font-semibold text-white">{room.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
