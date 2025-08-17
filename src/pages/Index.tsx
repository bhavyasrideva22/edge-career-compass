import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AssessmentCard } from "@/components/AssessmentCard";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Cpu, Target, TrendingUp, Clock, Star } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const handleStartAssessment = () => {
    navigate('/assessment');
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Should I Become an Edge AI Developer?
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover if Edge AI development aligns with your personality, interests, skills, and career goals through our comprehensive psychometric assessment.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Badge variant="secondary" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              20-30 minutes
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              Psychometrically validated
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              Career-aligned results
            </Badge>
          </div>
          
          <Button 
            variant="hero" 
            size="lg" 
            onClick={handleStartAssessment}
            className="px-12 py-6 text-lg"
          >
            Start Assessment
          </Button>
        </div>
      </section>

      {/* What is Edge AI Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="p-8 bg-card border-border/50 shadow-medium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-card-foreground">What is Edge AI?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Edge AI is the deployment of artificial intelligence algorithms on devices like IoT sensors, 
                smartphones, and embedded systems that process data locally—without relying on cloud computing.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-card-foreground">Typical Career Paths:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-primary" />
                    <span className="text-sm">Edge AI Developer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-primary" />
                    <span className="text-sm">Embedded AI Engineer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-primary" />
                    <span className="text-sm">IoT AI Specialist</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-primary" />
                    <span className="text-sm">AI Systems Architect</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-card-foreground">Ideal Traits:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-accent mt-1" />
                  <span>Strong problem-solving ability</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-accent mt-1" />
                  <span>Comfort with low-level hardware and software</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-accent mt-1" />
                  <span>High curiosity about embedded systems & AI</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-accent mt-1" />
                  <span>Patience and structured thinking</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-accent mt-1" />
                  <span>Interest in real-time applications</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      {/* Assessment Overview */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Comprehensive Assessment Framework</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our assessment uses validated psychometric tools and industry-specific evaluations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AssessmentCard
            title="Psychometric Analysis"
            description="Personality traits, interests, motivation, and grit assessment using Big Five and validated scales"
            duration="6-7 mins"
            participants="10K+ taken"
            accuracy="95%"
            difficulty="Beginner"
            topics={["Big Five", "Grit Scale", "Motivation", "Interest"]}
          />
          
          <AssessmentCard
            title="Technical Knowledge"
            description="Edge AI frameworks, hardware understanding, and domain-specific knowledge evaluation"
            duration="7-8 mins"
            participants="8K+ taken"
            accuracy="92%"
            difficulty="Intermediate"
            topics={["TensorFlow Lite", "Hardware", "Optimization", "Math"]}
          />
          
          <AssessmentCard
            title="Aptitude Testing"
            description="Logical reasoning, pattern recognition, and numerical problem-solving abilities"
            duration="5-8 mins"
            participants="12K+ taken"
            accuracy="98%"
            difficulty="Intermediate"
            topics={["Logic", "Patterns", "Math", "Problem Solving"]}
          />
          
          <AssessmentCard
            title="WISCAR Framework"
            description="Will, Interest, Skill, Cognitive readiness, Ability to learn, and Real-world alignment"
            duration="5-6 mins"
            participants="6K+ taken"
            accuracy="94%"
            difficulty="Advanced"
            topics={["Will", "Skill", "Learning", "Real-world Fit"]}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="p-8 text-center bg-gradient-primary border-0 shadow-strong">
          <div className="space-y-6 text-primary-foreground">
            <h2 className="text-3xl font-bold">Ready to Discover Your Path?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Take our comprehensive assessment and get personalized insights into your Edge AI career potential
            </p>
            <Button 
              variant="secondary" 
              size="lg" 
              onClick={handleStartAssessment}
              className="px-12 py-6 text-lg bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Begin Your Assessment Journey
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Index;
