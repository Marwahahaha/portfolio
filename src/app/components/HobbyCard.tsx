"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface HobbyCardProps {
  title: string;
  description: string;
  icon: string;
  images?: string[];
}

export default function HobbyCard({
  title,
  description,
  icon,
  images = [],
}: HobbyCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen && !selectedImage) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (selectedImage) {
          setSelectedImage(null);
        } else {
          setIsOpen(false);
        }
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, selectedImage]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="card-hover bg-card w-full rounded-4xl border border-accent-soft p-7 text-left shadow-sm"
      >
        <div className="mb-5 flex items-center justify-between gap-4">
          <span className="text-4xl">{icon}</span>

          {images.length > 0 && (
            <span className="text-sm font-semibold text-muted">
              {images.length} photo{images.length === 1 ? "" : "s"}
            </span>
          )}
        </div>

        <h3 className="text-heading mt-4 text-2xl font-black">{title}</h3>

        <p className="text-muted mt-3 line-clamp-4 leading-7">
          {description}
        </p>

        <p className="mt-6 text-sm font-bold text-accent">Read more →</p>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-stone-950/60 px-4 py-8 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`hobby-modal-${title}`}
          onClick={() => setIsOpen(false)}
        >
          <article
            className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-4xl bg-white p-6 shadow-2xl md:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="text-4xl">{icon}</span>
                <h2
                  id={`hobby-modal-${title}`}
                  className="text-heading text-3xl font-black md:text-4xl"
                >
                  {title}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-soft-pink px-4 py-2 font-black text-accent transition hover:bg-(--portfolio-border)"
                aria-label="Close hobby details"
              >
                ×
              </button>
            </div>

            <p className="text-body whitespace-pre-line leading-8">
              {description}
            </p>

            {images.length > 0 && (
              <div className="mt-8">
                <h3 className="text-heading mb-4 text-xl font-black">
                  Pictures
                </h3>

                <div className="grid gap-4 md:grid-cols-2">
                  {images.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      onClick={() => setSelectedImage(image)}
                      className="group relative aspect-4/3 overflow-hidden rounded-3xl bg-soft-pink"
                      aria-label={`Open ${title} image ${index + 1}`}
                    >
                      <Image
                        src={image}
                        alt={`${title} image ${index + 1}`}
                        fill
                        className="object-cover transition group-hover:scale-105"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </article>
        </div>
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 z-120 flex items-center justify-center bg-stone-950/80 px-4 py-8 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative h-full max-h-[85vh] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt={`${title} selected image`}
              fill
              className="object-contain"
            />

            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-0 top-0 rounded-full bg-white px-4 py-2 font-black text-accent shadow-md"
              aria-label="Close image"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}