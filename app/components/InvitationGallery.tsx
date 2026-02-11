"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

type Invitation = {
    id: number;
    title: string;
    category: string;
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
                            Cada evento es único. Estos son algunos ejemplos de páginas diseñadas
                            para contar una historia, compartir información y acompañar momentos
                            importantes.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid md:grid-cols-2 gap-12">
                        {items.map((item) => (
                            <a
                                key={item.id}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative rounded-3xl overflow-hidden bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
                            >
                                {/* Imagen */}
                                <div className="relative h-[420px]">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                    />

                                    {/* Gradiente sutil */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent" />

                                    {/* Categoría */}
                                    <span className="absolute top-5 left-5 text-xs uppercase tracking-wide bg-white/70 backdrop-blur-md px-3 py-1 rounded-full text-gray-700">
                                        {item.category}
                                    </span>

                                    {/* Título con fondo suave */}
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="inline-block bg-white/75 backdrop-blur-md px-4 py-2 rounded-xl shadow-sm transition-colors duration-500 group-hover:bg-white/85">
                                            <h3 className="text-gray-900 text-lg font-serif leading-snug">
                                                {item.title}
                                            </h3>
                                        </div>
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

