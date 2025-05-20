import { motion } from 'framer-motion';
import EligibilityCalculator from '@/components/forms/EligibilityCalculator';
import { Card, CardContent } from '@/components/ui/card';
import { Helmet } from 'react-helmet';
import { Check } from 'lucide-react';

const Eligibility = () => {
  return (
    <>
      <Helmet>
        <title>Visa Eligibility Check | GlobalVisa Consultancy</title>
        <meta name="description" content="Check your eligibility for international student visas with our interactive calculator. Get instant results based on your academic background and language proficiency." />
        <meta property="og:title" content="Visa Eligibility Check | GlobalVisa Consultancy" />
        <meta property="og:description" content="Use our free eligibility calculator to determine your chances of getting a student visa for your desired study destination." />
      </Helmet>
      
      <section id="eligibility" className="py-20 bg-light relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-secondary rounded-full opacity-10 animate-float" style={{ animationDelay: "2s" }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 font-poppins">Check Your <span className="text-primary">Eligibility</span></h2>
            <p className="text-dark max-w-3xl mx-auto">See if you qualify for your desired study program with our quick eligibility checker.</p>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <EligibilityCalculator />
          </motion.div>
          
          {/* How It Works Section */}
          <motion.div 
            className="mt-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4 font-poppins">How Our Eligibility Check <span className="text-primary">Works</span></h3>
              <p className="text-dark max-w-3xl mx-auto">Our eligibility calculator uses real admission criteria from top universities worldwide to provide accurate assessments.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg overflow-hidden">
                <div className="h-48 bg-secondary relative">
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="w-28 h-28 rounded-full bg-primary rotate-3d relative">
                      <div className="absolute inset-0 w-full h-full rounded-full bg-primary/70 animate-pulse-glow"></div>
                      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-secondary/30 rounded-full"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-secondary font-bold">
                        Program
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-secondary mb-3">1. Select Your Program</h4>
                  <p className="text-dark">Choose between Bachelor's and Master's programs to get started with the eligibility assessment process.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-lg overflow-hidden">
                <div className="h-48 bg-primary relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="h-24 w-24 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-secondary mb-3">2. Enter Academic Details</h4>
                  <p className="text-dark">Provide your academic scores and English language proficiency test results for accurate assessment.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-lg overflow-hidden">
                <div className="h-48 bg-accent relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="h-24 w-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-secondary mb-3">3. Get Instant Results</h4>
                  <p className="text-dark">Receive immediate feedback on your eligibility status with personalized recommendations for next steps.</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
          
          {/* Additional Information */}
          <motion.div 
            className="mt-24 bg-white p-8 rounded-2xl shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold text-secondary mb-6 font-poppins">Understanding Eligibility Criteria</h3>
                <p className="text-dark mb-6">
                  Eligibility requirements for international students vary by country, university, and program level. Key factors typically include:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-primary p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary">Academic Performance</h4>
                      <p className="text-dark text-sm">Your grades from previous education determine which programs you qualify for.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary">English Proficiency</h4>
                      <p className="text-dark text-sm">Most programs require proof of English language ability through tests like IELTS or TOEFL.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary">Program-Specific Requirements</h4>
                      <p className="text-dark text-sm">Some programs may have additional requirements like portfolios, interviews, or field experience.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold text-secondary mb-6 font-poppins">Improving Your Eligibility</h3>
                <p className="text-dark mb-6">
                  If our calculator indicates that you don't currently meet the eligibility criteria, consider these improvement strategies:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-light p-4 rounded-lg">
                    <h4 className="font-bold text-secondary mb-2">Enhance Language Skills</h4>
                    <p className="text-dark text-sm">Take preparation courses to improve your IELTS or TOEFL score.</p>
                  </div>
                  <div className="bg-light p-4 rounded-lg">
                    <h4 className="font-bold text-secondary mb-2">Foundation Programs</h4>
                    <p className="text-dark text-sm">Consider pathway or foundation courses that lead to your desired degree.</p>
                  </div>
                  <div className="bg-light p-4 rounded-lg">
                    <h4 className="font-bold text-secondary mb-2">Alternative Institutions</h4>
                    <p className="text-dark text-sm">Explore universities with more flexible entry requirements.</p>
                  </div>
                  <div className="bg-light p-4 rounded-lg">
                    <h4 className="font-bold text-secondary mb-2">Professional Experience</h4>
                    <p className="text-dark text-sm">Gain relevant work experience to strengthen your application.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Eligibility;
