import axios from 'axios'

export class PostService {
  static async getPost() {
    const response = await axios.get('http://localhost:3000/posts/generate')
    return response.data.text
  }

  static async sharePost(content: string) {
    const response = await axios.post('http://localhost:3000/posts/share', { content })
    return response
  }
}
