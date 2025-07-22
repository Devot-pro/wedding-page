"use client"

import Countdown from "@/components/count-down";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white font-sans flex flex-col">
      {/* Apresentação */}
      <section
        className="relative min-h-[92vh] md:min-h-[92vh] text-white flex"
        style={{
          backgroundImage: "url('https://wed-gallery.s3.us-east-1.amazonaws.com/IMG_94.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'left', // imagem à direita no mobile
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 w-full flex justify-end items-start p-8 pt-12 md:pt-16">
          <div className="flex flex-col items-end font-[family-name:--font-marcellus] text-right">
            <h1
              className="text-4xl md:text-6xl font-bold mb-4 p-2 bg-gradient-to-r from-[#5378a5] via-white to-[#5378a5] bg-clip-text text-transparent"
            >
              Álefe & Raissa
            </h1>
            <p className="text-xl md:text-2xl mb-2">27/07/2025</p>
            <blockquote className="text-lg md:text-xl italic max-w-xl mb-8">
              &ldquo; Acima de tudo, porém, revistam-se do amor, que é o elo perfeito.&rdquo; <br />
              <span className="text-sm">Colossenses 3:14</span>
            </blockquote>
            {/* Contador estilo calendário com animação flipdown */}
            <Countdown to={new Date('2025-07-27T03:00:00')} />
          </div>
        </div>
      </section>
    </div>
  );
}
