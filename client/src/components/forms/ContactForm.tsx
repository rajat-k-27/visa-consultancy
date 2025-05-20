import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: 'Message sent!',
          description: 'We will contact you shortly.',
          variant: 'default',
        });
        form.reset();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit the form');
      }
    } catch (error: any) {
      console.error('Error submitting form:', error);
      toast({
        title: 'Error submitting message',
        description: error.message || 'Please try again later or contact us directly.',
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
                    type="email"
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