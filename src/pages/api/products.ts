// Next.js API route handler for fetching products data
import products from '../../../data/products.json'; // Import products data from JSON file
import { NextApiRequest, NextApiResponse } from 'next';
import { Product } from '@/models/product.interface';

type Products = Product[];
const productsData: Products = products;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Set response status code to 200 (OK)
    res.status(200);

    // Send products data as JSON response
    res.json(productsData);
  } catch (error) {
    console.log('An error occurred while fetching products data', error);
  }
}
