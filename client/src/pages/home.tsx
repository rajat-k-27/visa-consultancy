import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { StatsCard } from '@/components/ui/stats-card';
import Globe from '@/components/3d/Globe';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary rounded-full opacity-30 animate-float"></div>
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-accent rounded-full opacity-20 animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-secondary rounded-full opacity-10 animate-float" style={{ animationDelay: "1s" }}></div>
        
        <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div 
              className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 font-poppins">
                Begin Your <span className="text-primary">Global</span> Education Journey
              </h1>
              <p className="text-lg md:text-xl text-dark mb-10 max-w-xl mx-auto lg:mx-0">
                Expert visa consultation and support to help you achieve your international education dreams with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/consultation">
                  <Button className="px-8 py-6 bg-primary text-secondary font-bold rounded-full hover:bg-primary/90 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
                    Get Free Consultation
                  </Button>
                </Link>
                <Link href="/eligibility">
                  <Button variant="outline" className="px-8 py-6 bg-white text-secondary border-2 border-secondary font-bold rounded-full hover:bg-secondary hover:text-white transition-all">
                    Check Eligibility
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Globe size="lg" />
            </motion.div>
          </div>
          
          {/* Stats Section */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, staggerChildren: 0.1 }}
          >
            <StatsCard value="98%" label="Visa Success Rate" />
            <StatsCard value="15+" label="Countries Covered" />
            <StatsCard value="500+" label="Partner Universities" />
            <StatsCard value="10K+" label="Happy Students" />
          </motion.div>
        </div>
      </section>
      
      {/* Featured Countries */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 font-poppins">Popular <span className="text-primary">Destinations</span></h2>
            <p className="text-dark max-w-3xl mx-auto">Explore the most sought-after education destinations for international students.</p>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Countries will be displayed here - showing only 3 for the homepage */}
            <motion.div 
              className="bg-white rounded-xl shadow-xl overflow-hidden card-hover"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src="https://pixabay.com/get/g12ce8cb4eab7b49ad56f52bd2f4d9d9fa1cb3fbae970c82f875fc1ccdd9502c001ba6463b44d1652ff1140e097d33e1cb0e77a810336fabd0a68b7141de1ffb5_1280.jpg" 
                  alt="University campus in United Kingdom" 
                  className="w-full h-52 object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-secondary">United Kingdom</h3>
                  <div className="bg-primary h-8 w-12 rounded"></div>
                </div>
                <p className="text-dark mb-4">Home to some of the world's oldest and most prestigious universities with a rich academic tradition.</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-light text-secondary text-sm rounded-full">Top Universities</span>
                  <span className="px-3 py-1 bg-light text-secondary text-sm rounded-full">Post-Study Work</span>
                </div>
                <Link href="/countries">
                  <Button variant="default" className="rounded-full bg-secondary hover:bg-secondary/90 text-white">
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-xl overflow-hidden card-hover"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src="https://images.unsplash.com/photo-1560813962-ff3d8fcf59ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="University campus in Canada with students" 
                  className="w-full h-52 object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-secondary">Canada</h3>
                  <div className="bg-primary h-8 w-12 rounded"></div>
                </div>
                <p className="text-dark mb-4">Known for its high quality of education, safety, and excellent immigration pathways for students.</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-light text-secondary text-sm rounded-full">Immigration Options</span>
                  <span className="px-3 py-1 bg-light text-secondary text-sm rounded-full">Affordable</span>
                </div>
                <Link href="/countries">
                  <Button variant="default" className="rounded-full bg-secondary hover:bg-secondary/90 text-white">
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-xl overflow-hidden card-hover"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src="https://pixabay.com/get/g91465ca72e44fac2a1d54efd4c951351b853d47a9e6f9bd73f6ea15a811bf85e3018b75c14150182f29b71c4c66e8c24f9e92160c73c1587689595fead54d420_1280.jpg" 
                  alt="Modern university campus in Australia" 
                  className="w-full h-52 object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-secondary">Australia</h3>
                  <div className="bg-primary h-8 w-12 rounded"></div>
                </div>
                <p className="text-dark mb-4">Offers world-class education with innovative research opportunities in a diverse environment.</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-light text-secondary text-sm rounded-full">Quality Education</span>
                  <span className="px-3 py-1 bg-light text-secondary text-sm rounded-full">Work Rights</span>
                </div>
                <Link href="/countries">
                  <Button variant="default" className="rounded-full bg-secondary hover:bg-secondary/90 text-white">
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/countries">
              <Button className="inline-flex items-center px-8 py-3 bg-primary text-secondary font-bold rounded-full hover:bg-primary/90 transition-all">
                View All Countries
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </section>
            
      {/* CTA Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-2/3 mb-8 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">
                Ready to Start Your <span className="text-primary">Global Education</span> Journey?
              </h2>
              <p className="text-white text-opacity-90 max-w-2xl">
                Our expert consultants are here to guide you through every step of the process. Get personalized advice tailored to your academic goals and preferences.
              </p>
            </div>
            <div>
              <Link href="/consultation">
                <Button className="px-8 py-4 bg-primary text-secondary font-bold rounded-full hover:bg-primary/90 shadow-lg transition-all text-lg">
                  Book a Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
