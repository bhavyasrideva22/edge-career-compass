import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Target, TrendingUp } from "lucide-react";

interface AssessmentCardProps {
  title: string;
  description: string;
  duration: string;
  participants: string;
  accuracy: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  topics: string[];
}

export const AssessmentCard = ({
  title,
  description,
  duration,
  participants,
  accuracy,
  difficulty,
  topics
}: AssessmentCardProps) => {
  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case "Beginner": return "bg-green-100 text-green-800 border-green-200";
      case "Intermediate": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Advanced": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="p-6 hover:shadow-medium transition-all duration-300 bg-gradient-subtle border-border/50">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold text-card-foreground">{title}</h3>
          <Badge className={getDifficultyColor(difficulty)}>
            {difficulty}
          </Badge>
        </div>
        
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>{participants}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Target className="w-4 h-4" />
            <span>{accuracy} accuracy</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <TrendingUp className="w-4 h-4" />
            <span>Career aligned</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <p className="text-sm font-medium text-card-foreground">Assessment covers:</p>
          <div className="flex flex-wrap gap-2">
            {topics.map((topic, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {topic}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};