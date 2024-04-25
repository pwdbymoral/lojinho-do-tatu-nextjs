import type { NextApiRequest, NextApiResponse } from 'next';
import products from '../../../../data/products.json';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): void {
  const { productId } = req.query as { productId: string };
  const product = products.find((p) => p.id === parseInt(productId));
  if (product != null) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: 'Não foi possível encontrar o produto.' });
  }
}
