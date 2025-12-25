export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  expertise: string[];
  yearsExperience: number;
}

export interface CoreValue {
  title: string;
  description: string;
  icon: string;
}

export const coreValues: CoreValue[] = [
  {
    title: "Sustainability First",
    description: "We source wood from responsibly managed forests and use eco-friendly finishes, ensuring our craft honors the environment for future generations.",
    icon: "🌱"
  },
  {
    title: "Traditional Techniques",
    description: "Mastering time-honored joinery methods that have stood the test of time, creating furniture that lasts for decades, not just years.",
    icon: "⚒️"
  },
  {
    title: "Bespoke Excellence",
    description: "Every piece is custom-made to perfection, reflecting your unique style and meeting your specific functional needs.",
    icon: "✨"
  },
  {
    title: "Transparent Process",
    description: "From selection of raw materials to final installation, we maintain open communication and involve you in every step of the journey.",
    icon: "🔍"
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Aman Bushie",
    role: "Founder & Master Craftsman",
    bio: "With over 20 years of woodworking experience, Aman founded Karis Furniture to blend traditional craftsmanship with contemporary design. His passion for sustainable woodworking began in his grandfather's workshop and evolved into a lifelong dedication to creating heirloom-quality pieces.",
    image: "/images/int1.jpg",
    expertise: ["Traditional Joinery", "Sustainable Design", "Custom Furniture", "Wood Restoration"],
    yearsExperience: 20
  },
  {
    id: "2",
    name: "Sarah Yonas",
    role: "Lead Designer",
    bio: "Sarah brings a keen eye for modern aesthetics and functional design. With a background in architecture and interior design, she ensures every piece not only looks beautiful but fits perfectly in its intended space.",
    image: "/images/int2.jpg",
    expertise: ["Space Planning", "Modern Design", "Material Selection", "3D Rendering"],
    yearsExperience: 12
  },
  {
    id: "3",
    name: "kebede Debru",
    role: "Senior Artisan",
    bio: "Marcus specializes in intricate wood carving and finishing techniques passed down through generations. His attention to detail transforms raw wood into works of art that tell a story.",
    image: "/images/int3.jpg",
    expertise: ["Hand Carving", "French Polish", "Inlay Work", "Surface Finishing"],
    yearsExperience: 15
  }
];