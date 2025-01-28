import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "This is the best service I've ever used!",
    name: "John Doe",
    role: "CEO",
    company: "Company A",
    logo: "/icon/google.png",
  },
  {
    id: 2,
    quote: "Amazing experience with the team!",
    name: "Jane Smith",
    role: "CTO",
    company: "Company B",
    logo: "/icon/amazon.png",
  },
  {
    id: 3,
    quote: "Highly recommend their services!",
    name: "Alice Johnson",
    role: "Marketing Director",
    company: "Company C",
    logo: "/icon/jp.png",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Auto-rotate every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="carousel w-full">
      {testimonials.map((testimonial, index) => (
        <div
          key={testimonial.id}
          className={`carousel-item relative w-full ${index === activeIndex ? 'block' : 'hidden'}`}
        >
          <div className={`flex flex-col items-center justify-center p-8 ${index % 2 === 0 ? 'bg-base-200' : 'bg-base-100'}`}>
            <p className="text-xl italic">"{testimonial.quote}"</p>
            <div className="mt-4 text-center">
              <p className="font-bold">{testimonial.name}</p>
              <p>{testimonial.role}, {testimonial.company}</p>
              {testimonial.logo && <img src={testimonial.logo} alt={`${testimonial.company} logo`} className="mt-2 h-20" />}
            </div>
          </div>
        </div>
      ))}
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <button onClick={handlePrev} className="btn btn-circle">❮</button>
        <button onClick={handleNext} className="btn btn-circle">❯</button>
      </div>
    </div>
  );
};

export default Testimonials;