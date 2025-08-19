import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MessageCircle } from "lucide-react";

const WeddingFooter = () => {
  return (
    <footer className="py-16 px-4 gradient-hero">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="font-elegant text-3xl md:text-4xl text-primary mb-4">
            Контакты
          </h2>
          <p className="font-sans text-lg text-muted-foreground">
            По всем вопросам обращайтесь к нам
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-romantic fade-in-left">
            <CardContent className="p-8 text-center">
              <h3 className="font-elegant text-xl text-primary mb-4">Александр</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>alexander@email.com</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <span>@alexander_wedding</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-romantic fade-in-right">
            <CardContent className="p-8 text-center">
              <h3 className="font-elegant text-xl text-primary mb-4">Екатерина</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+7 (999) 765-43-21</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>ekaterina@email.com</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <span>@ekaterina_wedding</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center fade-in-up animate-delay-400">
          <Card className="gradient-romantic shadow-romantic">
            <CardContent className="p-8">
              <p className="font-script text-3xl text-primary mb-4">
                С любовью, Александр & Екатерина
              </p>
              <p className="text-muted-foreground">
                Мы не можем дождаться этого особенного дня с вами!
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8 fade-in-up animate-delay-600">
          <p className="text-sm text-muted-foreground">
            © 2024 Свадебное приглашение. Создано с 💕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default WeddingFooter;