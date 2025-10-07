import { Search, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-gradient-to-b from-background to-transparent">
      <div className="flex items-center justify-between px-4 md:px-12 py-4">
        <div className="flex items-center gap-8">
          <h1 className="text-primary text-3xl font-bold">NETFLIX</h1>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">Home</a>
            <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">TV Shows</a>
            <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">Movies</a>
            <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">New & Popular</a>
            <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">My List</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-foreground hover:text-muted-foreground">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground hover:text-muted-foreground">
            <Bell className="h-5 w-5" />
          </Button>
          <div className="w-8 h-8 rounded bg-primary" />
        </div>
      </div>
    </header>
  );
};

export default Header;
