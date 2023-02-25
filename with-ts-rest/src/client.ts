import { initClient } from '@ts-rest/core'
import { contract } from './contract'

const client = initClient(contract, {
  baseUrl: 'http://localhost:3000',
  baseHeaders: {},
})

const run = async () => {
  const response = await client.createPost({
    body: {
      title: 'Post Title',
      body: 'Post Body',
    },
  })

  if (response.status === 201) {
    // body is Post
    console.log(response.body)
  } else {
    // body is unknown
    console.log(response.body)
  }
}

run()
