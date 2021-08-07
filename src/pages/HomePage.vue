<template>
  <div class="home flex-grow-1 align-items-center justify-content-center">
    <div>
      <button class="btn btn-primary m-2" v-if="posts.newer" @click="getNewPage(posts.newer)">
        Previous
      </button>
      <button class="btn btn-primary m-2" v-if="posts.older" @click="getNewPage(posts.older)">
        Next
      </button>
    </div>
    <PostThread :posts="posts" />
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { postsService } from '../services/PostsService'
export default {
  name: 'Home',
  setup() {
    onMounted(async() => {
      try {
        await postsService.getAll()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })

    return {
      posts: computed(() => AppState.posts),

      async getNewPage(url) {
        await postsService.getNewPage(url)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
