import { PrismaClient } from "./generated"; // Imports from our custom folder path location

// Singleton initialization rule to protect connection pool thresholds
export const prisma = new PrismaClient({
  log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
});

export * from "./generated";
