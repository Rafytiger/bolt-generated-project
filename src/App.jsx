import React from 'react';
    import Hero from './components/Hero';
    import AboutUs from './components/AboutUs';
    import MembershipBenefits from './components/MembershipBenefits';
    import FeaturedProducts from './components/FeaturedProducts';
    import Testimonials from './components/Testimonials';
    import BlogAndResources from './components/BlogAndResources';
    import MotivationBanner from './components/MotivationBanner';
    import Footer from './components/Footer';
    
    function App() {
      return (
        <div>
          <Hero />
          <AboutUs />
          <MembershipBenefits />
          <FeaturedProducts />
          <Testimonials />
          <BlogAndResources />
          <MotivationBanner />
          <Footer />
        </div>
      );
    }
    
    export default App;
