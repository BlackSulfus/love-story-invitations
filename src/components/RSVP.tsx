import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attendance: "",
    guests: "",
    dietary: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a backend
    toast({
      title: "Спасибо за ответ!",
      description: "Мы получили вашу заявку и свяжемся с вами в ближайшее время.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      attendance: "",
      guests: "",
      dietary: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="rsvp" className="py-20 px-4 bg-gradient-to-b from-background to-soft-cream">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="font-elegant text-4xl md:text-5xl text-primary mb-4">
            Подтверждение присутствия
          </h2>
          <p className="font-sans text-lg text-muted-foreground">
            Пожалуйста, ответьте до 1 мая 2026 года
          </p>
        </div>

        <Card className="shadow-romantic fade-in-up animate-delay-200">
          <CardHeader>
            <CardTitle className="font-elegant text-2xl text-center text-primary">
              RSVP
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-elegant">
                  Ваше имя *
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  className="transition-romantic"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="font-elegant">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="transition-romantic"
                />
              </div>

              <div className="space-y-2">
                <Label className="font-elegant">
                  Подтверждаете ли вы свое присутствие? *
                </Label>
                <Select value={formData.attendance} onValueChange={(value) => handleInputChange("attendance", value)}>
                  <SelectTrigger className="transition-romantic">
                    <SelectValue placeholder="Выберите ответ" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Да, обязательно буду!</SelectItem>
                    <SelectItem value="no">К сожалению, не смогу присутствовать</SelectItem>
                    <SelectItem value="maybe">Пока не уверен(а)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="font-elegant">
                  Количество гостей (включая вас)
                </Label>
                <Select value={formData.guests} onValueChange={(value) => handleInputChange("guests", value)}>
                  <SelectTrigger className="transition-romantic">
                    <SelectValue placeholder="Выберите количество" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 человек</SelectItem>
                    <SelectItem value="2">2 человека</SelectItem>
                    <SelectItem value="3">3 человека</SelectItem>
                    <SelectItem value="4">4 человека</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dietary" className="font-elegant">
                  Особенности питания или аллергии
                </Label>
                <Input
                  id="dietary"
                  value={formData.dietary}
                  onChange={(e) => handleInputChange("dietary", e.target.value)}
                  placeholder="Вегетарианство, аллергии и т.д."
                  className="transition-romantic"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="font-elegant">
                  Пожелания молодоженам
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Напишите свои пожелания..."
                  className="transition-romantic min-h-[100px]"
                />
              </div>

              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 text-lg font-elegant shadow-romantic transition-romantic"
              >
                Отправить ответ
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RSVP;