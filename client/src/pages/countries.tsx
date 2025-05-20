import { motion } from 'framer-motion';
import { CountryCard } from '@/components/ui/country-card';

const countriesData = [
  {
    name: 'United Kingdom',
    imageSrc: 'https://pixabay.com/get/g12ce8cb4eab7b49ad56f52bd2f4d9d9fa1cb3fbae970c82f875fc1ccdd9502c001ba6463b44d1652ff1140e097d33e1cb0e77a810336fabd0a68b7141de1ffb5_1280.jpg',
    description: 'Home to some of the world\'s oldest and most prestigious universities with a rich academic tradition.',
    features: ['Top Universities', 'Post-Study Work', 'Rich Culture']
  },
  {
    name: 'Canada',
    imageSrc: 'https://images.unsplash.com/photo-1560813962-ff3d8fcf59ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500',
    description: 'Known for its high quality of education, safety, and excellent immigration pathways for international students.',
    features: ['Immigration Options', 'Affordable', 'Work While Studying']
  },
  {
    name: 'Australia',
    imageSrc: 'https://pixabay.com/get/g91465ca72e44fac2a1d54efd4c951351b853d47a9e6f9bd73f6ea15a811bf85e3018b75c14150182f29b71c4c66e8c24f9e92160c73c1587689595fead54d420_1280.jpg',
    description: 'Offers world-class education with innovative research opportunities in a diverse and vibrant environment.',
    features: ['Quality Education', 'Beautiful Campuses', 'Work Rights']
  },
  {
    name: 'United States',
    imageSrc: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500',
    description: 'Home to many of the world\'s top-ranked universities with cutting-edge research and diverse program options.',
    features: ['Prestigious Schools', 'Research Opportunities']
  },
  {
    name: 'Germany',
    imageSrc: 'https://pixabay.com/get/gf1c15ccd4ccb15c9a9313489e4033a018f94b752048b95a6a0404c3e13d52327480347cdbefe8572ae852682ac697e5711aef2bdc5ef6e0ab8b6cb27d5491807_1280.jpg',
    description: 'Offers tuition-free education at public universities with strong focus on engineering and technical fields.',
    features: ['No/Low Tuition', 'Engineering Excellence', 'EU Access']
  },
  {
    name: 'Italy',
    imageSrc: 'https://pixabay.com/get/g9624a8e24f1ac49895fffe0c335cad30b4f19b93e57b300393bb49ef639b55deca65fbd26f069d2c575cb9e1d42900bce09e62fbf8da531f69ea186d7402abe3_1280.jpg',
    description: 'Known for its practical learning approach, stunning landscapes, and welcoming atmosphere for international students.',
    features: ['Practical Education', 'Work Rights', 'Safe Environment']
  }
];

const Countries = () => {
  return (
    <section id="countries" className="py-20 bg-light relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-white to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 font-poppins">Study Destinations</h2>
          <p className="text-dark max-w-3xl mx-auto">Explore top education destinations around the world and find the perfect match for your academic and career goals.</p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {countriesData.map((country, index) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <CountryCard
                name={country.name}
                imageSrc={country.imageSrc}
                description={country.description}
                features={country.features}
              />
            </motion.div>
          ))}
        </motion.div>
        
        {/* FAQ Section */}
        <div className="mt-24">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4 font-poppins">Frequently Asked Questions</h3>
            <p className="text-dark max-w-3xl mx-auto">Get answers to common questions about studying in different countries.</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-secondary mb-3">How do I choose the right country for my studies?</h4>
              <p className="text-dark">Consider factors like your field of study, budget, language requirements, post-graduation work opportunities, and lifestyle preferences. Our consultants can help you weigh these factors based on your personal goals.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-secondary mb-3">What are the typical visa requirements?</h4>
              <p className="text-dark">While specific requirements vary by country, most student visas require proof of acceptance to a recognized institution, sufficient funds, health insurance, and language proficiency. Some may also require a visa interview.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-secondary mb-3">Can I work while studying abroad?</h4>
              <p className="text-dark">Many countries allow international students to work part-time during term and full-time during breaks. The exact number of allowed hours varies by country, ranging from 10 to 20 hours per week during term time.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-secondary mb-3">What is the cost of studying abroad?</h4>
              <p className="text-dark">Costs vary widely depending on the country, city, and institution. Generally, annual tuition can range from $10,000 to $50,000 USD, with living expenses adding another $8,000 to $20,000 per year.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Countries;
