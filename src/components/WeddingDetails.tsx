import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Clock, Heart } from "lucide-react";

const WeddingDetails = () => {
  return (
    <section id="details" className="py-20 px-4 bg-gradient-to-b from-soft-cream to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="font-elegant text-4xl md:text-5xl text-primary mb-4">
            Детали торжества
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы будем рады видеть вас в самый важный день нашей жизни
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Ceremony */}
          <Card className="shadow-romantic transition-romantic hover:shadow-golden fade-in-left">
            <CardContent className="p-8">
              <div className="text-center">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-elegant text-2xl text-primary mb-4">Церемония</h3>
                <div className="space-y-3 text-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span>15 июня 2024, суббота</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>16:00</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Дворец Бракосочетания № 1</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    ул. Английская наб., 28, Санкт-Петербург
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Reception */}
          <Card className="shadow-romantic transition-romantic hover:shadow-golden fade-in-right">
            <CardContent className="p-8">
              <div className="text-center">
                <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-elegant text-2xl text-primary mb-4">Банкет</h3>
                <div className="space-y-3 text-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span>15 июня 2024, суббота</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>18:00</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Ресторан "Русская Рыбалка"</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Приморское шоссе, 411, Санкт-Петербург
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="gradient-romantic shadow-romantic fade-in-up animate-delay-400">
          <CardContent className="p-8 text-center">
            <h3 className="font-elegant text-2xl text-primary mb-4">Дресс-код</h3>
            <p className="text-foreground mb-4">
              Просим вас воздержаться от белого, молочного и кремового цветов в одежде
            </p>
            <p className="text-muted-foreground">
              Рекомендуемые цвета: пыльная роза, лавандовый, шалфейный, терракотовый
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WeddingDetails;