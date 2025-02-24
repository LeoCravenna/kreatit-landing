import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import "tailwindcss/tailwind.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [touched, setTouched] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    validateForm();
  }, [formData]);

  const validateForm = () => {
    let newErrors = {};
    const nameRegex = /^[a-zA-ZÀ-ÿ\s]+$/;
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;
    const phoneRegex = /^\+?[0-9]{7,15}$/;

    if (touched.name && (!formData.name.trim() || !nameRegex.test(formData.name))) {
      newErrors.name = "El nombre solo puede contener letras.";
    }

    if (touched.email && (!formData.email.trim() || !emailRegex.test(formData.email))) {
      newErrors.email = "Ingresa un email válido.";
    }

    if (touched.phone && (!formData.phone.trim() || !phoneRegex.test(formData.phone))) {
      newErrors.phone = "Ingresa un número de teléfono válido.";
    }

    if (touched.message && (!formData.message.trim() || formData.message.length < 10)) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres.";
    }

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0 && Object.values(formData).every(val => val.trim() !== ""));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    //Marca el campo como "touched" para que los errores solo aparezcan si el usuario ha interactuado
    if (!touched[e.target.name]) {
      setTouched({ ...touched, [e.target.name]: true });
    }

    //Si el usuario vuelve a escribir, eliminamos el mensaje de éxito
    if (status) {
      setStatus("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsLoading(true); //Activa el loading

    try {
      await axios.post("/contact", formData);
      setStatus("Consulta enviada con éxito");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
      setTouched({});
    } catch (error) {
      setStatus("Ocurrió un error al enviar la consulta");
    } finally {
      setIsLoading(false); //Desactiva el loading
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300"
    >
      <div className="container mx-auto max-w-3xl px-6">
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contáctanos
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white bg-opacity-50 shadow-2xl rounded-xl p-8 space-y-6 backdrop-blur-lg text-gray-900"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {[
            { name: "name", placeholder: "Nombre", type: "text" },
            { name: "email", placeholder: "Email", type: "email" },
            { name: "phone", placeholder: "Teléfono", type: "tel" },
          ].map((field) => (
            <div key={field.name}>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                className={`border p-4 w-full rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-100 text-gray-900 transition-all ${
                  errors[field.name] ? "border-red-500" : "border-gray-400"
                }`}
              />
              {errors[field.name] && (
                <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
              )}
            </div>
          ))}

          {/* Mensaje */}
          <div>
            <textarea
              name="message"
              placeholder="Escriba aquí su consulta"
              value={formData.message}
              onChange={handleChange}
              className={`border p-4 w-full rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-100 text-gray-900 transition-all ${
                errors.message ? "border-red-500" : "border-gray-400"
              }`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Botón de envío con loading */}
          <div className="flex flex-col justify-center items-center">
          <motion.button
            type="submit"
            disabled={!isFormValid || isLoading}
            className={`w-[150px] py-3 rounded-full px-6 shadow-lg mx-2 text-center font-bold bg-gradient-to-r transition-all ${
              isFormValid && !isLoading
                ? "from-blue-100 to-blue-200 text-md font-bold text-blue-900 hover:text-white hover:from-blue-400 hover:to-blue-600"
                : "from-gray-400 to-gray-300 text-md font-bold text-gray-500 cursor-not-allowed"
            } flex justify-center items-center`}
            whileTap={{ scale: 0.95 }}
          >
            {isLoading ? (
              <motion.div
                className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            ) : (
              "Enviar"
            )}
          </motion.button>
          </div>

          {status && <p className="text-center mt-4 text-lg font-medium">{status}</p>}
        </motion.form>
      </div>
    </section>
  );
}

/*import React, { useState } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/contact', formData);
            setStatus('Consulta enviada con éxito');
            setFormData({ name: '', email: '', phone: '', message: '' });   
        } catch (error) {
            setStatus('Ocurrió un error al enviar la consulta');
        }
    };

    return (
        <form onSubmit={handleSubmit} id="contact" className="space-y-4 py-16 px-4 bg-white max-w-lg mx-auto ">
            <h2 className="text-3xl font-bold mb-4 text-center">Contáctanos</h2>
            <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 p-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Tu email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 p-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
            />
            <textarea
                name="message"
                placeholder="Tu mensaje"
                value={formData.message}
                onChange={handleChange}
                className="border border-gray-300 p-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
            ></textarea>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Enviar
            </button>
            {status && <p className="text-center mt-4 text-lg font-medium">{status}</p>}
        </form>
    );
}*/