import React from "react";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Brands from "./Components/Brands/Brands";
import Choose from "./Components/Choose/Choose";
import Testimonial from "./Components/Testimonials/Testimonial";
import Message from "./Components/Message/Message";
import Contact from "./Components/Contact/Contact";
import Blog from "./Components/Blog/Blog";
const App = () => {
  return (
    <div className="try">
      <div className="construction__sidebar"></div>
      <Navbar />
      <Hero />
      <Brands />
      <Choose />
      <Testimonial />
      <Message />
      <Contact />
      <Blog />
    </div>
  );
};

export default App;
