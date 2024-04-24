import type { NextApiRequest, NextApiResponse } from 'next';
import products from '../../../../data/products.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { productId } = req.query;
  const product = products.find((p) => p.id === parseInt(productId));
  if (!product) {
    res.status(404).json({ message: 'Não foi possível encontrar o produto.' });
  } else {
    res.status(200).json(product);
  }
}
