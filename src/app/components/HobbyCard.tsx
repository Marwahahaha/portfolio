interface HobbyCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function HobbyCard({ title, description, icon }: HobbyCardProps) {
  return (
    <article className="card-hover bg-card rounded-[2rem] p-7 shadow-sm">
      <p className="text-4xl">{icon}</p>
      <h3 className="text-heading mt-4 text-2xl font-black">{title}</h3>
      <p className="text-muted mt-3 leading-7">{description}</p>
    </article>
  );
}