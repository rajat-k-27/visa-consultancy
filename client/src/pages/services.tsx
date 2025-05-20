import { motion } from 'framer-motion';
import { ServiceCard } from '@/components/ui/service-card';
import { School, FileText, CheckSquare, PlaneTakeoff, DollarSign, GraduationCap } from 'lucide-react';

const servicesData = [
  {
    icon: School,
    title: 'University Selection',
    description: 'Expert guidance on choosing the right university and program based on your academic background, career goals, and budget.',
    features: [
      'Personalized university suggestions',
      'Course comparisons and analysis',
      'Scholarship opportunities'
    ]
  },
  {
    icon: FileText,
    title: 'Application Assistance',
    description: 'Complete support with university applications, including document preparation, personal statements, and application submissions.',
    features: [
      'Application form completion',
      'Personal statement guidance',
      'Document verification'
    ]
  },
  {
    icon: CheckSquare,
    title: 'Visa Processing',
    description: 'Expert assistance with student visa applications, including documentation, interview preparation, and compliance guidance.',
    features: [
      'Visa application preparation',
      'Interview coaching',
      'Financial documentation assistance'
    ]
  },
  {
    icon: PlaneTakeoff,
    title: 'Pre-Departure Support',
    description: 'Comprehensive guidance before you leave, including accommodation arrangements, travel planning, and cultural preparation.',
    features: [
      'Accommodation assistance',
      'Travel arrangements',
      'Cultural orientation sessions'
    ]
  },
  {
    icon: DollarSign,
    title: 'Financial Planning',
    description: 'Guidance on tuition fees, living costs, scholarship applications, and financial documentation for visa purposes.',
    features: [
      'Budget planning assistance',
      'Scholarship application support',
      'Financial documentation guidance'
    ]
  },
  {
    icon: GraduationCap,
    title: 'Test Preparation',
    description: 'Coaching and resources for IELTS, TOEFL, GRE, GMAT, and other standardized tests required for international admissions.',
    features: [
      'Personalized coaching',
      'Practice test materials',
      'Score improvement strategies'
    ]
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 font-poppins">Our <span className="text-primary">Services</span></h2>
          <p className="text-dark max-w-3xl mx-auto">Comprehensive support throughout your international education journey, from university selection to arrival assistance.</p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Testimonials Section */}
        <div className="mt-24">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4 font-poppins">What Our <span className="text-primary">Students Say</span></h3>
            <p className="text-dark max-w-3xl mx-auto">Read about the experiences of students who have achieved their international education dreams with our help.</p>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="bg-light p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-secondary rounded-full overflow-hidden mr-4">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="Student" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary">Emma Rodriguez</h4>
                  <p className="text-sm text-accent">MSc Business Analytics, University of Toronto</p>
                </div>
              </div>
              <p className="text-dark italic">
                "GlobalVisa made my dream of studying in Canada come true. Their step-by-step guidance through the visa process was invaluable. I couldn't have done it without their expert support!"
              </p>
            </div>
            
            <div className="bg-light p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-secondary rounded-full overflow-hidden mr-4">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="Student" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary">Rajiv Patel</h4>
                  <p className="text-sm text-accent">Bachelor's in Engineering, University of Melbourne</p>
                </div>
              </div>
              <p className="text-dark italic">
                "From university selection to arrival in Australia, GlobalVisa provided exceptional service. Their IELTS preparation course helped me achieve a band score of 7.5, exceeding my requirements!"
              </p>
            </div>
            
            <div className="bg-light p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-secondary rounded-full overflow-hidden mr-4">
                  <img src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="Student" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary">Min-Ji Park</h4>
                  <p className="text-sm text-accent">PhD in Computer Science, Imperial College London</p>
                </div>
              </div>
              <p className="text-dark italic">
                "The scholarship assistance from GlobalVisa was a game-changer for me. They helped me secure funding that made my PhD studies in the UK possible. Highly recommend their services!"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
