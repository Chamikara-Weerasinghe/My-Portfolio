"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { X, Send } from "lucide-react";

export const RECEIVER_EMAIL = "chamikaraweerasinghe036@gmail.com";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function buildGmailComposeUrl({
  name,
  email,
  subject,
  message,
}: ContactFormData) {
  const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${RECEIVER_EMAIL}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function validateForm(data: ContactFormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!data.subject.trim()) {
    errors.subject = "Subject is required";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required";
  }

  return errors;
}

const inputClassName =
  "w-full px-4 py-3 rounded-xl input-field text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors";

interface GetInTouchFormProps {
  idPrefix: string;
  titleId?: string;
  showCloseButton?: boolean;
  onClose?: () => void;
  onSubmitSuccess?: () => void;
}

export default function GetInTouchForm({
  idPrefix,
  titleId,
  showCloseButton = false,
  onClose,
  onSubmitSuccess,
}: GetInTouchFormProps) {
  const [formState, setFormState] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm(formState);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    window.open(
      buildGmailComposeUrl(formState),
      "_blank",
      "noopener,noreferrer"
    );
    setFormState({ name: "", email: "", subject: "", message: "" });
    onSubmitSuccess?.();
  };

  return (
    <>
      {showCloseButton && onClose && (
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-muted hover:text-foreground hover-glass transition-colors"
          aria-label="Close contact form"
        >
          <X size={20} />
        </button>
      )}

      <div className={showCloseButton ? "mb-6 pr-8" : "mb-6"}>
        <h2
          id={titleId}
          className="text-2xl font-bold mb-2"
        >
          Get in{" "}
          <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-sm text-muted">
          Fill in your details and I&apos;ll open Gmail with everything ready
          to send.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor={`${idPrefix}-name`}
            className="block text-sm text-muted mb-2"
          >
            Name
          </label>
          <input
            id={`${idPrefix}-name`}
            type="text"
            value={formState.name}
            onChange={(e) =>
              setFormState({ ...formState, name: e.target.value })
            }
            className={inputClassName}
            placeholder="Your name"
            aria-invalid={!!errors.name}
            aria-describedby={
              errors.name ? `${idPrefix}-name-error` : undefined
            }
          />
          {errors.name && (
            <p
              id={`${idPrefix}-name-error`}
              className="mt-1.5 text-sm text-red-400"
            >
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor={`${idPrefix}-email`}
            className="block text-sm text-muted mb-2"
          >
            Email
          </label>
          <input
            id={`${idPrefix}-email`}
            type="email"
            value={formState.email}
            onChange={(e) =>
              setFormState({ ...formState, email: e.target.value })
            }
            className={inputClassName}
            placeholder="your@email.com"
            aria-invalid={!!errors.email}
            aria-describedby={
              errors.email ? `${idPrefix}-email-error` : undefined
            }
          />
          {errors.email && (
            <p
              id={`${idPrefix}-email-error`}
              className="mt-1.5 text-sm text-red-400"
            >
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor={`${idPrefix}-subject`}
            className="block text-sm text-muted mb-2"
          >
            Subject
          </label>
          <input
            id={`${idPrefix}-subject`}
            type="text"
            value={formState.subject}
            onChange={(e) =>
              setFormState({ ...formState, subject: e.target.value })
            }
            className={inputClassName}
            placeholder="Portfolio Inquiry"
            aria-invalid={!!errors.subject}
            aria-describedby={
              errors.subject ? `${idPrefix}-subject-error` : undefined
            }
          />
          {errors.subject && (
            <p
              id={`${idPrefix}-subject-error`}
              className="mt-1.5 text-sm text-red-400"
            >
              {errors.subject}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor={`${idPrefix}-message`}
            className="block text-sm text-muted mb-2"
          >
            Message
          </label>
          <textarea
            id={`${idPrefix}-message`}
            rows={5}
            value={formState.message}
            onChange={(e) =>
              setFormState({ ...formState, message: e.target.value })
            }
            className={`${inputClassName} resize-none`}
            placeholder="Your message..."
            aria-invalid={!!errors.message}
            aria-describedby={
              errors.message ? `${idPrefix}-message-error` : undefined
            }
          />
          {errors.message && (
            <p
              id={`${idPrefix}-message-error`}
              className="mt-1.5 text-sm text-red-400"
            >
              {errors.message}
            </p>
          )}
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
        >
          <Send size={18} />
          Send Message
        </motion.button>
      </form>
    </>
  );
}
