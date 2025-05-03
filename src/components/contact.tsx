"use client";

import type React from "react";

import { forwardRef, useState } from "react";
import { motion } from "framer-motion";
import { Send, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";
import SectionTitle from "./section-title";
import {
  sendConfirmationEmailService,
  sendContactEmailService,
} from "@/services/emailService";
import ConfirmationMessage from "./ConfirmationMessage";

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await sendContactEmailService(
        formState.name,
        formState.email,
        formState.subject,
        formState.message
      );

      await sendConfirmationEmailService(
        formState.name,
        formState.email,
        formState.subject
      );

      setShowConfirmation(true);

      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
      alert(
        "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente."
      );
    }
  };

  return (
    <section ref={ref} className="py-20 bg-background-light relative">
      <div
        className="absolute top-0 left-0 w-full h-20 bg-background-dark"
        style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 100% 0)" }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle>Contato</SectionTitle>

        <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-background-lighter p-8 rounded-lg shadow-xl border border-white/5">
            <h3 className="text-2xl font-bold mb-6 bg-gradient bg-linear-to-r from-primary-light to-primary-dark bg-clip-text text-transparent">
              Vamos Conversar
            </h3>

            <p className="text-white/70 mb-8">
              Aberto a novos desafios, projetos freelance e oportunidades
              profissionais. Se quiser bater um papo sobre tecnologia, inovação
              ou possíveis parcerias, fique à vontade para entrar em contato!
            </p>

            <div className="flex flex-col gap-6">
              <ContactInfo
                icon={<MapPin size={20} />}
                title="Localização"
                content="Recife, Pernambuco, Brasil"
              />

              <ContactInfo
                icon={<Mail size={20} />}
                title="Email"
                content="contato@franciscocosta.dev.br"
                link="mailto:contato@franciscocosta.dev.br"
              />

              <ContactInfo
                icon={<MessageCircle size={20} />}
                title="WhatsApp"
                content="+55 (98) 98428-9317"
                link="https://wa.me/5599984289317?text=Olá%20Francisco!%20Vi%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20possível%20projeto."
              />
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <h4 className="text-sm font-medium mb-4 text-white/80">
                Me encontre nas redes
              </h4>
              <div className="flex space-x-4">
                <SocialButton
                  href="https://linkedin.com"
                  icon={<Linkedin size={18} />}
                  label="LinkedIn"
                  color="#0077B5"
                />
                <SocialButton
                  href="https://github.com"
                  icon={<Github width={18} />}
                  label="GitHub"
                  color="#333"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-3 bg-background-lighter p-8 rounded-lg shadow-xl border border-white/5">
            <h3 className="text-2xl font-bold mb-6 font-poppins bg-gradient bg-linear-to-r from-primary-light to-primary-dark bg-clip-text text-transparent">
              Envie uma Mensagem
            </h3>

            {showConfirmation ? (
              <ConfirmationMessage onClose={() => setShowConfirmation(false)} />
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2 text-white/80">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background-dark border border-white/10 rounded-md focus:outline-hidden focus:ring-2 focus:ring-primary-light/50 focus:border-transparent transition-all duration-300"
                      placeholder="Seu nome"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2 text-white/80">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background-dark border border-white/10 rounded-md focus:outline-hidden focus:ring-2 focus:ring-primary-light/50 focus:border-transparent transition-all duration-300"
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2 text-white/80">
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background-dark border border-white/10 rounded-md focus:outline-hidden focus:ring-2 focus:ring-primary-light/50 focus:border-transparent transition-all duration-300"
                    placeholder="Assunto da mensagem"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 text-white/80">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background-dark border border-white/10 rounded-md focus:outline-hidden focus:ring-2 focus:ring-primary-light/50 focus:border-transparent transition-all duration-300"
                    placeholder="Sua mensagem..."></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient bg-linear-to-r from-primary-light to-primary-dark hover:from-primary-dark hover:to-primary-light text-white px-6 py-3 rounded-md font-medium transition-all duration-300 shadow-lg hover:shadow-primary-light/20 flex items-center justify-center cursor-pointer">
                  <Send size={18} className="mr-2" />
                  Enviar Mensagem
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  link?: string;
}

function ContactInfo({ icon, title, content, link }: ContactInfoProps) {
  const ContentElement = link ? (
    <Link
      href={link}
      className="text-white/70 hover:text-primary-light transition-colors duration-300">
      {content}
    </Link>
  ) : (
    <span className="text-white/70">{content}</span>
  );

  return (
    <div className="flex items-start">
      <div className="mr-4 mt-1 text-primary-light">{icon}</div>
      <div>
        <h4 className="text-sm font-medium text-white/90">{title}</h4>
        {ContentElement}
      </div>
    </div>
  );
}

interface SocialButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  color: string;
}

function SocialButton({ href, icon, label, color }: SocialButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-10 h-10 rounded-full bg-background-dark hover:bg-black/50 transition-all duration-300 group"
      style={{ backgroundColor: color }}
      aria-label={label}>
      <span className="text-white group-hover:scale-110 transition-transform duration-300">
        {icon}
      </span>
      <span className="sr-only">{label}</span>
    </Link>
  );
}

function Github(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
