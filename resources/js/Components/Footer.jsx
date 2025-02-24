import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

export default function Footer() {
    return (
        <footer className="bg-dark py-8 text-white">
            <div className="container mx-auto text-center">
                <p>Copyright&copy; 2025 Kreatit. Todos los derechos reservados.</p>
                
                {/* Redes Sociales */}
                <div className="mt-4 flex justify-center space-x-6">
                    {/* Instagram */}
                    <a 
                        href="https://www.instagram.com/kreat.it/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white transition-transform transform hover:scale-110 hover:text-pink-500"
                    >
                        <FaInstagram size={28} />
                    </a>

                    {/* Facebook */}
                    <a 
                        href="https://www.facebook.com/profile.php?id=100093340877733" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white transition-transform transform hover:scale-110 hover:text-blue-500"
                    >
                        <FaFacebook size={28} />
                    </a>

                    {/* Twitter */}
                    <a 
                        href="https://x.com/Kreatit_" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white transition-transform transform hover:scale-110 hover:text-blue-400"
                    >
                        <FaTwitter size={28} />
                    </a>
                </div>
            </div>
        </footer>
    );
}