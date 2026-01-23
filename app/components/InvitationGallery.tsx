"use client";

import Reveal from "./Reveal";

type Invitation = {
    id: number;
    title: string;
    image?: string;
    link: string;
};

type InvitationGalleryProps = {
    items: Invitation[];
};

const InvitationGallery = ({ items }: InvitationGalleryProps) => {
    if (!items || items.length === 0) {
        return (
            <p className="text-center text-gray-500">
                Próximamente ✨
            </p>
        );
    }

    return (
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 m-4">
                {items.map((item) => (
                    <Reveal key={item.id}>
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="group block rounded-xl overflow-hidden bg-white transition-shadow hover:shadow-lg"
                        >
                            {item.image && (
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                            )}

                            <div className="p-4">
                                <h3 className="font-medium">{item.title}</h3>
                            </div>
                        </a>
                    </Reveal>
                ))}
            </div>
        </div>
    );
};

export default InvitationGallery;