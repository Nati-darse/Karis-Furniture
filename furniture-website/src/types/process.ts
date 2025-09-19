export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  imageAlt: string;
  duration?: string;
  highlights?: string[];
}

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Initial Consultation",
    description: "We begin with a detailed conversation to understand your vision, space requirements, and personal style. This helps us create furniture that perfectly fits your needs and aesthetic.",
    icon: "💬",
    image: "/images/process-consultation.jpg",
    imageAlt: "Designer discussing plans with clients at a workshop",
    duration: "1-2 hours",
    highlights: ["Free initial meeting", "Space assessment", "Style discussion", "Budget planning"]
  },
  {
    id: 2,
    title: "Design & Quotation",
    description: "Our designers create detailed sketches and 3D renderings of your custom piece. You'll receive a comprehensive quote with transparent pricing and material options.",
    icon: "📐",
    image: "/images/process-design.jpg",
    imageAlt: "Hand sketching furniture designs with precision tools",
    duration: "3-5 days",
    highlights: ["Custom sketches", "3D renderings", "Material samples", "Fixed-price quote"]
  },
  {
    id: 3,
    title: "Material Selection",
    description: "Choose from our curated selection of sustainable hardwoods and premium materials. We guide you through grain patterns, finishes, and hardware options.",
    icon: "🌳",
    image: "/images/process-materials.jpg",
    imageAlt: "Beautiful wood grains and material samples arranged neatly",
    duration: "2-3 days",
    highlights: ["Sustainably sourced wood", "Finish samples", "Hardware options", "Quality assurance"]
  },
  {
    id: 4,
    title: "Craftsmanship",
    description: "Our master craftsmen bring your design to life using traditional joinery techniques and modern precision tools. Each piece is meticulously handcrafted with attention to detail.",
    icon: "🔨",
    image: "/images/process-craftsmanship.jpg",
    imageAlt: "Artisan woodworker crafting furniture in workshop",
    duration: "4-8 weeks",
    highlights: ["Traditional joinery", "Hand-finishing", "Quality control", "Regular updates"]
  },
  {
    id: 5,
    title: "Finishing & Quality Check",
    description: "Your piece receives its final finishes through hand-sanding and application of protective coatings. We conduct rigorous quality checks to ensure perfection.",
    icon: "✨",
    image: "/images/process-finishing.jpg",
    imageAlt: "Craftsman applying final finish to wood surface",
    duration: "1-2 weeks",
    highlights: ["Hand-applied finishes", "Multi-stage sanding", "Quality inspection", "Photography"]
  },
  {
    id: 6,
    title: "Delivery & Installation",
    description: "We carefully deliver and install your furniture, ensuring it's perfectly placed and adjusted. Your satisfaction is guaranteed with our white-glove service.",
    icon: "🚚",
    image: "/images/process-delivery.jpg",
    imageAlt: "Professional delivery team installing custom furniture",
    duration: "1 day",
    highlights: ["White-glove delivery", "Professional installation", "Final adjustments", "Satisfaction guarantee"]
  }
];