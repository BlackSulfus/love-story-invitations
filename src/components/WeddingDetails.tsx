import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Clock, Heart } from "lucide-react";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import mensAttire from "@/assets/mens-attire.jpg";
import womensAttire from "@/assets/womens-attire.jpg";

const WeddingDetails = () => {
  const { ref, inView } = useScrollAnimation();
  const { ref: ceremonyRef, inView: ceremonyInView } = useScrollAnimation();
  const { ref: banquetRef, inView: banquetInView } = useScrollAnimation();
  const { ref: dressCodeRef, inView: dressCodeInView } = useScrollAnimation();

  return (
    <section id="details" className="py-20 px-4 bg-gradient-to-b from-soft-cream to-background">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-elegant text-4xl md:text-5xl text-primary mb-4">
            Детали торжества
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы будем рады видеть вас в самый важный день нашей жизни
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Ceremony */}
          <div ref={ceremonyRef}>
            <Card className={`shadow-romantic transition-all duration-1000 hover:shadow-golden ${ceremonyInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <CardContent className="p-8">
                <div className="text-center">
                  <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-elegant text-2xl text-primary mb-4">Церемония</h3>
                  <div className="space-y-3 text-foreground">
                    <div className="flex items-center justify-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span>16 июня 2026, вторник</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span>15:00</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>Дворец бракосочетания</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      Зеленоград, к. 240
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Reception */}
          <div ref={banquetRef}>
            <Card className={`shadow-romantic transition-all duration-1000 hover:shadow-golden ${banquetInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <CardContent className="p-8">
                <div className="text-center">
                  <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-elegant text-2xl text-primary mb-4">Банкет</h3>
                  <div className="space-y-3 text-foreground">
                    <div className="flex items-center justify-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span>20 июня 2026, суббота</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span>15:00</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>Место уточняется</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      Информация будет дополнена
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div ref={dressCodeRef}>
          <Card className={`gradient-romantic shadow-romantic transition-all duration-1000 mb-12 ${dressCodeInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <CardContent className="p-8 text-center">
              <h3 className="font-elegant text-2xl text-primary mb-4">Дресс-код</h3>
              <div className="space-y-4">
                <p className="text-foreground">
                  <strong>Для мужчин</strong> уместным будет классический костюм или брюки с рубашкой.
                </p>
                <p className="text-foreground">
                  <strong>Для девушек</strong> просим выбрать классические вечерние платья. Также, воздержитесь, пожалуйста, от большого количества белого цвета в ваших образах, в этот день он будет занят невестой. 🤍
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Dress code examples */}
        <div className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 ${dressCodeInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
          <Card className="shadow-romantic">
            <CardContent className="p-6">
              <img src={mensAttire} alt="Мужской дресс-код" className="w-full h-64 object-cover rounded-lg mb-4" />
              <h4 className="font-elegant text-lg text-primary text-center">Для мужчин</h4>
              <p className="text-sm text-muted-foreground text-center">Классический костюм или брюки с рубашкой</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-romantic">
            <CardContent className="p-6">
              <img src={womensAttire} alt="Женский дресс-код" className="w-full h-64 object-cover rounded-lg mb-4" />
              <h4 className="font-elegant text-lg text-primary text-center">Для девушек</h4>
              <p className="text-sm text-muted-foreground text-center">Классические вечерние платья</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WeddingDetails;