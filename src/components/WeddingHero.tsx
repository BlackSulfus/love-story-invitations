import { Button } from "@/components/ui/button";
import heroImage from "@/assets/wedding-hero.jpg";

const WeddingHero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 gradient-hero opacity-80" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-4 h-4 rounded-full bg-golden opacity-60 float" />
      <div className="absolute top-40 right-20 w-6 h-6 rounded-full bg-romantic-pink opacity-40 float-delayed" />
      <div className="absolute bottom-32 left-20 w-5 h-5 rounded-full bg-sage opacity-50 float" />
      
      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="fade-in-up">
          <h1 className="font-script text-6xl md:text-8xl text-primary mb-4">
            Александр & Екатерина
          </h1>
        </div>
        
        <div className="fade-in-up animate-delay-200">
          <p className="font-elegant text-xl md:text-2xl text-foreground mb-2">
            приглашают вас разделить радость
          </p>
        </div>
        
        <div className="fade-in-up animate-delay-400">
          <p className="font-elegant text-2xl md:text-3xl text-primary font-semibold mb-8">
            15 июня 2024
          </p>
        </div>
        
        <div className="fade-in-up animate-delay-600">
          <Button 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg font-elegant shadow-romantic transition-romantic"
            onClick={() => scrollToSection('details')}
          >
            Узнать подробности
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in-up animate-delay-800">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default WeddingHero;