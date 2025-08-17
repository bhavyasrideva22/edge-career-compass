import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  calculateSectionScore, 
  calculateWISCARScores, 
  edgeAIAssessment 
} from "@/data/assessmentData";
import { 
  Target, 
  TrendingUp, 
  Brain, 
  Code, 
  Lightbulb, 
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  XCircle,
  Star
} from "lucide-react";

const Results = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<Record<string, { value: number; answer: string }>>({});
  const [scores, setScores] = useState({
    psychometric: 0,
    technical: 0,
    aptitude: 0,
    overall: 0
  });
  const [wiscarScores, setWiscarScores] = useState({
    will: 0,
    interest: 0,
    skill: 0,
    cognitive: 0,
    ability: 0,
    realworld: 0
  });

  useEffect(() => {
    const savedAnswers = localStorage.getItem('assessmentAnswers');
    if (!savedAnswers) {
      navigate('/');
      return;
    }

    const parsedAnswers = JSON.parse(savedAnswers);
    setAnswers(parsedAnswers);

    // Calculate section scores
    const psychometricScore = calculateSectionScore(parsedAnswers, edgeAIAssessment.sections.psychometric);
    const technicalScore = calculateSectionScore(parsedAnswers, edgeAIAssessment.sections.technical);
    const aptitudeScore = calculateSectionScore(parsedAnswers, edgeAIAssessment.sections.aptitude);
    const overallScore = Math.round((psychometricScore + technicalScore + aptitudeScore) / 3);

    setScores({
      psychometric: psychometricScore,
      technical: technicalScore,
      aptitude: aptitudeScore,
      overall: overallScore
    });

    // Calculate WISCAR scores
    const wiscar = calculateWISCARScores(parsedAnswers);
    setWiscarScores(wiscar);
  }, [navigate]);

  const getRecommendation = () => {
    if (scores.overall >= 80) {
      return {
        title: "Excellent Fit!",
        message: "You show strong alignment with Edge AI development across multiple dimensions.",
        action: "Ready to start your Edge AI journey",
        icon: CheckCircle,
        color: "text-green-600",
        bgColor: "bg-green-50"
      };
    } else if (scores.overall >= 60) {
      return {
        title: "Good Potential",
        message: "You have solid foundation with some areas for development.",
        action: "Consider targeted learning in specific areas",
        icon: AlertCircle,
        color: "text-yellow-600",
        bgColor: "bg-yellow-50"
      };
    } else {
      return {
        title: "Explore Further",
        message: "Edge AI might not be the best fit, but consider related fields.",
        action: "Explore alternative career paths",
        icon: XCircle,
        color: "text-red-600",
        bgColor: "bg-red-50"
      };
    }
  };

  const recommendation = getRecommendation();
  const RecommendationIcon = recommendation.icon;

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getProgressColor = (score: number) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 60) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
          
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Your Assessment Results
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Based on your responses, here's your comprehensive analysis for becoming an Edge AI Developer
            </p>
          </div>
        </div>

        {/* Overall Recommendation */}
        <Card className={`p-8 mb-8 ${recommendation.bgColor} border-2`}>
          <div className="flex items-center gap-4 mb-4">
            <RecommendationIcon className={`w-8 h-8 ${recommendation.color}`} />
            <div>
              <h2 className="text-2xl font-bold text-foreground">{recommendation.title}</h2>
              <p className="text-lg text-muted-foreground">{recommendation.message}</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-medium text-foreground">{recommendation.action}</p>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              Overall Score: {scores.overall}%
            </Badge>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Section Scores */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Target className="w-5 h-5" />
              Section Breakdown
            </h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium flex items-center gap-2">
                    <Brain className="w-4 h-4" />
                    Personality & Motivation
                  </span>
                  <span className={`font-bold ${getScoreColor(scores.psychometric)}`}>
                    {scores.psychometric}%
                  </span>
                </div>
                <Progress value={scores.psychometric} className="h-3" />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    Technical Knowledge
                  </span>
                  <span className={`font-bold ${getScoreColor(scores.technical)}`}>
                    {scores.technical}%
                  </span>
                </div>
                <Progress value={scores.technical} className="h-3" />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium flex items-center gap-2">
                    <Lightbulb className="w-4 h-4" />
                    Aptitude & Problem Solving
                  </span>
                  <span className={`font-bold ${getScoreColor(scores.aptitude)}`}>
                    {scores.aptitude}%
                  </span>
                </div>
                <Progress value={scores.aptitude} className="h-3" />
              </div>
            </div>
          </Card>

          {/* WISCAR Analysis */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              WISCAR Framework
            </h3>
            <div className="space-y-4">
              {Object.entries(wiscarScores).map(([dimension, score]) => (
                <div key={dimension}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium capitalize">{dimension}</span>
                    <span className={`text-sm font-bold ${getScoreColor(score)}`}>
                      {score}%
                    </span>
                  </div>
                  <Progress value={score} className="h-2" />
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Career Guidance */}
        <Card className="p-8 mt-8">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Star className="w-6 h-6" />
            Personalized Career Guidance
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary">Recommended Next Steps</h4>
              <ul className="space-y-3">
                {scores.technical < 60 && (
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Strengthen programming fundamentals (Python, C++)</span>
                  </li>
                )}
                {scores.technical < 80 && (
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Learn TensorFlow Lite and ONNX frameworks</span>
                  </li>
                )}
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Build projects with Raspberry Pi or NVIDIA Jetson</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Study model optimization techniques</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary">Related Career Paths</h4>
              <div className="space-y-3">
                <Badge variant="secondary" className="mr-2 mb-2">ML Engineer</Badge>
                <Badge variant="secondary" className="mr-2 mb-2">IoT Developer</Badge>
                <Badge variant="secondary" className="mr-2 mb-2">Embedded Systems Engineer</Badge>
                <Badge variant="secondary" className="mr-2 mb-2">Computer Vision Engineer</Badge>
                <Badge variant="secondary" className="mr-2 mb-2">Robotics Engineer</Badge>
                <Badge variant="secondary" className="mr-2 mb-2">AI Research Engineer</Badge>
              </div>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="text-center mt-8 space-x-4">
          <Button variant="hero" size="lg" onClick={() => navigate('/assessment')}>
            Retake Assessment
          </Button>
          <Button variant="outline" size="lg" onClick={() => navigate('/')}>
            Explore More Assessments
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Results;