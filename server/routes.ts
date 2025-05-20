import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertConsultationSchema, insertEligibilityCheckSchema } from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for form submissions
  const apiRouter = app.route('/api');

  // Contact form submission
  app.post('/api/contact', async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.status(201).json({ success: true, data: submission });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedError = fromZodError(error);
        res.status(400).json({ success: false, error: formattedError.message });
      } else {
        res.status(500).json({ success: false, error: 'Internal server error' });
      }
    }
  });

  // Consultation form submission
  app.post('/api/consultation', async (req, res) => {
    try {
      const validatedData = insertConsultationSchema.parse(req.body);
      const submission = await storage.createConsultationSubmission(validatedData);
      res.status(201).json({ success: true, data: submission });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedError = fromZodError(error);
        res.status(400).json({ success: false, error: formattedError.message });
      } else {
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
        res.status(500).json({ success: false, error: 'Internal server error' });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
