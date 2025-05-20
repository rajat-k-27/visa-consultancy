import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { submitToGoogleForms } from '@/lib/utils/form-submission';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  subject: z.string().min(3, { message: 'Subject must be at least 3 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' })
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Submit to backend API
      await apiRequest('POST', '/api/contact', data);
      
      // Submit to Google Forms in parallel
      await submitToGoogleForms(data, 'contact');
      
      toast({
        title: 'Message sent successfully!',
        description: 'We will get back to you soon.',
        variant: 'default',
      });
      
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: 'Error sending message',
        description: 'Please try again later or contact us directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-dark font-medium">Name*</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    placeholder="Enter your name" 
                    className="p-4 bg-light rounded-xl focus:outline-none focus:ring-2 focus:ring-primary input-focus"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-dark font-medium">Email*</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    placeholder="Enter your email" 
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
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-dark font-medium">Subject*</FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  placeholder="Enter subject" 
                  className="p-4 bg-light rounded-xl focus:outline-none focus:ring-2 focus:ring-primary input-focus"
                />
              </FormControl>
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
                  placeholder="Enter your message" 
                  className="p-4 bg-light rounded-xl focus:outline-none focus:ring-2 focus:ring-primary input-focus min-h-[160px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className="px-8 py-4 bg-primary text-secondary font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
