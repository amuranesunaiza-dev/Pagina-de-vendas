import Hero from './components/Hero';
import Problem from './components/Problem';
import Identification from './components/Identification';
import Solution from './components/Solution';
import WhatYouLearn from './components/WhatYouLearn';
import Testimonials from './components/Testimonials';
import ForWho from './components/ForWho';
import Differentials from './components/Differentials';
import FinalCTA from './components/FinalCTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Problem />
      <Identification />
      <Solution />
      <WhatYouLearn />
      <Testimonials />
      <ForWho />
      <Differentials />
      <FinalCTA />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
