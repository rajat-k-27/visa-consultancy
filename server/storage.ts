import { 
  users, type User, type InsertUser,
  type ContactSubmission, type InsertContact,
  type ConsultationSubmission, type InsertConsultation,
  type EligibilityCheck, type InsertEligibilityCheck
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Form submission methods
  createContactSubmission(data: InsertContact): Promise<ContactSubmission>;
  createConsultationSubmission(data: InsertConsultation): Promise<ConsultationSubmission>;
  createEligibilityCheck(data: InsertEligibilityCheck): Promise<EligibilityCheck>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private consultationSubmissions: Map<number, ConsultationSubmission>;
  private eligibilityChecks: Map<number, EligibilityCheck>;
  
  private userIdCounter: number;
  private contactIdCounter: number;
  private consultationIdCounter: number;
  private eligibilityIdCounter: number;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.consultationSubmissions = new Map();
    this.eligibilityChecks = new Map();
    
    this.userIdCounter = 1;
    this.contactIdCounter = 1;
    this.consultationIdCounter = 1;
    this.eligibilityIdCounter = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Contact form submission methods
  async createContactSubmission(data: InsertContact): Promise<ContactSubmission> {
    const id = this.contactIdCounter++;
    const createdAt = new Date();
    const submission: ContactSubmission = { ...data, id, createdAt };
    this.contactSubmissions.set(id, submission);
    return submission;
  }
  
  // Consultation form submission methods
  async createConsultationSubmission(data: InsertConsultation): Promise<ConsultationSubmission> {
    const id = this.consultationIdCounter++;
    const createdAt = new Date();
    const submission: ConsultationSubmission = { ...data, id, createdAt };
    this.consultationSubmissions.set(id, submission);
    return submission;
  }
  
  // Eligibility check methods
  async createEligibilityCheck(data: InsertEligibilityCheck): Promise<EligibilityCheck> {
    const id = this.eligibilityIdCounter++;
    const createdAt = new Date();
    const check: EligibilityCheck = { ...data, id, createdAt };
    this.eligibilityChecks.set(id, check);
    return check;
  }
}

export const storage = new MemStorage();
