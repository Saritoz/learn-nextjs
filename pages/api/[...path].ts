import { NextApiRequest, NextApiResponse } from 'next'
import httpProxy from 'http-proxy'

const proxy = httpProxy.createProxyServer()

export const config = {
  api: {
    bodyParser: false
  },
}

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  //dont send cookies to api server
    req.headers.cookie = ''
    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: false,

    })
  // res.status(200).json({ name: 'SomeThing with other path...' })
}