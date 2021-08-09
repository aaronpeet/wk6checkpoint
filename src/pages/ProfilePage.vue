<template>
  <div class="card m-3 w-100">
    <img class="card-img-top cover-img" :src="user.imgUrl" alt="Card image cap">
    <div class="card-body">
      <p class="card-text">
        Name: {{ user.name }}
      </p>
      <p>Bio: {{ user.bio }}</p>
      <p>email: {{ user.email }}</p>
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
    const router = useRoute()
    onMounted(async() => {
      try {
        await postsService.getAll({ creatorId: router.params.id })
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      posts: computed(() => AppState.posts),
      user: computed(() => AppState.userProfile),

      async getAll(id) {
        await profileService.getAll(id)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
