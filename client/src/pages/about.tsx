import { motion } from 'framer-motion';
import { TeamCard } from '@/components/ui/team-card';
import { Check } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 font-poppins">About <span className="text-primary">GlobalVisa</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1576267423048-15c0040fec78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800" 
                   alt="GlobalVisa consultancy office with staff helping students" 
                   className="rounded-lg shadow-xl object-cover w-full h-auto" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-lg"></div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-secondary mb-6 font-poppins">Your Trusted Partner in International Education</h3>
            <p className="text-dark mb-6">
              With over 10 years of experience, GlobalVisa has been helping students achieve their dreams of studying abroad. We provide comprehensive support from university selection to visa approval and beyond.
            </p>
            <p className="text-dark mb-8">
              Our team of experts has first-hand knowledge of immigration policies and education systems around the world. We pride ourselves on staying updated with the latest changes to ensure your application process is smooth and successful.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-primary p-2 rounded-full mr-4">
                  <Check className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Certified Counselors</h4>
                  <p className="text-sm text-dark">All our advisors are certified and trained.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary p-2 rounded-full mr-4">
                  <Check className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">24/7 Support</h4>
                  <p className="text-sm text-dark">We're always available to assist you.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary p-2 rounded-full mr-4">
                  <Check className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">University Partnerships</h4>
                  <p className="text-sm text-dark">Direct connections with top institutions.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary p-2 rounded-full mr-4">
                  <Check className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">End-to-End Service</h4>
                  <p className="text-sm text-dark">Complete guidance from start to finish.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div 
            className="bg-light p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-secondary mb-4 font-poppins">Our Vision</h3>
            <div className="w-12 h-1 bg-primary mb-6"></div>
            <p className="text-dark">
              To be the world's leading visa consultancy, empowering students to access quality global education, and creating a worldwide network of global citizens who contribute positively to society.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-light p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-secondary mb-4 font-poppins">Our Mission</h3>
            <div className="w-12 h-1 bg-primary mb-6"></div>
            <p className="text-dark">
              To provide exceptional visa and educational consultancy services that help students navigate international education systems with confidence, ensuring their academic and career success through personalized guidance and support.
            </p>
          </motion.div>
        </div>
        
        {/* Team Section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4 font-poppins">Meet Our Expert Team</h3>
            <p className="text-dark max-w-3xl mx-auto">Our diverse team of consultants brings extensive experience and specialized knowledge to help you navigate your international education journey.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamCard 
              name="Sarah Johnson"
              position="Senior Visa Consultant"
              description="Specialist in UK and European education systems with 8+ years of experience."
              imageSrc="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            />
            
            <TeamCard 
              name="Michael Chen"
              position="North America Specialist"
              description="Former international student advisor with extensive knowledge of US and Canadian universities."
              imageSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            />
            
            <TeamCard 
              name="Priya Sharma"
              position="Australia & NZ Expert"
              description="Specialized in Pacific region education with strong connections to top universities."
              imageSrc="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
