import { useState } from 'react';
import { Check, Info, AlertTriangle, School, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { apiRequest } from '@/lib/queryClient';
import { Link } from 'wouter';
import { useEligibility } from '@/hooks/use-eligibility';

interface EligibilityCalculatorProps {
  className?: string;
}

const ieltsScoresBachelors = ['5.5', '6.0', '6.5', '7.0', '7.5', '8.0'];
const ieltsScoresMasters = ['6.0', '6.5', '7.0', '7.5', '8.0'];

const EligibilityCalculator: React.FC<EligibilityCalculatorProps> = ({ className = "" }) => {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  
  // Step 2 form data
  const [academicScore, setAcademicScore] = useState<string>('');
  const [ieltsScore, setIeltsScore] = useState<string>('');
  
  const { checkEligibility, eligibilityResult, resetEligibility } = useEligibility();

  // Navigation functions
  const goToStep2 = () => {
    if (selectedProgram) {
      setCurrentStep(2);
    }
  };

  const goToStep1 = () => {
    setCurrentStep(1);
  };

  const handleProgramSelect = (program: string) => {
    setSelectedProgram(program);
  };

  const handleCheckEligibility = () => {
    if (academicScore && ieltsScore) {
      checkEligibility({
        programType: selectedProgram!,
        academicScore: Number(academicScore),
        ieltsScore
      });
      setCurrentStep(3);
      
      // Log eligibility check to API (fire and forget)
      apiRequest('POST', '/api/eligibility', {
        programType: selectedProgram,
        academicScore: Number(academicScore),
        ieltsScore,
        isEligible: eligibilityResult?.status !== 'not-eligible'
      }).catch(console.error);
    }
  };

  const handleStartOver = () => {
    setSelectedProgram(null);
    setAcademicScore('');
    setIeltsScore('');
    resetEligibility();
    setCurrentStep(1);
  };

  return (
    <div className={`max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 form-container ${className}`}>
      <div className="mb-8">
        <div className="flex justify-between items-center relative mb-8">
          <div className={`w-10 h-10 ${currentStep >= 1 ? 'bg-primary text-secondary' : 'bg-light text-secondary'} rounded-full flex items-center justify-center font-bold z-10`}>1</div>
          <div className={`w-10 h-10 ${currentStep >= 2 ? 'bg-primary text-secondary' : 'bg-light text-secondary'} rounded-full flex items-center justify-center font-bold z-10`}>2</div>
          <div className={`w-10 h-10 ${currentStep >= 3 ? 'bg-primary text-secondary' : 'bg-light text-secondary'} rounded-full flex items-center justify-center font-bold z-10`}>3</div>
          <div className="absolute top-1/2 left-0 w-full h-1 bg-light -translate-y-1/2"></div>
          <div 
            className={`absolute top-1/2 left-0 h-1 bg-primary -translate-y-1/2 transition-all duration-300 ease-in-out`}
            style={{ width: currentStep === 1 ? '16.666%' : currentStep === 2 ? '50%' : '100%' }}
          ></div>
        </div>
      </div>
      
      {/* Step 1: Program Selection */}
      {currentStep === 1 && (
        <div className="animate-in fade-in duration-300">
          <h3 className="text-xl font-bold text-secondary mb-6">Select Your Desired Program Level</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <button 
              className={`bg-light hover:bg-primary hover:text-secondary p-6 rounded-xl text-left transition-all ${selectedProgram === 'bachelors' ? 'bg-primary text-secondary' : ''}`}
              onClick={() => handleProgramSelect('bachelors')}
            >
              <div className="flex items-center mb-3">
                <School className="h-6 w-6 mr-3 text-primary" />
                <h4 className="font-bold text-secondary">Bachelor's Degree</h4>
              </div>
              <p className="text-dark text-sm">Undergraduate programs typically lasting 3-4 years</p>
            </button>
            
            <button 
              className={`bg-light hover:bg-primary hover:text-secondary p-6 rounded-xl text-left transition-all ${selectedProgram === 'masters' ? 'bg-primary text-secondary' : ''}`}
              onClick={() => handleProgramSelect('masters')}
            >
              <div className="flex items-center mb-3">
                <Award className="h-6 w-6 mr-3 text-primary" />
                <h4 className="font-bold text-secondary">Master's Degree</h4>
              </div>
              <p className="text-dark text-sm">Graduate programs typically lasting 1-2 years</p>
            </button>
          </div>
          
          <div className="flex justify-end">
            <Button 
              onClick={goToStep2}
              className="px-8 py-3 bg-primary text-secondary font-bold rounded-full hover:bg-primary/90 transition-all"
              disabled={!selectedProgram}
            >
              Continue
            </Button>
          </div>
        </div>
      )}
      
      {/* Step 2: Academic Details */}
      {currentStep === 2 && (
        <div className="animate-in fade-in duration-300">
          <h3 className="text-xl font-bold text-secondary mb-6">Enter Your Academic Details</h3>
          
          {selectedProgram === 'bachelors' && (
            <div className="space-y-6">
              <div>
                <Label className="text-dark mb-2 font-medium">Class 12 Percentage</Label>
                <div className="relative">
                  <Input 
                    type="number" 
                    placeholder="Enter your percentage (e.g. 75)" 
                    min="0" 
                    max="100" 
                    className="p-4 bg-light rounded-xl focus:outline-none focus:ring-2 focus:ring-primary input-focus"
                    value={academicScore}
                    onChange={(e) => setAcademicScore(e.target.value)}
                  />
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-primary font-bold">%</span>
                </div>
              </div>
              
              <div>
                <Label className="text-dark mb-2 font-medium">IELTS Score</Label>
                <Select onValueChange={setIeltsScore} value={ieltsScore}>
                  <SelectTrigger className="p-4 bg-light rounded-xl focus:outline-none focus:ring-2 focus:ring-primary input-focus">
                    <SelectValue placeholder="Select your IELTS band score" />
                  </SelectTrigger>
                  <SelectContent>
                    {ieltsScoresBachelors.map((score) => (
                      <SelectItem key={score} value={score}>
                        {score}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          
          {selectedProgram === 'masters' && (
            <div className="space-y-6">
              <div>
                <Label className="text-dark mb-2 font-medium">Bachelor's Degree Percentage</Label>
                <div className="relative">
                  <Input 
                    type="number" 
                    placeholder="Enter your percentage (e.g. 75)" 
                    min="0" 
                    max="100" 
                    className="p-4 bg-light rounded-xl focus:outline-none focus:ring-2 focus:ring-primary input-focus"
                    value={academicScore}
                    onChange={(e) => setAcademicScore(e.target.value)}
                  />
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-primary font-bold">%</span>
                </div>
              </div>
              
              <div>
                <Label className="text-dark mb-2 font-medium">IELTS Score</Label>
                <Select onValueChange={setIeltsScore} value={ieltsScore}>
                  <SelectTrigger className="p-4 bg-light rounded-xl focus:outline-none focus:ring-2 focus:ring-primary input-focus">
                    <SelectValue placeholder="Select your IELTS band score" />
                  </SelectTrigger>
                  <SelectContent>
                    {ieltsScoresMasters.map((score) => (
                      <SelectItem key={score} value={score}>
                        {score}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          
          <div className="flex justify-between mt-6">
            <Button 
              onClick={goToStep1}
              variant="outline" 
              className="px-8 py-3 bg-white border-2 border-secondary text-secondary font-bold rounded-full hover:bg-secondary hover:text-white transition-all"
            >
              Back
            </Button>
            <Button 
              onClick={handleCheckEligibility}
              className="px-8 py-3 bg-primary text-secondary font-bold rounded-full hover:bg-primary/90 transition-all"
              disabled={!academicScore || !ieltsScore}
            >
              Check Eligibility
            </Button>
          </div>
        </div>
      )}
      
      {/* Step 3: Results */}
      {currentStep === 3 && (
        <div className="animate-in fade-in duration-300">
          {eligibilityResult?.status === 'eligible' && (
            <div>
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-[#4CAF50] text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-2">You Are Eligible!</h3>
                <p className="text-dark">Based on your information, you meet the basic eligibility criteria for your chosen program.</p>
              </div>
              
              <Card className="bg-light p-6 rounded-xl mb-8">
                <h4 className="font-bold text-secondary mb-4">Recommended Countries:</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {['Canada', 'Australia', 'UK', 'Germany', 'New Zealand'].map((country) => (
                    <div key={country} className="flex items-center p-3 bg-white rounded-lg">
                      <span className="mr-2">🏳️</span>
                      <span>{country}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}
          
          {eligibilityResult?.status === 'conditional' && (
            <div>
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-[#2196F3] text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <Info className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-2">Conditionally Eligible</h3>
                <p className="text-dark">You may be eligible for some programs with certain conditions or pathways.</p>
              </div>
              
              <Card className="bg-light p-6 rounded-xl mb-8">
                <h4 className="font-bold text-secondary mb-4">Recommendations:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#2196F3] mr-2">→</span>
                    <span>Consider foundation or pathway programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2196F3] mr-2">→</span>
                    <span>Improve your IELTS score to 6.5 or higher</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2196F3] mr-2">→</span>
                    <span>Look into countries with more flexible entry requirements</span>
                  </li>
                </ul>
              </Card>
            </div>
          )}
          
          {eligibilityResult?.status === 'not-eligible' && (
            <div>
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-[#F44336] text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <AlertTriangle className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-2">Not Currently Eligible</h3>
                <p className="text-dark">Based on your information, you don't meet the basic eligibility criteria for your chosen program.</p>
              </div>
              
              <Card className="bg-light p-6 rounded-xl mb-8">
                <h4 className="font-bold text-secondary mb-4">What Next?</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#F44336] mr-2">→</span>
                    <span>Improve your academic scores or take additional qualifications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F44336] mr-2">→</span>
                    <span>Work on your English language proficiency</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F44336] mr-2">→</span>
                    <span>Consider alternative education pathways</span>
                  </li>
                </ul>
              </Card>
            </div>
          )}
          
          <div className="flex justify-between">
            <Button 
              onClick={handleStartOver}
              variant="outline" 
              className="px-8 py-3 bg-white border-2 border-secondary text-secondary font-bold rounded-full hover:bg-secondary hover:text-white transition-all"
            >
              Start Over
            </Button>
            <Link href="/consultation">
              <Button 
                className="px-8 py-3 bg-primary text-secondary font-bold rounded-full hover:bg-primary/90 transition-all"
              >
                Get Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default EligibilityCalculator;
