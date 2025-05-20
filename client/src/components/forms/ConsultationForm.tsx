import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { submitToGoogleForms } from '@/lib/utils/form-submission';

const formSchema = z.object({
  firstName: z.string().min(2, { message: 'First name must be at least 2 characters' }),
  lastName: z.string().min(2, { message: 'Last name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(7, { message: 'Please enter a valid phone number' }),
  studyDestination: z.string().optional(),
  programLevel: z.string().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const ConsultationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
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
      // Submit to backend API
      await apiRequest('POST', '/api/consultation', data);
      
      // Submit to Google Forms in parallel
      await submitToGoogleForms(data, 'consultation');
      
      toast({
        title: 'Consultation request submitted!',
        description: 'We will contact you shortly.',
        variant: 'default',
      });
      
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: 'Error submitting request',
        description: 'Please try again later or contact us directly.',
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
    { value: 'Bachelors', label: 'Bachelor\'s Degree' },
    { value: 'Masters', label: 'Master\'s Degree' },
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
                    className="p-4 bg-light rounded-xl focus:outline-none focus:ring-2 focus:ring-primary input-focus"
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
              <FormLabel className="text-dark font-medium">Preferred Study Destination</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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
              <FormLabel className="text-dark font-medium">Program Level</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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
              <FormLabel className="text-dark font-medium">Message (Optional)</FormLabel>
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
