import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import ContactUs from "./pages/ContactUs";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import MehandiPlan from "./pages/MehandiPlan";
import Services from "./pages/Services";
import ServiceDetails from "./components/ServiceDetails/ServiceDetails";
import PrivacyAndPolicy from "./pages/PrivacyAndPolicy";
import TermsAndCondition from "./pages/TermsAndCondition";

function App() {
  const services = [
    {
      id: 1,
      image: "/assets/service/m2.jpeg",
      title: "Bridal Mehandi",
      shortDescription: "Intricate designs for brides.",
      description:
        "Bridal Mehandi is a timeless tradition that adorns the bride with intricate and exquisite patterns symbolizing love, joy, and prosperity. These designs are customized to blend traditional Indian motifs with contemporary styles, ensuring that every bride feels special on her big day. Our expert artists use high-quality, natural henna to create elaborate patterns that tell a story of tradition and celebration. From peacocks and floral designs to initials and thematic motifs, we ensure perfection in every detail, making it the highlight of your bridal ensemble.",
      descriptionSecond:
        "Our Bridal Mehandi service caters to all regional styles, including Rajasthani, Arabic, and Mughal-inspired patterns. We emphasize creativity and precision to create a personalized design that matches your wedding theme and preferences.",
      category: "Wedding",
      priceRange: "₹15000-₹35000",
      rating: 4.9,
    },
    {
      id: 2,
      image: "/assets/service/g93.jpeg",
      title: "Party Mehandi",
      shortDescription: "Perfect for parties and events.",
      description:
        "Party Mehandi is designed to add charm and elegance to your look, perfect for any celebration. Our designs range from modern geometric patterns to traditional florals, crafted to suit the occasion and your style. Whether it's a birthday party, anniversary, or engagement, we ensure quick yet beautiful designs to complement your outfit. With a variety of patterns to choose from, our artists guarantee a unique and stylish look that stands out.",
      descriptionSecond:
        "This service is ideal for group events, allowing multiple guests to get their Mehandi done efficiently and beautifully. Our team ensures clean application and long-lasting stains for your special occasions.",
      category: "Celebration",
      priceRange: "₹1000-₹15000",
      rating: 4.7,
    },
    {
      id: 3,
      image: "/assets/service/g94.jpeg",
      title: "Festive Mehandi",
      shortDescription: "Celebrate with festive designs.",
      description:
        "Festive Mehandi is a beautiful way to embrace the joy and spirit of festivals like Karva Chauth, Diwali, and Eid. These designs are curated to blend tradition and creativity, featuring vibrant patterns that evoke festive cheer. Our artists ensure flawless application, making your celebrations even more memorable. From intricate full-hand designs to simple wrist patterns, we offer options for all preferences, ensuring a vibrant and joyous look.",
      descriptionSecond:
        "We use 100% organic henna to provide a safe and skin-friendly experience for you and your loved ones during festive celebrations.",
      category: "Festive",
      priceRange: "₹1500-₹16000",
      rating: 4.8,
    },
    {
      id: 4,
      image: "/assets/service/Corporate Event Mehandi.webp",
      title: "Corporate Event Mehandi",
      shortDescription: "Professional designs for events.",
      description:
        "Corporate Event Mehandi services cater to formal events where elegance and sophistication are key. Our designs are subtle, clean, and professional, reflecting the spirit of corporate culture. Whether it’s a team-building activity or a themed office party, our artists create stylish yet understated patterns that add a touch of tradition to the modern workspace.",
      descriptionSecond:
        "This service includes quick-drying and minimalistic designs, ensuring no disruption to your event schedule. Ideal for large groups and professional gatherings.",
      category: "Corporate",
      priceRange: "₹3000-₹18000",
      rating: 4.6,
    },
    {
      id: 5,
      image: "/assets/service/Minimalist Mehandi.jpg",
      title: "Minimalist Mehandi",
      shortDescription: "Simple yet beautiful.",
      description:
        "Minimalist Mehandi is the perfect choice for those who love simplicity and elegance. This style features delicate, clean, and modern patterns that suit casual events, office settings, or day-to-day wear. With minimalistic designs, you can showcase beauty with a touch of understated charm. Our artists specialize in creating contemporary patterns that are quick to apply yet leave a lasting impression.",
      descriptionSecond:
        "Perfect for those seeking a less-is-more approach, this service focuses on designs like simple lines, dots, and small motifs that make a statement without being overly elaborate.",
      category: "Modern",
      priceRange: "₹800-₹13000",
      rating: 4.5,
    },
    {
      id: 6,
      image: "/assets/service/service4.jpg",
      title: "Traditional Mehandi",
      shortDescription: "Rich in culture and heritage.",
      description:
        "Traditional Mehandi is deeply rooted in Indian culture, offering designs that are a testament to heritage and artistry. Our patterns include intricate motifs such as paisleys, flowers, and mythological figures, reflecting the beauty of timeless traditions. This service is ideal for weddings, religious ceremonies, and other cultural events, adding a touch of authenticity and elegance to your celebrations.",
      descriptionSecond:
        "We specialize in creating full-hand and arm designs that exude richness and depth, capturing the essence of Indian heritage.",
      category: "Traditional",
      priceRange: "₹4000-₹190000",
      rating: 4.9,
    },
    {
      id: 7,
      image: "/assets/service/baby8.webp",
      title: "Baby Shower Mehandi",
      shortDescription: "Celebrate motherhood.",
      description:
        "Baby Shower Mehandi celebrates the joy of motherhood with creative and meaningful designs. These patterns often include motifs of baby items, mother-child themes, and symbolic elements to mark the occasion. Our artists work closely with clients to craft personalized designs that reflect their emotions and the significance of this special day.",
      descriptionSecond:
        "This service also offers family-oriented Mehandi designs, making the event more inclusive and memorable for everyone attending.",
      category: "Celebration",
      priceRange: "₹2000-₹17000",
      rating: 4.7,
    },
    {
      id: 8,
      image: "/assets/service/Customized Mehandi.webp",
      title: "Customized Mehandi",
      shortDescription: "Tailored to your preferences.",
      description:
        "Customized Mehandi is all about you! Whether you want a specific motif, theme, or design, our artists bring your vision to life. Perfect for personalizing your Mehandi for weddings, birthdays, or special events, this service ensures that every design is unique and meaningful. Share your ideas, and we'll make them a reality with precision and creativity.",
      descriptionSecond:
        "We offer consultation sessions to discuss your ideas and preferences, ensuring a truly bespoke experience for every client.",
      category: "Custom",
      priceRange: "₹3000-₹12000",
      rating: 4.8,
    },
  ];

  return (
    <>
      <Router>
        <div>
          <Navbar />
        </div>
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/b-kittu-mehandi-artiest-about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/choose-your-plan" element={<MehandiPlan />} />
            <Route path="/services" element={<Services />} />
            <Route path="/privacy-policy" element={<PrivacyAndPolicy />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndCondition />}
            />
            <Route
              path="/service-details/:id"
              element={<ServiceDetails services={services} />}
            />
            {/* Add other routes here */}
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
