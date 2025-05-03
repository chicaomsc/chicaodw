"use client";

import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

interface ConfirmationMessageProps {
  onClose: () => void;
}

export default function ConfirmationMessage({
  onClose,
}: ConfirmationMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center bg-green-500/10 text-green-400 border border-green-500/30 rounded-lg p-6 shadow-lg text-center">
      <CheckCircle size={48} className="mb-4" />
      <h4 className="text-lg font-semibold mb-2">
        Mensagem enviada com sucesso!
      </h4>
      <p className="text-sm text-green-300 mb-4">
        Obrigado por entrar em contato. Vou responder o mais breve possível!
      </p>
      <button
        onClick={onClose}
        className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all">
        Fechar
      </button>
    </motion.div>
  );
}
