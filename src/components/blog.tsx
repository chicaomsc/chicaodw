"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import SectionTitle from "./section-title";

const Blog = forwardRef<HTMLDivElement>((props, ref) => {
  const posts = [
    {
      title: "Segurança em Aplicações React: Melhores Práticas",
      excerpt:
        "Aprenda como proteger suas aplicações React contra as vulnerabilidades mais comuns e implementar medidas de segurança eficazes.",
      date: "10 Abr 2025",
      readTime: "8 min",
      image: "/placeholder.svg?height=250&width=400",
      url: "#",
    },
    {
      title: "Otimizando Performance em Aplicações Next.js",
      excerpt:
        "Estratégias avançadas para melhorar o desempenho de suas aplicações Next.js, desde o carregamento inicial até a experiência do usuário.",
      date: "25 Mar 2025",
      readTime: "6 min",
      image: "/placeholder.svg?height=250&width=400",
      url: "#",
    },
    {
      title: "Arquitetura de Microsserviços com Node.js",
      excerpt:
        "Um guia completo sobre como projetar, implementar e manter uma arquitetura de microsserviços escalável usando Node.js.",
      date: "12 Mar 2025",
      readTime: "10 min",
      image: "/placeholder.svg?height=250&width=400",
      url: "#",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-background-dark relative">
      <div className="container mx-auto px-4">
        <SectionTitle>Blog & Artigos</SectionTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              readTime={post.readTime}
              image={post.image}
              url={post.url}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center bg-background-lighter hover:bg-background-light px-6 py-3 rounded-full text-white/80 hover:text-white transition-all duration-300 group">
            Ver todos os artigos
            <ArrowRight
              size={16}
              className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </div>
      </div>
    </section>
  );
});

Blog.displayName = "Blog";

export default Blog;

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  url: string;
  index: number;
}

function BlogCard({
  title,
  excerpt,
  date,
  readTime,
  image,
  url,
  index,
}: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-background-lighter rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
      <Link href={url} className="block">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-darker to-transparent opacity-50"></div>
        </div>
        <div className="p-6">
          <div className="flex items-center text-sm text-white/60 mb-3">
            <span className="flex items-center">
              <Calendar size={14} className="mr-1" />
              {date}
            </span>
            <span className="mx-2">•</span>
            <span className="flex items-center">
              <Clock size={14} className="mr-1" />
              {readTime}
            </span>
          </div>
          <h3 className="text-xl font-bold mb-3 group-hover:text-primary-light transition-colors duration-300">
            {title}
          </h3>
          <p className="text-white/70 text-sm mb-4">{excerpt}</p>
          <span className="inline-flex items-center bg-gradient bg-linear-to-r from-primary-light to-primary-dark bg-clip-text text-transparent font-medium text-sm group">
            Ler mais
            <ArrowRight
              size={14}
              className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300 text-primary-light"
            />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
