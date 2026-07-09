"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GetInTouchForm from "@/components/ui/GetInTouchForm";

interface EmailContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EmailContactModal({
  isOpen,
  onClose,
}: EmailContactModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="email-modal-title"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 sm:p-8 rounded-2xl glass-strong glow-purple"
            onClick={(e) => e.stopPropagation()}
          >
            <GetInTouchForm
              idPrefix="modal"
              titleId="email-modal-title"
              showCloseButton
              onClose={onClose}
              onSubmitSuccess={onClose}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
