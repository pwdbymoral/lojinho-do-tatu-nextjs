// Next.js API route handler for fetching products data
import products from '../../../data/products.json'; // Import products data from JSON file
import type { NextApiRequest, NextApiResponse } from 'next';
import type { Product } from '@/models/product.interface';

type Products = Product[];
const productsData: Products = products;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): void {
  try {
    // Set response status code to 200 (OK)
    res.status(200);

    // Send products data as JSON response
    res.json(productsData);
  } catch (error) {
    console.log('An error occurred while fetching products data', error);
  }
}
