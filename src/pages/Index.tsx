import WeddingHero from "@/components/WeddingHero";
import WeddingDetails from "@/components/WeddingDetails";
import WeddingStory from "@/components/WeddingStory";
import RSVP from "@/components/RSVP";
import WeddingFooter from "@/components/WeddingFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <WeddingHero />
      <WeddingDetails />
      <WeddingStory />
      <RSVP />
      <WeddingFooter />
    </div>
  );
};

export default Index;
