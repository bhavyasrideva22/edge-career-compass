import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProgressBar } from "@/components/ProgressBar";
import { QuestionCard } from "@/components/QuestionCard";
import { edgeAIAssessment, Question } from "@/data/assessmentData";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Assessment = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, { value: number; answer: string }>>({});
  const [currentSection, setCurrentSection] = useState("psychometric");
  
  // Flatten all questions for easy navigation
  const allQuestions: Question[] = [
    ...edgeAIAssessment.sections.psychometric,
    ...edgeAIAssessment.sections.technical,
    ...edgeAIAssessment.sections.aptitude,
    ...edgeAIAssessment.sections.wiscar
  ];

  const currentQuestion = allQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === allQuestions.length - 1;
  const canProceed = answers[currentQuestion?.id];

  useEffect(() => {
    // Update current section based on question
    if (currentQuestion) {
      setCurrentSection(currentQuestion.section);
    }
  }, [currentQuestion]);

  const handleAnswer = (questionId: string, answer: string, value: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: { answer, value }
    }));
  };

  const handleNext = () => {
    if (isLastQuestion) {
      // Save answers to localStorage and navigate to results
      localStorage.setItem('assessmentAnswers', JSON.stringify(answers));
      navigate('/results');
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const getSectionTitle = (section: string) => {
    switch (section) {
      case "psychometric": return "Personality & Motivation Assessment";
      case "technical": return "Technical Knowledge Quiz";
      case "aptitude": return "Aptitude & Problem Solving";
      case "wiscar": return "WISCAR Framework Analysis";
      default: return "Assessment";
    }
  };

  const getSectionDescription = (section: string) => {
    switch (section) {
      case "psychometric": return "Understanding your personality traits, interests, and motivation for Edge AI development";
      case "technical": return "Evaluating your current knowledge of Edge AI frameworks, hardware, and concepts";
      case "aptitude": return "Testing logical reasoning, pattern recognition, and numerical problem-solving abilities";
      case "wiscar": return "Comprehensive analysis of Will, Interest, Skill, Cognitive readiness, Ability to learn, and Real-world alignment";
      default: return "";
    }
  };

  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground">Loading Assessment...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </div>
          
          <ProgressBar 
            currentStep={currentQuestionIndex + 1} 
            totalSteps={allQuestions.length}
            title="Assessment Progress"
          />
        </div>

        {/* Section Header */}
        <Card className="p-6 mb-6 bg-card border-border/50">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold text-card-foreground">
              {getSectionTitle(currentSection)}
            </h1>
            <p className="text-muted-foreground">
              {getSectionDescription(currentSection)}
            </p>
          </div>
        </Card>

        {/* Question */}
        <div className="mb-8">
          <QuestionCard
            question={currentQuestion}
            onAnswer={handleAnswer}
            selectedAnswer={answers[currentQuestion.id]?.answer}
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </Button>

          <div className="text-sm text-muted-foreground">
            Question {currentQuestionIndex + 1} of {allQuestions.length}
          </div>

          <Button
            variant="hero"
            onClick={handleNext}
            disabled={!canProceed}
            className="flex items-center gap-2"
          >
            {isLastQuestion ? "View Results" : "Next"}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Assessment;