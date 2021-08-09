<template>
  <div class="home flex-grow-1 align-items-center justify-content-center">
    <div class="card p-3 shadow" v-if="user.isAuthenticated">
      <form @submit.prevent="createPost">
        <div class="form-group">
          <label class="pr-2" for="body">Post Here!</label>
          <input type="text"
                 id="body"
                 class="form-control"
                 required
                 placeholder="Share whats happening..."
                 v-model="state.newPost.body"
          >
        </div>
        <div class="form-group">
          <input type="text"
                 id="imgUrl"
                 class="form-control"
                 placeholder="Image Url..."
                 v-model="state.newPost.imgUrl"
          >
        </div>
        <div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
    <div>
      <button class="btn btn-primary m-2" v-if="posts.newer" @click="getNewPage(posts.newer)">
        Previous
      </button>
      <button class="btn btn-primary m-2" v-if="posts.older" @click="getNewPage(posts.older)">
        Next
      </button>
    </div>
    <div>
      <PostThread :posts="posts" />
    </div>
    <div>
      <button class="btn btn-primary m-2" v-if="posts.newer" @click="getNewPage(posts.newer)">
        Previous
      </button>
      <button class="btn btn-primary m-2" v-if="posts.older" @click="getNewPage(posts.older)">
        Next
      </button>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { postsService } from '../services/PostsService'
export default {
  name: 'Home',

  setup() {
    const state = reactive({
      newPost: {}
    })
    onMounted(async() => {
      try {
        await postsService.getAll()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })

    return {
      state,
      posts: computed(() => AppState.posts),
      user: computed(() => AppState.user),
      async getNewPage(url) {
        await postsService.getNewPage(url)
      },
      async createPost() {
        await postsService.createPost(state.newPost)
        state.newPost = {}
        // form.reset() NOTE: how to reset my form once its been submittd
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
