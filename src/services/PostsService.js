import { AppState } from '../AppState'
import { convertToQuery } from '../utils/Query'
import { api } from './AxiosService'

class PostsService {
  async getAll(query = {}) {
    const res = await api.get('/api/posts' + convertToQuery(query))
    AppState.posts = res.data
  }

  async getAllAds() {
    const res = await api.get('/api/ads')
    AppState.ads = res.data
  }

  async getNewPage(url) {
    const res = await api.get(url)
    AppState.posts = res.data
  }

  async createPost(newPost) {
    const res = await api.post('/api/posts', newPost)
    await this.getAll()
  }

  async destroy(id) {
    await api.delete('api/posts/' + id)
    await this.getAll()
  }

  async addLike(id) {
    const res = await api.post('api/posts/' + id + '/like')
    await this.getAll()
  }
}

export const postsService = new PostsService()
