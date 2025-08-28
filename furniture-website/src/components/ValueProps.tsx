'use client';

import { motion } from 'framer-motion';

const values = [
  {
    icon: '✨', // Or use an SVG icon library like Lucide React later
    title: 'Heirloom Quality',
    description: 'Built with traditional joinery and the finest materials, each piece is designed to last for generations, not years.',
  },
  {
    icon: '🌳',
    title: 'Sustainably Sourced',
    description: 'We partner with local sawmills and use responsibly harvested wood, ensuring our craft honors the environment.',
  },
  {
    icon: '🔧',
    title: 'Fully Customizable',
    description: 'Your vision, realized. From initial sketch to final finish, we work with you to create a one-of-a-kind piece for your space.',
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      y: { type: "spring", stiffness: 100 },
    }
  })
};

export default function ValueProps() {
  return (
    <section className="py-32 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#431407]">The Karis <span className="text-orange-600">Difference</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {values.map((value, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              whileHover={{ y: -10 }} // Float up on hover
              className="bg-[#fff7ed] p-8 rounded-2xl shadow-lg text-center group hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-[#431407]">{value.title}</h3>
              <p className="text-lg text-[#78350f]">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}