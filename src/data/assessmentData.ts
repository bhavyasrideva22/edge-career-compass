export interface Question {
  id: string;
  section: "psychometric" | "technical" | "aptitude" | "wiscar";
  subsection: string;
  type: "multiple-choice" | "likert" | "scenario";
  title: string;
  subtitle?: string;
  construct?: string; // For psychometric questions
  options: Array<{
    id: string;
    text: string;
    value: number;
  }>;
}

export interface AssessmentData {
  title: string;
  description: string;
  estimatedTime: string;
  sections: {
    psychometric: Question[];
    technical: Question[];
    aptitude: Question[];
    wiscar: Question[];
  };
}

export const edgeAIAssessment: AssessmentData = {
  title: "Should I Become an Edge AI Developer?",
  description: "Discover if Edge AI development aligns with your interests, skills, and career goals through our comprehensive assessment.",
  estimatedTime: "20-30 minutes",
  sections: {
    psychometric: [
      {
        id: "interest_1",
        section: "psychometric",
        subsection: "interest",
        type: "likert",
        title: "I am curious about how AI can run on small devices like smartphones and IoT sensors.",
        construct: "interest",
        options: [
          { id: "1", text: "This sounds completely uninteresting to me", value: 1 },
          { id: "2", text: "Slightly interesting but not compelling", value: 2 },
          { id: "3", text: "Moderately interesting", value: 3 },
          { id: "4", text: "Very interesting and exciting", value: 4 },
          { id: "5", text: "Extremely fascinating - I want to learn more immediately", value: 5 }
        ]
      },
      {
        id: "interest_2",
        section: "psychometric",
        subsection: "interest",
        type: "likert",
        title: "I enjoy working on low-level code and device optimization challenges.",
        construct: "interest",
        options: [
          { id: "1", text: "I strongly dislike low-level programming", value: 1 },
          { id: "2", text: "I prefer high-level programming", value: 2 },
          { id: "3", text: "I'm neutral about programming levels", value: 3 },
          { id: "4", text: "I enjoy the challenge of low-level code", value: 4 },
          { id: "5", text: "I love optimizing at the hardware level", value: 5 }
        ]
      },
      {
        id: "personality_1",
        section: "psychometric",
        subsection: "personality",
        type: "likert",
        title: "I enjoy learning new technologies on my own, even when it's challenging.",
        construct: "openness",
        options: [
          { id: "1", text: "I prefer to stick with familiar technologies", value: 1 },
          { id: "2", text: "I sometimes explore new tech reluctantly", value: 2 },
          { id: "3", text: "I'm open to learning when necessary", value: 3 },
          { id: "4", text: "I actively seek out new technologies", value: 4 },
          { id: "5", text: "I'm always excited to learn cutting-edge tech", value: 5 }
        ]
      },
      {
        id: "personality_2",
        section: "psychometric",
        subsection: "personality",
        type: "likert",
        title: "I can work persistently on complex problems that may take weeks to solve.",
        construct: "conscientiousness",
        options: [
          { id: "1", text: "I get frustrated quickly with complex problems", value: 1 },
          { id: "2", text: "I prefer simpler, faster solutions", value: 2 },
          { id: "3", text: "I can handle moderate complexity", value: 3 },
          { id: "4", text: "I enjoy working through complex challenges", value: 4 },
          { id: "5", text: "Complex, long-term problems energize me", value: 5 }
        ]
      },
      {
        id: "motivation_1",
        section: "psychometric",
        subsection: "motivation",
        type: "likert",
        title: "I would pursue Edge AI even if it wasn't currently a popular or high-paying field.",
        construct: "intrinsic_motivation",
        options: [
          { id: "1", text: "I'm mainly interested in popular/high-paying fields", value: 1 },
          { id: "2", text: "Pay and popularity are important factors", value: 2 },
          { id: "3", text: "I balance interest with practical considerations", value: 3 },
          { id: "4", text: "I prioritize interest over external factors", value: 4 },
          { id: "5", text: "I follow my passion regardless of trends", value: 5 }
        ]
      },
      {
        id: "grit_1",
        section: "psychometric",
        subsection: "grit",
        type: "likert",
        title: "When I encounter setbacks in technical projects, I find ways to overcome them rather than giving up.",
        construct: "grit",
        options: [
          { id: "1", text: "I often give up when facing setbacks", value: 1 },
          { id: "2", text: "I sometimes push through but often quit", value: 2 },
          { id: "3", text: "I usually find ways to continue", value: 3 },
          { id: "4", text: "I consistently overcome technical challenges", value: 4 },
          { id: "5", text: "Setbacks motivate me to work harder", value: 5 }
        ]
      }
    ],
    technical: [
      {
        id: "tech_1",
        section: "technical",
        subsection: "programming",
        type: "multiple-choice",
        title: "Which programming language is most commonly used for edge AI model deployment?",
        subtitle: "Consider inference frameworks and embedded systems",
        options: [
          { id: "a", text: "JavaScript", value: 0 },
          { id: "b", text: "Python", value: 2 },
          { id: "c", text: "C++", value: 5 },
          { id: "d", text: "Ruby", value: 0 }
        ]
      },
      {
        id: "tech_2",
        section: "technical",
        subsection: "frameworks",
        type: "multiple-choice",
        title: "Which framework is specifically designed for running AI models on mobile and edge devices?",
        options: [
          { id: "a", text: "TensorFlow", value: 2 },
          { id: "b", text: "TensorFlow Lite", value: 5 },
          { id: "c", text: "PyTorch", value: 2 },
          { id: "d", text: "Scikit-learn", value: 0 }
        ]
      },
      {
        id: "tech_3",
        section: "technical",
        subsection: "hardware",
        type: "multiple-choice",
        title: "What is the primary constraint when deploying AI models on edge devices?",
        options: [
          { id: "a", text: "Network latency", value: 2 },
          { id: "b", text: "Power consumption and memory", value: 5 },
          { id: "c", text: "Software licensing", value: 0 },
          { id: "d", text: "User interface design", value: 0 }
        ]
      },
      {
        id: "tech_4",
        section: "technical",
        subsection: "optimization",
        type: "multiple-choice",
        title: "Which technique is used to reduce model size for edge deployment?",
        options: [
          { id: "a", text: "Quantization", value: 5 },
          { id: "b", text: "Data augmentation", value: 1 },
          { id: "c", text: "Feature scaling", value: 1 },
          { id: "d", text: "Cross-validation", value: 0 }
        ]
      },
      {
        id: "tech_5",
        section: "technical",
        subsection: "math",
        type: "multiple-choice",
        title: "Which mathematical concept is fundamental for understanding neural network operations on edge devices?",
        options: [
          { id: "a", text: "Calculus derivatives", value: 3 },
          { id: "b", text: "Matrix multiplication", value: 5 },
          { id: "c", text: "Set theory", value: 1 },
          { id: "d", text: "Graph theory", value: 2 }
        ]
      }
    ],
    aptitude: [
      {
        id: "apt_1",
        section: "aptitude",
        subsection: "logical",
        type: "multiple-choice",
        title: "If a neural network has 3 input layers, 2 hidden layers with 8 neurons each, and 1 output layer with 2 neurons, how many total neurons are in the network?",
        options: [
          { id: "a", text: "21", value: 5 },
          { id: "b", text: "19", value: 0 },
          { id: "c", text: "23", value: 0 },
          { id: "d", text: "25", value: 0 }
        ]
      },
      {
        id: "apt_2",
        section: "aptitude",
        subsection: "pattern",
        type: "multiple-choice",
        title: "In the sequence: 2, 6, 14, 30, 62, what is the next number?",
        subtitle: "Look for the mathematical pattern",
        options: [
          { id: "a", text: "126", value: 5 },
          { id: "b", text: "124", value: 0 },
          { id: "c", text: "128", value: 0 },
          { id: "d", text: "130", value: 0 }
        ]
      },
      {
        id: "apt_3",
        section: "aptitude",
        subsection: "numerical",
        type: "multiple-choice",
        title: "A model processes 1000 images per second on a desktop GPU. On an edge device, it processes 15% as fast. How many images per second on the edge device?",
        options: [
          { id: "a", text: "150", value: 5 },
          { id: "b", text: "850", value: 0 },
          { id: "c", text: "100", value: 0 },
          { id: "d", text: "200", value: 0 }
        ]
      }
    ],
    wiscar: [
      {
        id: "wiscar_will_1",
        section: "wiscar",
        subsection: "will",
        type: "scenario",
        title: "You've been working on an edge AI project for 6 months. The model accuracy is still below target, and deployment keeps failing. Your manager suggests switching to a cloud-based solution. How do you respond?",
        construct: "will",
        options: [
          { id: "a", text: "Agree immediately - cloud solutions are easier", value: 1 },
          { id: "b", text: "Reluctantly agree but feel disappointed", value: 2 },
          { id: "c", text: "Ask for more time to solve the edge deployment", value: 4 },
          { id: "d", text: "Passionately advocate for solving the edge challenges", value: 5 }
        ]
      },
      {
        id: "wiscar_skill_1",
        section: "wiscar",
        subsection: "skill",
        type: "likert",
        title: "I can debug hardware-software integration issues in embedded systems.",
        construct: "skill",
        options: [
          { id: "1", text: "I have no experience with embedded systems", value: 1 },
          { id: "2", text: "I have basic theoretical knowledge", value: 2 },
          { id: "3", text: "I can handle simple debugging tasks", value: 3 },
          { id: "4", text: "I'm proficient at hardware-software debugging", value: 4 },
          { id: "5", text: "I excel at complex embedded system debugging", value: 5 }
        ]
      },
      {
        id: "wiscar_cognitive_1",
        section: "wiscar",
        subsection: "cognitive",
        type: "scenario",
        title: "You need to optimize a neural network to run 10x faster on a device with 1/4 the memory. Multiple approaches are possible: model pruning, quantization, knowledge distillation, or architectural changes. How do you approach this?",
        construct: "cognitive",
        options: [
          { id: "a", text: "Try the first approach that comes to mind", value: 1 },
          { id: "b", text: "Research online for the best single method", value: 2 },
          { id: "c", text: "Systematically test each approach individually", value: 4 },
          { id: "d", text: "Analyze tradeoffs and combine multiple methods strategically", value: 5 }
        ]
      },
      {
        id: "wiscar_learning_1",
        section: "wiscar",
        subsection: "learning",
        type: "likert",
        title: "When I don't understand a technical concept, I actively seek multiple sources and perspectives until I master it.",
        construct: "learning_ability",
        options: [
          { id: "1", text: "I usually give up if the first explanation doesn't work", value: 1 },
          { id: "2", text: "I try a few sources but give up if still confused", value: 2 },
          { id: "3", text: "I persist until I understand the basics", value: 3 },
          { id: "4", text: "I seek multiple perspectives and practice until fluent", value: 4 },
          { id: "5", text: "I obsessively master concepts from multiple angles", value: 5 }
        ]
      },
      {
        id: "wiscar_realworld_1",
        section: "wiscar",
        subsection: "realworld",
        type: "scenario",
        title: "An Edge AI Developer typically spends their day: optimizing model performance, debugging hardware issues, collaborating with hardware teams, and staying current with new edge AI frameworks. Which aspect excites you most?",
        construct: "real_world_alignment",
        options: [
          { id: "a", text: "None of these sound appealing", value: 1 },
          { id: "b", text: "One aspect sounds interesting", value: 2 },
          { id: "c", text: "A few aspects sound engaging", value: 3 },
          { id: "d", text: "Most aspects sound exciting", value: 4 },
          { id: "e", text: "All aspects sound like my ideal day", value: 5 }
        ]
      }
    ]
  }
};

export const calculateSectionScore = (answers: Record<string, { value: number }>, sectionQuestions: Question[]) => {
  const sectionAnswers = sectionQuestions.filter(q => answers[q.id]);
  if (sectionAnswers.length === 0) return 0;
  
  const totalScore = sectionAnswers.reduce((sum, question) => {
    return sum + answers[question.id].value;
  }, 0);
  
  const maxPossibleScore = sectionAnswers.length * 5;
  return Math.round((totalScore / maxPossibleScore) * 100);
};

export const calculateWISCARScores = (answers: Record<string, { value: number }>) => {
  const wiscarQuestions = edgeAIAssessment.sections.wiscar;
  
  const dimensions = {
    will: wiscarQuestions.filter(q => q.subsection === "will"),
    interest: [], // Will be calculated from psychometric section
    skill: wiscarQuestions.filter(q => q.subsection === "skill"),
    cognitive: wiscarQuestions.filter(q => q.subsection === "cognitive"),
    ability: wiscarQuestions.filter(q => q.subsection === "learning"),
    realworld: wiscarQuestions.filter(q => q.subsection === "realworld")
  };
  
  return {
    will: calculateSectionScore(answers, dimensions.will),
    interest: calculateSectionScore(answers, edgeAIAssessment.sections.psychometric.filter(q => q.construct === "interest")),
    skill: calculateSectionScore(answers, dimensions.skill),
    cognitive: calculateSectionScore(answers, dimensions.cognitive),
    ability: calculateSectionScore(answers, dimensions.ability),
    realworld: calculateSectionScore(answers, dimensions.realworld)
  };
};