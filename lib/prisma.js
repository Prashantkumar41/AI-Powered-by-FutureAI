// import { PrismaClient } from "@prisma/client";
// import { PrismaClient } from "@prisma/client";

// export const db = globalThis.prisma || new PrismaClient();

// if (process.env.NODE_ENV !== "production") {
//   globalThis.prisma = db;
// }

// globalThis.prisma: This global variable ensures that the Prisma client instance is
// reused across hot reloads during development. Without this, each time your application
// reloads, a new instance of the Prisma client would be created, potentially leading
// to connection issues.





// **************** PRASHANT ***************

import { PrismaClient } from '@prisma/client';

// Reuse Prisma client during development for efficient memory use
const prisma = globalThis.prisma || new PrismaClient();

// Assign to globalThis in development mode to reuse the same instance across hot reloads
if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = prisma;
}

export const db = prisma;
