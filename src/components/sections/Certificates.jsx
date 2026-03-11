import React, { useState, useRef, useEffect } from "react";
import { Award, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import tailwind from "../../assets/images/GuviCertification3.png";
import js from "../../assets/images/GuviCertification2.png";
import fullStack from "../../assets/images/GuviCertification1.png";

import FadeIn from "../animations/FadeIn";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const certificates = [
  {
    id: 1,
    title: "MERN Full Stack Development",
    issuer: "GUVI",
    year: "2026",
    image: fullStack,
    link: "https://drive.google.com/file/d/1-xu8aALMwfsdGtpefyQq3X9X4A2L68sW/view?usp=sharing",
  },
  {
    id: 2,
    title: "Html, Css & Tailwind Css",
    issuer: "GUVI",
    year: "2026",
    image: tailwind,
    link: "https://drive.google.com/file/d/1gYDN5MvfpcqgaNNtcFnl8hgkGqOCvMQl/view?usp=drive_link",
  },
  {
    id: 3,
    title: "Advanced JavaScript",
    issuer: "GUVI",
    year: "2026",
    image: js,
    link: "https://drive.google.com/file/d/1dczmuWFAS7QJ_qsJ_cUKlW-g8fgk1V2o/view?usp=drive_link",
  },
];

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const scrollContainerRef = useRef(null);

  // responsive cards
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);

    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const scrollToIndex = (index) => {
    setCurrentIndex(index);

    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const firstCard = container.querySelector(".snap-start");

      if (!firstCard) return;

      const cardWidth = firstCard.offsetWidth + 24;

      container.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
    }
  };

  const nextSlide = () => {
    const maxIndex = Math.max(0, certificates.length - cardsPerView);
    const newIndex = Math.min(currentIndex + 1, maxIndex);
    scrollToIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = Math.max(currentIndex - 1, 0);
    scrollToIndex(newIndex);
  };

  return (
    <section
      id="certificates"
      className="relative py-20 bg-black overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* section header */}
        <FadeIn delay={0}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">
                Certifications
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4">
              My Certificates
            </h2>

            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Professional certifications and learning achievements
            </p>
          </div>
        </FadeIn>

        {/* carousel */}
        <FadeIn delay={200}>
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar"
            >
              <div className="flex gap-6 pb-4">
                {certificates.map((cert) => (
                  <div
                    key={cert.id}
                    className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start"
                  >
                    <div className="bg-[#121212] border border-white/10 rounded-xl overflow-hidden hover:border-primary/40 transition duration-300">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-52 object-cover"
                      />

                      <div className="p-6">
                        <h3 className="text-white text-lg mb-2">
                          {cert.title}
                        </h3>

                        <p className="text-white/60 text-sm">{cert.issuer}</p>

                        <p className="text-primary text-sm font-mono mt-1">
                          {cert.year}
                        </p>

                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-2 mt-4 px-4 py-2 text-sm text-white border border-white/20 rounded-full bg-white/5 backdrop-blur-sm hover:border-primary hover:bg-primary/10 transition-all duration-300"
                        >
                          View Certificate <FaArrowRight />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* arrows */}
            {certificates.length > cardsPerView && (
              <>
                <button
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                  className="flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-4 items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 disabled:opacity-50"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>

                <button
                  onClick={nextSlide}
                  disabled={currentIndex >= certificates.length - cardsPerView}
                  className="flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-4 items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 disabled:opacity-50"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </>
            )}

            {/* dots */}
            {certificates.length > cardsPerView && (
              <div className="flex items-center justify-center gap-2 mt-8">
                {Array.from({
                  length: Math.max(0, certificates.length - cardsPerView + 1),
                }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToIndex(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex
                        ? "bg-primary w-6 h-2"
                        : "bg-white/30 w-2 h-2"
                    }`}
                  ></button>
                ))}
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Certificates;
