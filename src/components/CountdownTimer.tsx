import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const { ref, inView } = useScrollAnimation();
  const weddingDate = new Date('2026-06-16T15:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={ref} className="py-16 px-4 bg-gradient-to-b from-soft-cream to-romantic-pink/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-elegant text-2xl md:text-3xl text-primary mb-6">
            ДОРОГИЕ ГОСТИ!
          </h2>
          <p className="font-sans text-lg text-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            С огромным волнением и радостью мы приглашаем вас разделить с нами этот особенный день — нашу свадьбу. 
            Это будет незабываемое событие, и мы хотим, чтобы вы стали его частью.
          </p>
          
          <h3 className="font-elegant text-xl md:text-2xl text-primary mb-8">
            ДО СВАДЬБЫ ОСТАЛОСЬ
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { value: timeLeft.days, label: 'дней' },
              { value: timeLeft.hours, label: 'часов' },
              { value: timeLeft.minutes, label: 'минут' },
              { value: timeLeft.seconds, label: 'секунд' }
            ].map((item, index) => (
              <Card key={index} className="shadow-romantic">
                <CardContent className="p-4">
                  <div className="font-elegant text-3xl md:text-4xl text-primary mb-1">
                    {item.value}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">
                    {item.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;