import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Carousel from '../components/Carousel';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import ProjectsGallery from '../components/ProjectsGallery';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Landing() {
    return (
        <div>
            <Header />
            <HeroSection />
            <Carousel />
            <AboutUs />
            <Services />
            <ProjectsGallery />
            <ContactForm />
            <Footer />
        </div>
    );
}