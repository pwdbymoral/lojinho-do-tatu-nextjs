import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/libs/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const { productId } = req.query;
    if (productId == null) {
      throw new Error('No product ID provided.');
    }
    const parsedProductID = parseInt(productId as string, 10);
    if (isNaN(parsedProductID)) {
      throw new Error(
        'Invalid product ID format. Please provide a valid number.'
      );
    }
    const product = await prisma.product.findUnique({
      where: { id: parsedProductID },
    });
    if (product == null) {
      throw new Error('Unable to find product with the provided ID.');
    }
    res.status(200).json(product);
  } catch (error: unknown) {
    console.error(error);
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res
        .status(500)
        .json({ message: 'Internal Server Error. Please try again later.' });
    }
  }
}
