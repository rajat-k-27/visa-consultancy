import type { Express } from "express";
import { createServer, type Server } from "http";
import { insertContactSchema, insertConsultationSchema, insertEligibilityCheckSchema } from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";
import mongoose from "mongoose";

// MongoDB connection
async function connectToMongoDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/consultancy_db', {
      dbName: 'consultancy_db'
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
}

// Mongoose Schemas
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const consultationSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  studyDestination: { type: String, required: true },
  programLevel: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Mongoose Models
const Contact = mongoose.model('Contact', contactSchema);
const Consultation = mongoose.model('Consultation', consultationSchema);

// Export the Storage class
export class Storage {
  async createContact(data: z.infer<typeof insertContactSchema>) {
    return await Contact.create(data);
  }

  async createConsultation(data: z.infer<typeof insertConsultationSchema>) {
    return await Consultation.create(data);
  }

  async createEligibilityCheck(data: z.infer<typeof insertEligibilityCheckSchema>) {
    return await Contact.create(data); // Assuming this uses Contact model as per original code
  }
}

// Export the storage instance
export const storage = new Storage();

export async function registerRoutes(app: Express): Promise<Server> {
  // Connect to MongoDB before setting up routes
  await connectToMongoDB();

  // API routes for form submissions
  const apiRouter = app.route('/api');

  // Contact form submission
  app.post('/api/contact', async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.status(201).json({ success: true, data: contact });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedError = fromZodError(error);
        res.status(400).json({ success: false, error: formattedError.message });
      } else {
        console.error('Contact form error:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
      }
    }
  });

  // Consultation form submission
  app.post('/api/consultation', async (req, res) => {
    try {
      const validatedData = insertConsultationSchema.parse(req.body);
      const consultation = await storage.createConsultation(validatedData);
      res.status(201).json({ success: true, data: consultation });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedError = fromZodError(error);
        res.status(400).json({ success: false, error: formattedError.message });
      } else {
        console.error('Consultation form error:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
      }
    }
  });

  // Eligibility check submission
  app.post('/api/eligibility', async (req, res) => {
    try {
      const validatedData = insertEligibilityCheckSchema.parse(req.body);
      const eligibilityCheck = await storage.createEligibilityCheck(validatedData);
      res.status(201).json({ success: true, data: eligibilityCheck });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedError = fromZodError(error);
        res.status(400).json({ success: false, error: formattedError.message });
      } else {
        console.error('Eligibility check error:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}