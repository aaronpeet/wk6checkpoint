import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { convertToQuery } from '../utils/Query'
import { api } from './AxiosService'

class PostsService {
  async getAll(query = {}) {
    const res = await api.get('/api/posts' + convertToQuery(query))
    AppState.posts = res.data
    logger.log('Appstate posts:', AppState.posts)
  }

  async getAllAds() {
    const res = await api.get('/api/ads')
    AppState.ads = res.data
    logger.log('From Appstate:', AppState.ads)
  }

  async getNewPage(url) {
    const res = await api.get(url)
    AppState.posts = res.data
    logger.log('Appstate posts:', AppState.posts)
  }
}

export const postsService = new PostsService()
