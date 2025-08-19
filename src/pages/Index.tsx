import WeddingHero from "@/components/WeddingHero";
import CountdownTimer from "@/components/CountdownTimer";
import WeddingDetails from "@/components/WeddingDetails";
import WeddingStory from "@/components/WeddingStory";
import WeddingProgram from "@/components/WeddingProgram";
import RSVP from "@/components/RSVP";
import WeddingFooter from "@/components/WeddingFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <WeddingHero />
      <CountdownTimer />
      <WeddingDetails />
      <WeddingStory />
      <WeddingProgram />
      <RSVP />
      <WeddingFooter />
    </div>
  );
};

export default Index;
