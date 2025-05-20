import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  studyDestination: string;
  programLevel: string;
  message: string;
}

const ConsultationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      studyDestination: '',
      programLevel: '',
      message: '',
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: 'Success!',
          description: 'Your consultation request has been submitted.',
          variant: 'default',
        });
        form.reset();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit the form');
      }
    } catch (error: any) {
      console.error('Form submission error:', error);
      toast({
        title: 'Error',
        description: error.message || 'There was a problem submitting your form.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const countries = [
    { value: 'USA', label: 'United States' },
    { value: 'UK', label: 'United Kingdom' },
    { value: 'Canada', label: 'Canada' },
    { value: 'Australia', label: 'Australia' },
    { value: 'New Zealand', label: 'New Zealand' },
    { value: 'Germany', label: 'Germany' },
    { value: 'Other', label: 'Other' },
  ];

  const programLevels = [
    { value: 'Bachelors', label: "Bachelor's Degree" },
    { value: 'Masters', label: "Master's Degree" },
    { value: 'PhD', label: 'PhD' },
    { value: 'Diploma', label: 'Diploma/Certificate' },
    { value: 'Foundation', label: 'Foundation Year' },
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-dark font-medium">First Name*</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    placeholder="Enter your first name" 
                    className="p-4 bg-light rounded-xl focus:outline-none focus:ring-2 focus:ring-primary input-focus"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-dark font-medium">Last Name*</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    placeholder="Enter your last name" 
                    className="p-4 bg-light rounded-xl fokus:outline-none focus:ring-2 focus:ring-primary input-focus"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-dark font-medium">Email Address*</FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  type="email"
                  placeholder="Enter your email address" 
                  className="p-4 bg-light rounded-xl focus:outline-none focus:ring-2 focus:ring-primary input-focus"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-dark font-medium">Phone Number*</FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  type="tel"
                  placeholder="Enter your phone number" 
                  className="p-4 bg-light rounded-xl focus:outline-none focus:ring-2 focus:ring-primary input-focus"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="studyDestination"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-dark font-medium">Preferred Study Destination*</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value || ''}>
                <FormControl>
                  <SelectTrigger className="p-4 bg-light rounded-xl focus:outline-none focus:ring-2 focus:ring-primary input-focus">
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country.value} value={country.value}>
                      {country.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="programLevel"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-dark font-medium">Program Level*</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value || ''}>
                <FormControl>
                  <SelectTrigger className="p-4 bg-light rounded-xl focus:outline-none focus:ring-2 focus:ring-primary input-focus">
                    <SelectValue placeholder="Select a program level" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {programLevels.map((program) => (
                    <SelectItem key={program.value} value={program.value}>
                      {program.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-dark font-medium">Message*</FormLabel>
              <FormControl>
                <Textarea 
                  {...field} 
                  placeholder="Tell us about your education background and goals" 
                  className="p-4 bg-light rounded-xl focus:outline-none focus:ring-2 focus:ring-primary input-focus min-h-[120px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className="w-full px-8 py-4 bg-primary text-secondary font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Request'}
        </Button>
        
        <p className="text-sm text-dark text-center">
          By submitting this form, you agree to our <a href="#" className="text-secondary underline">Privacy Policy</a> and <a href="#" className="text-secondary underline">Terms of Service</a>.
        </p>
      </form>
    </Form>
  );
};

export default ConsultationForm;