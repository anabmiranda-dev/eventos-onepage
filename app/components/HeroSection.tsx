"use client";

import Section from "./Section";
import Reveal from "./Reveal";

export default function HeroSection() {
    return (
        <Section>
            <div className="flex flex-col justify-center items-center text-center gap-8 md:gap-10 pt-10">
                <Reveal>
                    <span className="inline-block mb-6 px-4 py-1 text-xs tracking-widest uppercase rounded-full bg-rose-100 text-rose-700">
                        Invitaciones digitales
                    </span>
                </Reveal>

                <Reveal>
                    <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
                        La web de tu evento,
                        <br />
                        <span className="text-rose-400">simple y versátil</span>
                    </h1>
                </Reveal>

                <Reveal>
                    <p className="text-gray-600 mb-8 max-w-md">
                        Un solo link con toda la información que tus invitados necesitan.
                        Diseñado para compartir, disfrutar y recordar.
                    </p>
                </Reveal>

                <Reveal>
                    <p className="text-xl text-gray-700 mb-10">
                        Una forma de{" "}
                        <span className="font-['Ms_Madi',cursive] text-rose-300 text-4xl">
                            celebrar
                        </span>
                    </p>
                </Reveal>

                <Reveal>
                    <div className="flex gap-4 flex-wrap justify-center">
                        <a href="#pricing" className="px-6 py-3 rounded-lg bg-rose-300 text-gray-900 hover:bg-rose-200 transition">
                            Ver planes
                        </a>
                        <a href="#" className="px-6 py-3 rounded-lg border border-gray-300 hover:border-gray-400 transition">
                            Ver ejemplos
                        </a>
                    </div>
                </Reveal>
            </div>
        </Section>
    );
}
