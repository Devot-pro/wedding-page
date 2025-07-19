"use client"
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const galleryData = Array.from({ length: 137 }, (_, i) => {
  return {
    src: `https://wed-gallery.s3.us-east-1.amazonaws.com/IMG_${i + 1}.jpg`,
    title: 'Ensaio Pré-Casamento',
    desc: `Foto ${i + 1}`,
  };
});

console.log(galleryData.length, 'imagens carregadas');

// Depois você pode sobrescrever descrições específicas
galleryData[0].desc = 'A primeira foto do nosso grande dia.';
galleryData[5].desc = 'Risos sinceros entre os girassóis.';

const IMAGES_PER_LOAD = 18;

export default function Gallery() {
  const [expanded, setExpanded] = useState<null | number>(null);
  const [loadedImages, setLoadedImages] = useState<number[]>([]);
  const [visibleCount, setVisibleCount] = useState(IMAGES_PER_LOAD);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const [canLoadMore, setCanLoadMore] = useState(true);

  const handleImageLoad = (idx: number) => {
    setLoadedImages((prev) => {
      if (!prev.includes(idx)) {
        return [...prev, idx];
      }
      return prev;
    });
  };

  // Permite carregar mais imagens apenas quando todas as visíveis estiverem carregadas
  useEffect(() => {
    const allLoaded = galleryData
      .slice(0, visibleCount)
      .every((_, idx) => loadedImages.includes(idx));
    setCanLoadMore(allLoaded);
  }, [loadedImages, visibleCount]);

  // Infinite scroll usando IntersectionObserver
  useEffect(() => {
    if (!loaderRef.current) return;
    if (!canLoadMore) return;

    const observer = new window.IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          visibleCount < galleryData.length &&
          canLoadMore
        ) {
          setVisibleCount((prev) =>
            Math.min(prev + IMAGES_PER_LOAD, galleryData.length)
          );
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [visibleCount, canLoadMore]);

  const galleryImages = galleryData.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-white font-sans">
      <main className="p-5 max-w-7xl mx-auto">
        <h1 className="text-2xl mb-4 text-black font-(family-name:--font-marcellus)">Galeria de Fotos</h1>
        <div
          className="
            gallery
            columns-1
            sm:columns-2
            md:columns-3
            lg:columns-4
            gap-3
            [column-fill:_balance]
          "
        >
          {galleryImages.map((img, idx) => (
            <figure
              key={idx}
              className="mb-3 break-inside-avoid overflow-hidden rounded shadow group cursor-pointer relative"
              onClick={() => setExpanded(idx)}
            >
              {!loadedImages.includes(idx) && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 z-10">
                  <span className="animate-spin rounded-full border-4 border-gray-300 border-t-transparent w-8 h-8"></span>
                </div>
              )}
              <Image
                src={img.src}
                alt={img.title}
                className={`object-cover w-full transition-transform duration-700 group-hover:scale-105 ${!loadedImages.includes(idx) ? 'opacity-0' : 'opacity-100'}`}
                loading="lazy"
                layout="responsive"
                width={4}
                height={3}
                onLoad={() => handleImageLoad(idx)}
              />
              <figcaption
                className="
                  p-4
                  text-white text-sm
                  bg-gradient-to-t from-black/80 via-black/40 to-transparent
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-500
                  z-10
                  -mt-20 relative
                "
              >
                <h3 className="text-base font-semibold">{img.title}</h3>
                <p className="truncate">{img.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        {/* Loader para scroll infinito */}
        <div ref={loaderRef} className="w-full flex justify-center py-8">
          {visibleCount < galleryData.length && !canLoadMore && (
            <span className="animate-spin rounded-full border-4 border-gray-300 border-t-transparent w-8 h-8"></span>
          )}
        </div>
        {expanded !== null && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setExpanded(null)}
          >
            <button
              className="absolute top-0 right-0 text-white text-4xl font-bold z-10 cursor-pointer p-3"
              onClick={() => setExpanded(null)}
              aria-label="Fechar"
            >
              &times;
            </button>
            <div
              className="relative w-full max-w-4xl max-h-[95vh] p-4 flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full flex justify-center items-center">
                <Image
                  src={galleryImages[expanded].src}
                  alt={galleryImages[expanded].title}
                  width={1200}
                  height={800}
                  className="max-h-[70vh] w-auto h-auto rounded shadow-lg object-contain bg-black"
                  priority
                />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
