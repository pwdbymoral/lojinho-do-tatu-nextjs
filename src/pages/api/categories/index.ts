import prisma from '@/libs/db';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const categories = await prisma.category.findMany();
    return res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    const errorMessage =
      error instanceof Error
        ? error.message
        : 'Internal Server Error. Please try again later.';
    return res.status(500).json({ message: errorMessage });
  }
};

export default handler;
