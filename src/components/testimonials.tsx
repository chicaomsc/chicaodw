"use client";

import { forwardRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionTitle from "./section-title";
import Image from "next/image";

const Testimonials = forwardRef<HTMLDivElement>((props, ref) => {
  const testimonials = [
    {
      name: "Ana Silva",
      position: "CTO, TechSolutions",
      image: "/placeholder.svg?height=100&width=100",
      text: "Francisco é um profissional excepcional. Seu conhecimento técnico e capacidade de resolver problemas complexos fizeram toda a diferença em nosso projeto de segurança. Recomendo fortemente seus serviços.",
    },
    {
      name: "Carlos Mendes",
      position: "Diretor de Inovação, EduTech",
      image: "/placeholder.svg?height=100&width=100",
      text: "Trabalhamos com Francisco no desenvolvimento de nossa plataforma educacional e ficamos impressionados com sua habilidade técnica e comprometimento. Entregou além das expectativas.",
    },
    {
      name: "Mariana Costa",
      position: "Gerente de Projetos, GovTech",
      image: "/placeholder.svg?height=100&width=100",
      text: "A expertise de Francisco em desenvolvimento full stack foi fundamental para o sucesso de nosso sistema de gestão municipal. Sua abordagem metódica e atenção aos detalhes são admiráveis.",
    },
    {
      name: "Pedro Alves",
      position: "CEO, StartupX",
      image: "/placeholder.svg?height=100&width=100",
      text: "Francisco não apenas desenvolveu nossa aplicação, mas também nos ajudou a entender melhor nossas necessidades tecnológicas. Um verdadeiro parceiro que vai além do código.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      ref={ref}
      className="py-20 bg-background-light relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-dark/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-light/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle>Depoimentos</SectionTitle>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -left-10 top-0 text-primary-light opacity-30">
              <Quote size={80} />
            </div>

            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-background-lighter p-8 md:p-10 rounded-lg shadow-xl border border-white/5 relative z-10">
              <p className="text-lg md:text-xl text-white/80 italic mb-8">
                {testimonials[currentIndex].text}
              </p>

              <div className="flex items-center">
                <div className="mr-4 rounded-full overflow-hidden w-16 h-16 border-2 border-primary-light/30">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-white/60 text-sm">
                    {testimonials[currentIndex].position}
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-background-lighter text-white/70 hover:text-primary-light transition-colors cursor-pointer"
                aria-label="Depoimento anterior">
                <ChevronLeft size={24} />
              </button>
              <div className="flex space-x-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === index
                        ? "bg-primary-light scale-125"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Ir para depoimento ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-background-lighter text-white/70 hover:text-primary-light transition-colors cursor-pointer"
                aria-label="Próximo depoimento">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Testimonials.displayName = "Testimonials";

export default Testimonials;
