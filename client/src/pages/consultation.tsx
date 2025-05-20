import { motion } from 'framer-motion';
import ConsultationForm from '@/components/forms/ConsultationForm';
import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { Helmet } from 'react-helmet';

const Consultation = () => {
  return (
    <>
      <Helmet>
        <title>Free Consultation | GlobalVisa Consultancy</title>
        <meta name="description" content="Get a free personalized consultation for your international education plans with GlobalVisa's expert advisors. We provide comprehensive guidance on university selection, visa processing, and more." />
        <meta property="og:title" content="Free Consultation | GlobalVisa Consultancy" />
        <meta property="og:description" content="Schedule a free personalized consultation with our international education experts to discuss your study abroad plans." />
      </Helmet>
    
      <section id="consultation" className="py-20 bg-secondary relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-light to-transparent opacity-10"></div>
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary rounded-full opacity-20"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary rounded-full opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-poppins">Get Your <span className="text-primary">Free Consultation</span></h2>
            <p className="text-white text-opacity-80 max-w-3xl mx-auto">Schedule a personalized consultation with our experts to discuss your international education plans.</p>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-white p-8 rounded-2xl shadow-xl form-container">
                <h3 className="text-xl font-bold text-secondary mb-6">Fill in your details</h3>
                <ConsultationForm />
              </Card>
            </motion.div>
            
            <motion.div 
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="p-8 bg-white bg-opacity-10 backdrop-blur-md rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-white mb-6">Why Choose Our Consultation?</h3>
                
                <ul className="space-y-6">
                  <motion.li 
                    className="flex items-start"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    <div className="bg-primary p-2 rounded-full mr-4 shrink-0">
                      <Check className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Personalized Guidance</h4>
                      <p className="text-white text-opacity-80">Receive tailored advice based on your academic background and career goals.</p>
                    </div>
                  </motion.li>
                  
                  <motion.li 
                    className="flex items-start"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                  >
                    <div className="bg-primary p-2 rounded-full mr-4 shrink-0">
                      <Check className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Expert Consultants</h4>
                      <p className="text-white text-opacity-80">Our advisors have years of experience helping students secure admissions in top universities.</p>
                    </div>
                  </motion.li>
                  
                  <motion.li 
                    className="flex items-start"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                  >
                    <div className="bg-primary p-2 rounded-full mr-4 shrink-0">
                      <Check className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">University Connections</h4>
                      <p className="text-white text-opacity-80">We have direct relationships with hundreds of institutions worldwide.</p>
                    </div>
                  </motion.li>
                  
                  <motion.li 
                    className="flex items-start"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                  >
                    <div className="bg-primary p-2 rounded-full mr-4 shrink-0">
                      <Check className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">End-to-End Support</h4>
                      <p className="text-white text-opacity-80">From university selection to arrival in your destination country, we're with you every step.</p>
                    </div>
                  </motion.li>
                </ul>
              </Card>
              
              <Card className="flex items-center p-6 bg-white bg-opacity-10 backdrop-blur-md rounded-2xl">
                <div className="mr-6">
                  <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Need Immediate Assistance?</h4>
                  <p className="text-white text-opacity-80">Call us at <span className="text-primary font-bold">+1 (800) 555-1234</span></p>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4 font-poppins">What Students Say About <span className="text-primary">Our Consultations</span></h3>
            <p className="text-dark max-w-3xl mx-auto">Hear from students who have benefited from our personalized consultation services.</p>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-light p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex flex-col items-center mb-4">
                <div className="w-20 h-20 bg-secondary rounded-full overflow-hidden mb-4">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="Student" className="w-full h-full object-cover" />
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-secondary">Sophia Wang</h4>
                  <p className="text-sm text-accent">University of British Columbia</p>
                </div>
              </div>
              <p className="text-dark text-center italic">
                "The free consultation session changed my entire perspective on studying abroad. The advisor provided detailed information about programs that perfectly matched my interests."
              </p>
              <div className="flex justify-center mt-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-light p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex flex-col items-center mb-4">
                <div className="w-20 h-20 bg-secondary rounded-full overflow-hidden mb-4">
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="Student" className="w-full h-full object-cover" />
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-secondary">James Rodriguez</h4>
                  <p className="text-sm text-accent">University of Manchester</p>
                </div>
              </div>
              <p className="text-dark text-center italic">
                "I was unsure about which country to choose for my studies. The consultant helped me compare options and find the perfect fit for both my academic goals and budget."
              </p>
              <div className="flex justify-center mt-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-light p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex flex-col items-center mb-4">
                <div className="w-20 h-20 bg-secondary rounded-full overflow-hidden mb-4">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="Student" className="w-full h-full object-cover" />
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-secondary">Elena Petrova</h4>
                  <p className="text-sm text-accent">Technical University of Munich</p>
                </div>
              </div>
              <p className="text-dark text-center italic">
                "The scholarship guidance I received was exceptional. Thanks to my consultant's advice, I secured funding that made my international education dreams possible."
              </p>
              <div className="flex justify-center mt-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Consultation;
