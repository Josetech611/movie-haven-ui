import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ContentRow from "@/components/ContentRow";
import movie1 from "@/assets/movie-1.jpg";
import movie2 from "@/assets/movie-2.jpg";
import movie3 from "@/assets/movie-3.jpg";
import movie4 from "@/assets/movie-4.jpg";
import movie5 from "@/assets/movie-5.jpg";
import movie6 from "@/assets/movie-6.jpg";

const Index = () => {
  const trendingNow = [
    { id: 1, image: movie1, title: "Neon Future" },
    { id: 2, image: movie2, title: "Love in Paris" },
    { id: 3, image: movie3, title: "Dark Shadows" },
    { id: 4, image: movie4, title: "Comedy Night" },
    { id: 5, image: movie5, title: "Epic Quest" },
    { id: 6, image: movie6, title: "Magic Realm" },
  ];

  const popularMovies = [
    { id: 7, image: movie6, title: "Magic Realm" },
    { id: 8, image: movie5, title: "Epic Quest" },
    { id: 9, image: movie4, title: "Comedy Night" },
    { id: 10, image: movie3, title: "Dark Shadows" },
    { id: 11, image: movie2, title: "Love in Paris" },
    { id: 12, image: movie1, title: "Neon Future" },
  ];

  const newReleases = [
    { id: 13, image: movie3, title: "Dark Shadows" },
    { id: 14, image: movie1, title: "Neon Future" },
    { id: 15, image: movie5, title: "Epic Quest" },
    { id: 16, image: movie2, title: "Love in Paris" },
    { id: 17, image: movie6, title: "Magic Realm" },
    { id: 18, image: movie4, title: "Comedy Night" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <div className="space-y-8 pb-12">
        <ContentRow title="Trending Now" movies={trendingNow} />
        <ContentRow title="Popular on Netflix" movies={popularMovies} />
        <ContentRow title="New Releases" movies={newReleases} />
      </div>
    </div>
  );
};

export default Index;
