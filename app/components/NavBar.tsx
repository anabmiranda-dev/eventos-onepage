"use client";

import { useState } from "react";
import { Menu, X, PartyPopper } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full z-50 bg-rose-100/90 backdrop-blur">
            <div className="max-w-7xl mx-auto px-4 md:px-8 h-14 md:h-20 flex items-center justify-between">

                {/* Logo */}
                <span className="font-serif text-lg md:text-xl text-[#3B7A93]">
                    <PartyPopper className="text-rose-400"/>
                </span>

                {/* Desktop menu */}
                <nav className="hidden md:flex gap-8 text-sm text-gray-600">
                    <a href="#experience" className="hover:opacity-70">Qué incluye</a>
                    <a href="#pricing" className="hover:opacity-70">Planes</a>
                    <a href="#contact" className="hover:opacity-70">Contacto</a>
                </nav>

                {/* Mobile button */}
                <button
                    className="md:hidden text-gray-600"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden bg-rose-100/90 px-6 py-4 space-y-4 text-sm text-gray-600">
                    <a href="#experience" className="block">Qué incluye</a>
                    <a href="#pricing" className="block">Planes</a>
                    <a href="#contact" className="block">Contacto</a>
                </div>
            )}
        </header>
    );
}
