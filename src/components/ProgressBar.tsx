import { Progress } from "@/components/ui/progress";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  title?: string;
}

export const ProgressBar = ({ currentStep, totalSteps, title }: ProgressBarProps) => {
  const progress = (currentStep / totalSteps) * 100;
  
  return (
    <div className="w-full space-y-2">
      {title && (
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <span>{title}</span>
          <span>{currentStep} of {totalSteps}</span>
        </div>
      )}
      <Progress value={progress} className="h-2" />
      <div className="text-center text-xs text-muted-foreground">
        {Math.round(progress)}% Complete
      </div>
    </div>
  );
};