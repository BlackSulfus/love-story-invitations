import { Card, CardContent } from "@/components/ui/card";

const WeddingStory = () => {
  const storyEvents = [
    {
      date: "Сентябрь 2019",
      title: "Первая встреча",
      description: "Мы познакомились в уютном кафе на Невском проспекте. Было дождливо, но в наших сердцах светило солнце."
    },
    {
      date: "Февраль 2020",
      title: "Первое свидание",
      description: "Прогулка по заснеженному Петербургу превратилась в волшебный вечер, полный смеха и долгих разговоров."
    },
    {
      date: "Май 2022",
      title: "Предложение",
      description: "На рассвете в Летнем саду Александр сделал предложение. Екатерина сказала 'Да!' под пение птиц."
    },
    {
      date: "Июнь 2024",
      title: "Наша свадьба",
      description: "И вот мы здесь, готовые начать новую главу нашей жизни в окружении самых дорогих людей."
    }
  ];

  return (
    <section id="story" className="py-20 px-4 bg-gradient-to-b from-soft-cream to-romantic-pink/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
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
            {storyEvents.map((event, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
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
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16 fade-in-up animate-delay-800">
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