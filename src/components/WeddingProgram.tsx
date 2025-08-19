import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const WeddingProgram = () => {
  const { ref, inView } = useScrollAnimation();
  
  const programEvents = [
    {
      time: "15:00",
      title: "Сбор гостей",
      description: "Просим взять с собой свои улыбки и хорошее настроение"
    },
    {
      time: "16:00", 
      title: "Свадебная церемония",
      description: ""
    },
    {
      time: "17:00",
      title: "Начало банкета", 
      description: "Время вкусно покушать, потанцевать, повеселиться и провести конкурсы с подарками!"
    },
    {
      time: "22:00",
      title: "Окончание мероприятия",
      description: "К сожалению, даже такие прекрасные события заканчиваются."
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-background to-soft-cream">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-elegant text-4xl md:text-5xl text-primary mb-4">
            Программа дня
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/30 hidden md:block" />
          
          <div className="space-y-12">
            {programEvents.map((event, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } transition-all duration-1000 ${
                  inView ? 'opacity-100 translate-x-0' : 
                  index % 2 === 0 ? 'opacity-0 -translate-x-10' : 'opacity-0 translate-x-10'
                }`}
                style={{ 
                  transitionDelay: inView ? `${index * 200}ms` : '0ms' 
                }}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-romantic hidden md:block z-10" />
                
                {/* Time */}
                <div className={`w-full md:w-2/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} mb-4 md:mb-0`}>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="font-elegant text-2xl text-primary font-semibold">
                      {event.time}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="shadow-romantic transition-romantic hover:shadow-golden">
                    <CardContent className="p-6">
                      <h3 className="font-elegant text-xl text-primary mb-3">
                        {event.title}
                      </h3>
                      {event.description && (
                        <p className="text-foreground leading-relaxed">
                          {event.description}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingProgram;