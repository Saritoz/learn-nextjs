import { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'GET') {
    return res.status(404).json({ name: 'method not supported' })
  }
  res.status(200).json({ name: 'Get List Of Product' })
}
