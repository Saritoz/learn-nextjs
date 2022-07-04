import { NextApiRequest, NextApiResponse } from 'next'
import httpProxy from 'http-proxy'

const proxy = httpProxy.createProxyServer()

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  //dont send cookies to api server
  req.headers.cookie = ''

  proxy.web(req, res, {
    target: 'https://js-post-api.herokuapp.com',
    changeOrigin: true,
    selfHandleResponse: false,
  })

  //   res.status(200).json({ name: 'SomeThing Else' })
}
