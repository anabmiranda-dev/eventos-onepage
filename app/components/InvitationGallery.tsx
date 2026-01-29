"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

type Invitation = {
    id: number;
    title: string;
    subtitle?: string;
    image: string;
    link: string;
};

type Props = {
    items: Invitation[];
};

export default function InvitationGallery({ items }: Props) {
    return (
        <section id="ejemplos" className="py-28 bg-[#FAFAF9]">
            <div className="max-w-6xl mx-auto px-6">
                <Reveal>
                    {/* Header */}
                    <div className="max-w-2xl mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gray-900">
                            Inspiraciones reales
                        </h2>

                        <p className="text-gray-600 leading-relaxed mb-8">
                            Cada evento es único. Estos son algunos ejemplos de páginas diseñadas para contar una historia, compartir información y acompañar momentos importantes.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid md:grid-cols-2 gap-10">
                        {items.map((item, index) => (
                            <a key={item.id} href={item.link} target="_blank" className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow">
                                {/* Imagen */}
                                <div className="relative h-[420px] overflow-hidden">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                                </div>

                                {/* Texto sobre la imagen */}
                                <div className=" absolute bottom-6 left-6 right-6 flex items-center justify-between gap-4">
                                    <div className=" bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl">
                                        <h3 className=" text-gray-800 font-medium leading-snug">
                                            {item.title}
                                        </h3>

                                        {item.subtitle && (
                                            <p className="text-sm text-gray-500 mt-1">
                                                {item.subtitle}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
