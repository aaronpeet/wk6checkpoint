<template>
  <div class="card m-3 w-100">
    <img class="card-img-top cover-img rounded-pill p-2" :src="activeProfile.picture" alt="Card image cap">
    <div class="card-body">
      <p class="card-text">
        Name: {{ activeProfile.name }}
      </p>
      <p>Bio: {{ activeProfile.bio }}</p>
      <p>email: {{ activeProfile.email }}</p>
    </div>
  </div>
  <div class="profile-page container-fluid">
    <PostThread :posts="posts" />
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { postsService } from '../services/PostsService'
import Pop from '../utils/Notifier'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import { profileService } from '../services/ProfileService'
export default {

  setup() {
    const route = useRoute()
    onMounted(async() => {
      try {
        await postsService.getAll({ creatorId: route.params.id })
        await profileService.getAll(route.params.id)
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      posts: computed(() => AppState.posts),
      user: computed(() => AppState.user),
      activeProfile: computed(() => AppState.activeProfile),

      async getAll(id) {
        await profileService.getAll(id)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
