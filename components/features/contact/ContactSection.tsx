"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MailIcon, SendIcon } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const SOCIALS = [
  { icon: MailIcon, label: "Email", href: "mailto:jai22andales@gmail.com" },
  { icon: MailIcon, label: "Facebook", href: "https://web.facebook.com/j02a22i05", target: "_blank" },
  { icon: MailIcon, label: "Phone", href: "tel:+639300307150" },
];

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">Contact</h2>
        <div className="w-20 h-1 bg-accent rounded-full" />
        <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-lg">
          Have a project in mind or want to collaborate? I would love to hear from you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {submitted ? (
            <div className="glass-panel p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4">
                <SendIcon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
              <p className="text-slate-600 dark:text-slate-400">Thanks for reaching out. I will get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-panel p-8 space-y-6">
              <div>
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg glass-button text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg glass-button text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-lg glass-button text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-accent hover:bg-accent/90 text-white rounded-lg font-medium transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] flex items-center justify-center gap-2"
              >
                <SendIcon className="w-4 h-4" />
                Send Message
              </button>
            </form>
          )}<br></br>
          <div className="glass-panel p-8">
          <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">Availability</h3>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
            <p className="text-slate-600 dark:text-slate-400">
              Open to freelance and part-time opportunities<br></br>
              Working hours: Monday to Friday, 9 AM to 6 PM
            </p>
          </div>
        </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <div className="glass-panel p-8">
            <h3 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">Connect with me</h3>
            <div className="space-y-4">
             {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="flex items-center gap-4 p-4 glass-button rounded-lg text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <social.icon className="w-5 h-5 text-accent" />
                </div>
                <span className="font-medium">{social.label}</span>
              </a>
            ))}
            </div>
          </div>
            <div className="glass-panel p-8">
              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">Location</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3925.5823502737817!2d123.94823507546194!3d10.295195989825809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDE3JzQyLjciTiAxMjPCsDU3JzAyLjkiRQ!5e0!3m2!1sen!2sph!4v1775057239959!5m2!1sen!2sph" 
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
              
      </motion.div>
      </div>
    </section>
  );
}