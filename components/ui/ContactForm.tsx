"use client";

import { siteConfig } from "@/config/site";
import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <AnimatedSection
        animation="scaleIn"
        className="bg-white rounded-lg border border-gray-200 p-8"
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="check" size="lg" className="text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Mesajınız Alındı!
          </h3>
          <p className="text-gray-600">
            En kısa sürede size dönüş yapılacaktır.
          </p>
        </div>
      </AnimatedSection>
    );
  }

  return (
    <AnimatedSection
      animation="fadeInLeft"
      className="bg-white rounded-lg border border-gray-200 p-8"
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-6">İletişim Formu</h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Ad Soyad *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="form-input w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Telefon
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+90 5xx xxx xx xx"
              className="form-input w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            E-posta *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="form-input w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Konu *
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="form-input w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Konu seçiniz</option>
            {siteConfig.services.map((service) => (
              <option key={service.id} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Genel Danışma">Genel Hukuki Danışma</option>
            <option value="Diğer">Diğer</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Mesajınız *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleChange}
            placeholder="Hukuki konunuzu kısaca açıklayınız..."
            className="form-input w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>

        <div>
          <Button
            type="submit"
            disabled={isSubmitting}
            loading={isSubmitting}
            variant="primary"
            size="lg"
            className="w-full"
          >
            {isSubmitting ? "Gönderiliyor" : "Mesaj Gönder"}
          </Button>
        </div>

        <p className="text-sm text-gray-600 text-center">
          * İşaretli alanlar zorunludur. Mesajınıza 24 saat içinde dönüş
          yapılacaktır.
        </p>
      </form>
    </AnimatedSection>
  );
}
