import { createExpressEndpoints, initServer } from '@ts-rest/express'
import express from 'express'
import { contract, Post } from './contract'

const port = process.env.port || 3000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const contractServer = initServer()

const router = contractServer.router(contract, {
  getPost: async ({ params: { id } }) => {
    const post: Post = {
      id,
      title: 'dummy_title',
      body: 'dummy_body',
    }
    return {
      status: 200,
      body: post,
    }
  },
  createPost: async ({ body }) => {
    const post: Post = {
      id: 'dummy_id',
      title: body.title,
      body: body.body,
    }
    return {
      status: 201,
      body: post,
    }
  },
})

createExpressEndpoints(contract, router, app)

app.listen(port, () => {
  console.log(`Ready on http://localhost:${port}`)
})
