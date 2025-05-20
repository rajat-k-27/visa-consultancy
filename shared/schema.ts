import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User schema
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

// Contact form submission schema
export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactSchema = createInsertSchema(contactSubmissions).pick({
  name: true,
  email: true,
  subject: true,
  message: true,
});

// Consultation form submission schema
export const consultationSubmissions = pgTable("consultation_submissions", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  studyDestination: text("study_destination"),
  programLevel: text("program_level"),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertConsultationSchema = createInsertSchema(consultationSubmissions).pick({
  firstName: true,
  lastName: true,
  email: true,
  phone: true,
  studyDestination: true,
  programLevel: true,
  message: true,
});

// Eligibility check schema
export const eligibilityChecks = pgTable("eligibility_checks", {
  id: serial("id").primaryKey(),
  programType: text("program_type").notNull(),
  academicScore: integer("academic_score").notNull(),
  ieltsScore: text("ielts_score").notNull(),
  isEligible: boolean("is_eligible").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertEligibilityCheckSchema = createInsertSchema(eligibilityChecks).pick({
  programType: true,
  academicScore: true,
  ieltsScore: true,
  isEligible: true,
});

// Type exports
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertContact = z.infer<typeof insertContactSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

export type InsertConsultation = z.infer<typeof insertConsultationSchema>;
export type ConsultationSubmission = typeof consultationSubmissions.$inferSelect;

export type InsertEligibilityCheck = z.infer<typeof insertEligibilityCheckSchema>;
export type EligibilityCheck = typeof eligibilityChecks.$inferSelect;
