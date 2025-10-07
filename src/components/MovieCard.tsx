interface MovieCardProps {
  image: string;
  title: string;
}

const MovieCard = ({ image, title }: MovieCardProps) => {
  return (
    <div className="group relative min-w-[200px] md:min-w-[250px] cursor-pointer transition-transform duration-300 hover:scale-110 hover:z-10">
      <img 
        src={image} 
        alt={title}
        className="w-full h-[300px] md:h-[375px] object-cover rounded"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded flex items-end p-4">
        <h3 className="text-foreground font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
