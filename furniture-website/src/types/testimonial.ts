// src/types/testimonial.ts
export interface Testimonial {
  id: string;
  clientName: string;
  project: string;
  rating: number;
  comment: string;
  image: string;
  imageAlt: string;
  location: string;
  date: string;
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    clientName: "Sarah & Michael Johnson",
    project: "Custom Walnut Dining Table",
    rating: 5,
    comment: "We couldn't be happier with our dining table! The craftsmanship is exceptional, and it's become the centerpiece of our home. James listened to our vision and delivered beyond our expectations. The attention to detail is remarkable.",
    image: "/images/testimonial-dining.jpg",
    imageAlt: "Beautiful walnut dining table in a modern home setting",
    location: "Seattle, WA",
    date: "January 2024",
    featured: true
  },
  {
    id: "2",
    clientName: "David Chen",
    project: "Mid-Century Lounge Chair Set",
    rating: 5,
    comment: "The chairs are even more stunning in person. The comfort and quality are unmatched. Karis Furniture transformed our living room into a space we absolutely love coming home to. The entire process was smooth and professional.",
    image: "/images/testimonial-chairs.jpg",
    imageAlt: "Set of mid-century lounge chairs in a sunny living room",
    location: "Portland, OR",
    date: "March 2024",
    featured: true
  },
  {
    id: "3",
    clientName: "Emily Rodriguez",
    project: "Custom Bookshelf Unit",
    rating: 5,
    comment: "This bookshelf is a work of art! It fits perfectly in our space and holds all our books with elegance. The team was wonderful to work with—patient, creative, and incredibly skilled. Worth every penny for heirloom quality.",
    image: "/images/int8.jpg",
    imageAlt: "Custom built bookshelf filled with books and decor",
    location: "San Francisco, CA",
    date: "December 2023",
    featured: true
  },
  {
    id: "4",
    clientName: "The Williams Family",
    project: "Outdoor Teak Bench & Table",
    rating: 5,
    comment: "Our outdoor setup has received so many compliments! The teak has weathered beautifully and the construction is rock solid. Perfect for family gatherings and enjoying our garden.",
    image: "/images/out1.jpg",
    imageAlt: "Teak outdoor furniture in a beautiful garden setting",
    location: "Austin, TX",
    date: "November 2023"
  },
  {
    id: "5",
    clientName: "Jennifer Kim",
    project: "Bedroom Set Restoration",
    rating: 5,
    comment: "They restored my grandmother's bedroom set to better than original condition. The care and respect they showed for this family heirloom was touching. Now it will last for another generation.",
    image: "/images/int9.jpg",
    imageAlt: "Restored vintage bedroom set in a cozy room",
    location: "Boston, MA",
    date: "February 2024"
  },
  {
    id: "6",
    clientName: "Robert & Lisa Thompson",
    project: "Home Office Furniture",
    rating: 5,
    comment: "Working from home has never been more enjoyable. The desk and shelving are both functional and beautiful. The team understood exactly what we needed for our space and workflow.",
    image: "/images/int1.jpg",
    imageAlt: "Custom home office setup with desk and shelving",
    location: "Denver, CO",
    date: "October 2023"
  }
];