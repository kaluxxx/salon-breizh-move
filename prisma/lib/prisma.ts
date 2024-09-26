import { PrismaClient } from '@prisma/client';

const globalWithPrisma = global as typeof globalThis & {
    prisma: PrismaClient;
};

const prisma: PrismaClient = globalWithPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
    globalWithPrisma.prisma = prisma;
}

export default prisma;