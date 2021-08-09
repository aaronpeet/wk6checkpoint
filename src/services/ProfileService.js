import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class ProfileService {
  async getAll(id) {
    const res = await api.get('/api/profiles/' + id)
    AppState.user = res.data
    logger.log('from appstate', AppState.user)
  }
}

export const profileService = new ProfileService()
