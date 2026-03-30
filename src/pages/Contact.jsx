import React from 'react'
import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { submitInquiry } from '../services/inquiryService';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const inquiryId = await submitInquiry(formData);
      console.log('Inquiry submitted with ID:', inquiryId);
      setSuccessMessage('Thank you for your inquiry. We will be in touch shortly.');

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: 'general',
      });

      // Clear success message after 5 seconds
      setTimeout(() => setSuccessMessage(''), 5000);
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      setErrorMessage('Failed to send your message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  return (
    <>
      <section className="py-12 bg-(--color-ivory)">
        <div className="mx-auto px-6 lg:px-18">
          <FadeIn>
            <div className="max-w-4xl">
              <p className="text-xs uppercase tracking-[0.2em] text-(--color-gold) mb-6">Contact</p>
              <h1 className="text-5xl md:text-7xl text-(--color-navy) mb-8 leading-tight">
                Let's Begin a Conversation
              </h1>
              <p className="text-(--color-taupe) text-xl md:text-2xl leading-relaxed">
                Whether you're interested in our collections, seeking bespoke services, or exploring
                partnership opportunities, we're here to help.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 md:py-32 bg-(--color-stone)/10">
        <div className="mx-auto px-6 lg:px-18">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            {/* Contact Information */}
            <FadeIn className="md:col-span-5">
              <div>
                <h2 className="text-3xl text-(--color-navy) mb-8">Get in Touch</h2>

                <div className="space-y-8 mb-12">
                  {/* <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full border border-(--color-gold) flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-(--color-gold)" />
                    </div>
                    <div>
                      <h3 className="text-lg text-(--color-navy) mb-2">London Atelier</h3>
                      <p className="text-(--color-taupe)">
                        15 Savile Row<br />
                        Mayfair, London<br />
                        W1S 3PJ, United Kingdom
                      </p>
                    </div>
                  </div> */}

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full border border-(--color-gold) flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-(--color-gold)" />
                    </div>
                    <div>
                      <h3 className="text-lg text-(--color-navy) mb-2">Nigeria Atelier</h3>
                      <p className="text-(--color-taupe)"> 
                        No 13, Olofinade Oda Road<br />
                        Akure<br />
                        Nigeria
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full border border-(--color-gold) flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-(--color-gold)" />
                    </div>
                    <div>
                      <h3 className="text-lg text-(--color-navy) mb-2">Email</h3>
                      <a href="mailto:info@michaelson.com" className="text-(--color-taupe) hover:text-(--color-gold) transition-colors">
                        info@michaelson.com
                      </a>
                      <br />
                      <a href="mailto:bespoke@michaelson.com" className="text-(--color-taupe) hover:text-(--color-gold) transition-colors">
                        bespoke@michaelson.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full border border-(--color-gold) flex items-center justify-center shrink-0">
                      <Phone size={20} className="text-(--color-gold)" />
                    </div>
                    <div>
                      <h3 className="text-lg text-(--color-navy) mb-2">Phone</h3>
                      {/* <a href="tel:+442012345678" className="text-(--color-taupe) hover:text-(--color-gold) transition-colors">
                        +44 20 1234 5678 (London)
                      </a>
                      <br /> */}
                      <a href="tel:+2341234567890" className="text-(--color-taupe) hover:text-(--color-gold) transition-colors">
                        +234 1 234 5678 (Akure)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border-t border-(--color-navy)/10 pt-8">
                  <h3 className="text-lg text-(--color-navy) mb-4">Opening Hours</h3>
                  <div className="space-y-2 text-(--color-taupe)">
                    <p>Monday - Friday: 10:00 - 18:00</p>
                    <p>Saturday: 11:00 - 17:00</p>
                    <p>Sunday: By appointment only</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn delay={0.2} className="md:col-span-7">
              <div className="bg-white p-8 md:p-12">
                <h2 className="text-3xl text-(--color-navy) mb-8">Send Us a Message</h2>

                {successMessage && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                    {successMessage}
                  </div>
                )}

                {errorMessage && (
                  <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                    {errorMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm uppercase tracking-wider text-(--color-navy) mb-2">
                      Inquiry Type
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-(--color-navy)/20 bg-white text-(--color-navy) focus:outline-none focus:border-(--color-gold) transition-colors"
                      required
                    >
                      <option value="general">General Inquiry</option>
                      <option value="bespoke">Bespoke Service</option>
                      <option value="collection">Collection Information</option>
                      <option value="wholesale">Wholesale & Partnership</option>
                      <option value="press">Press & Media</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm uppercase tracking-wider text-(--color-navy) mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-(--color-navy)/20 bg-white text-(--color-navy) focus:outline-none focus:border-(--color-gold) transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm uppercase tracking-wider text-(--color-navy) mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-(--color-navy)/20 bg-white text-(--color-navy) focus:outline-none focus:border-(--color-gold) transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm uppercase tracking-wider text-(--color-navy) mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-(--color-navy)/20 bg-white text-(--color-navy) focus:outline-none focus:border-(--color-gold) transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm uppercase tracking-wider text-(--color-navy) mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-(--color-navy)/20 bg-white text-(--color-navy) focus:outline-none focus:border-(--color-gold) transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm uppercase tracking-wider text-(--color-navy) mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-(--color-navy)/20 bg-white text-(--color-navy) focus:outline-none focus:border-(--color-gold) transition-colors resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full px-8 py-4 bg-(--color-navy) text-(--color-ivory) hover:bg-(--color-gold) hover:text-(--color-navy) transition-all uppercase tracking-wider text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 md:py-32 bg-(--color-navy) text-(--color-ivory)">
        <div className="mx-auto px-6 lg:px-18">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-[0.2em] text-(--color-gold) mb-4">Services</p>
              <h2 className="text-4xl md:text-5xl max-w-3xl mx-auto leading-tight">
                How We Can Serve You
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <FadeIn delay={0.2}>
              <div className="text-center">
                <h3 className="text-2xl mb-4">Bespoke Commissions</h3>
                <p className="text-(--color-stone) leading-relaxed">
                  Work directly with our master craftsmen to create completely custom footwear tailored
                  to your exact specifications, measurements, and style preferences.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="text-center">
                <h3 className="text-2xl mb-4">Private Appointments</h3>
                <p className="text-(--color-stone) leading-relaxed">
                  Schedule a private consultation at our London or Lagos atelier to experience our
                  collections in person and receive personalized styling advice.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="text-center">
                <h3 className="text-2xl mb-4">Wholesale Partnerships</h3>
                <p className="text-(--color-stone) leading-relaxed">
                  We partner with select retailers worldwide who share our commitment to quality and
                  luxury. Contact us to discuss wholesale opportunities.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
