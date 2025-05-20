import { useState } from 'react';

// Eligibility status types
type EligibilityStatus = 'eligible' | 'conditional' | 'not-eligible';

// Input parameters for eligibility check
interface EligibilityParams {
  programType: string;
  academicScore: number;
  ieltsScore: string;
}

// Eligibility result type
interface EligibilityResult {
  status: EligibilityStatus;
  message?: string;
  recommendations?: string[];
}

export function useEligibility() {
  const [eligibilityResult, setEligibilityResult] = useState<EligibilityResult | null>(null);

  // Function to check eligibility based on parameters
  const checkEligibility = ({ programType, academicScore, ieltsScore }: EligibilityParams) => {
    let status: EligibilityStatus;
    
    if (programType === 'bachelors') {
      // Bachelor's degree eligibility rules
      if (academicScore >= 70 && parseFloat(ieltsScore) >= 6.5) {
        status = 'eligible';
      } else if ((academicScore >= 60 && parseFloat(ieltsScore) >= 6.0) || 
                 (academicScore >= 70 && parseFloat(ieltsScore) >= 6.0) || 
                 (academicScore >= 60 && parseFloat(ieltsScore) >= 6.5)) {
        status = 'conditional';
      } else {
        status = 'not-eligible';
      }
    } else {
      // Master's degree eligibility rules
      if (academicScore >= 65 && parseFloat(ieltsScore) >= 6.5) {
        status = 'eligible';
      } else if ((academicScore >= 60 && parseFloat(ieltsScore) >= 6.0) || 
                 (academicScore >= 65 && parseFloat(ieltsScore) >= 6.0) || 
                 (academicScore >= 60 && parseFloat(ieltsScore) >= 6.5)) {
        status = 'conditional';
      } else {
        status = 'not-eligible';
      }
    }
    
    setEligibilityResult({ status });
    return status;
  };

  // Reset eligibility result
  const resetEligibility = () => {
    setEligibilityResult(null);
  };

  return {
    eligibilityResult,
    checkEligibility,
    resetEligibility,
  };
}
