import { Play, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroMovie from "@/assets/hero-movie.jpg";

const Hero = () => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroMovie} 
          alt="Featured content" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
      
      <div className="relative h-full flex items-center px-4 md:px-12">
        <div className="max-w-2xl space-y-4 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold text-foreground">
            Action Thriller
          </h2>
          <p className="text-lg md:text-xl text-foreground max-w-xl">
            Experience the most intense action thriller of the year. An explosive journey that will keep you on the edge of your seat from start to finish.
          </p>
          <div className="flex gap-4 pt-4">
            <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90">
              <Play className="mr-2 h-5 w-5" fill="currentColor" />
              Play
            </Button>
            <Button size="lg" variant="secondary" className="bg-muted/70 hover:bg-muted/90 backdrop-blur-sm">
              <Info className="mr-2 h-5 w-5" />
              More Info
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
