import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import LinkButton from "@/components/LinkButton";

interface ThematicCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ThematicCard({title, description, image}: ThematicCardProps) {
  return (
    <Card
      className="min-h-96 relative flex items-center justify-center group overflow-hidden"
      style={{backgroundImage: `url(${image})`, backgroundSize: "cover"}}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"/>
      <div className="relative z-20 text-white text-center flex flex-col items-center">
        <CardHeader
          className="transition-transform duration-300 group-hover:translate-y-[-25%]"
        >
          <CardTitle className="text-3xl">{title}</CardTitle>
        </CardHeader>
        <CardContent
          className="opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[300px] transition-all duration-300 mt-4"
        >
          <p>{description.slice(0, 200)}...</p>
          <LinkButton href="/en-bref/sectors" title="En savoir plus" className="mt-8">En savoir plus</LinkButton>
        </CardContent>
      </div>
    </Card>
  );
}