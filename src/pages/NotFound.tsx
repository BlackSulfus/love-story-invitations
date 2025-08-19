import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center gradient-hero">
      <div className="text-center fade-in-up">
        <h1 className="font-elegant text-6xl font-bold mb-4 text-primary">404</h1>
        <p className="font-elegant text-xl text-foreground mb-8">
          Страница не найдена
        </p>
        <p className="text-muted-foreground mb-8">
          Похоже, вы попали не туда. Вернитесь к нашему приглашению!
        </p>
        <Button 
          onClick={() => window.location.href = "/"}
          className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg font-elegant shadow-romantic transition-romantic"
        >
          Вернуться к приглашению
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
