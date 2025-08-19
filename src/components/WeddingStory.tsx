import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const WeddingStory = () => {
  const { ref, inView } = useScrollAnimation();
  const storyEvents = [
    {
      date: "Октябрь 2017",
      title: "Первая встреча",
      description: "Мы познакомились в школе. Еще тогда между нами проскочила искра, и спустя некоторое время завязалось общение"
    },
    {
      date: "Май 2020",
      title: "Первое свидание",
      description: "Прогулка по летней Москве в условиях изоляции в годы бушующего коронавируса😷. Тогда в вечерней поездке на автобусе мы поняли - это любовь."
    },
    {
      date: "Зима 2025",
      title: "Предложение",
      description: "Пока не знаю каким оно будет) Но это будет незабываемо"
    },
    {
      date: "Июнь 2026",
      title: "Наша свадьба",
      description: "И вот мы здесь, готовые начать новую главу нашей жизни в окружении самых дорогих людей."
    }
  ];

  return (
    <section id="story" className="py-20 px-4 bg-gradient-to-b from-soft-cream to-romantic-pink/20">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-elegant text-4xl md:text-5xl text-primary mb-4">
            Наша история любви
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Каждая пара имеет свою уникальную историю, и мы хотим поделиться нашей с вами
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/30 hidden md:block" />
          
          <div className="space-y-12">
            {storyEvents.map((event, index) => {
              const StoryCard = ({ children }: { children: React.ReactNode }) => {
                const { ref: cardRef, inView: cardInView } = useScrollAnimation();
                return (
                  <div 
                    ref={cardRef}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } transition-all duration-1000 ${
                      cardInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ 
                      transitionDelay: `${index * 100}ms` 
                    }}
                  >
                    {children}
                  </div>
                );
              };

              return (
                <StoryCard key={index}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-romantic hidden md:block z-10" />
                  
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="shadow-romantic transition-romantic hover:shadow-golden">
                      <CardContent className="p-6">
                        <div className="text-primary font-elegant text-sm mb-2">
                          {event.date}
                        </div>
                        <h3 className="font-elegant text-xl text-primary mb-3">
                          {event.title}
                        </h3>
                        <p className="text-foreground leading-relaxed">
                          {event.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </StoryCard>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-16">
          <Card className="gradient-romantic shadow-romantic">
            <CardContent className="p-8">
              <p className="font-script text-2xl text-primary mb-4">
                "Любовь не смотрит глазами, а душой"
              </p>
              <p className="text-muted-foreground font-elegant">
                — Уильям Шекспир
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WeddingStory;