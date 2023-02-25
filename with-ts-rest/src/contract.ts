import { initContract } from '@ts-rest/core'
import { z } from 'zod'

const contractInstance = initContract()

const PostSchema = z.object({
  id: z.string(),
  title: z.string(),
  body: z.string(),
})

export type Post = z.infer<typeof PostSchema>

export const contract = contractInstance.router({
  createPost: {
    method: 'POST',
    path: '/posts',
    responses: {
      201: PostSchema,
    },
    body: z.object({
      title: z.string(),
      body: z.string(),
    }),
    summary: 'Create a post',
  },
  getPost: {
    method: 'GET',
    path: `/posts/:id`,
    responses: {
      200: PostSchema.nullable(),
    },
    summary: 'Get a post by id',
  },
})
