import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface QuestionCardProps {
  question: {
    id: string;
    type: "multiple-choice" | "likert" | "scenario";
    title: string;
    subtitle?: string;
    options: Array<{
      id: string;
      text: string;
      value: number;
    }>;
  };
  onAnswer: (questionId: string, answer: string, value: number) => void;
  selectedAnswer?: string;
}

export const QuestionCard = ({ question, onAnswer, selectedAnswer }: QuestionCardProps) => {
  const [selected, setSelected] = useState(selectedAnswer || "");

  const handleSelection = (value: string) => {
    setSelected(value);
    const option = question.options.find(opt => opt.id === value);
    if (option) {
      onAnswer(question.id, value, option.value);
    }
  };

  const getLikertLabel = (index: number) => {
    const labels = ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"];
    return labels[index] || "";
  };

  return (
    <Card className="p-8 bg-card border-border/50 shadow-soft">
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-card-foreground leading-relaxed">
            {question.title}
          </h3>
          {question.subtitle && (
            <p className="text-muted-foreground text-sm">
              {question.subtitle}
            </p>
          )}
        </div>

        <RadioGroup value={selected} onValueChange={handleSelection} className="space-y-3">
          {question.options.map((option, index) => (
            <div key={option.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <RadioGroupItem value={option.id} id={option.id} />
              <Label 
                htmlFor={option.id} 
                className="flex-1 cursor-pointer text-sm leading-relaxed"
              >
                {question.type === "likert" && (
                  <span className="font-medium text-primary mr-2">
                    {getLikertLabel(index)}:
                  </span>
                )}
                {option.text}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </Card>
  );
};