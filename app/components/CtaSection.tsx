"use client";

import Reveal from "./Reveal";

const messageContact = encodeURIComponent(
  'Hola Ana! Quería consultar por las invitaciones digitales para eventos'
);

export default function FinalCtaSection() {
    return (
        <section id="contact" className="py-32 bg-[#FAFAF9]">
            <div className="max-w-4xl mx-auto px-6 text-center">

                <Reveal>
                    <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
                        Tu evento merece algo especial
                    </h2>

                    <p className="text-gray-600 leading-relaxed mb-10">
                        Creamos una invitación digital que acompañe tu celebración
                        desde el primer momento.
                    </p>

                    <a
                        href={`https://wa.me/5491164540220?text=${messageContact}`}
                        className="inline-block px-10 py-4 rounded-lg bg-rose-300 text-gray-900 hover:bg-rose-200 transition"
                    >
                        Contactanos por WhatsApp
                    </a>
                </Reveal>

            </div>
        </section>
    );
}
