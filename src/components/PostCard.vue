<template>
  <div class="card m-3 w-100">
    <img class="card-img-top cover-img" :src="post.creator.coverImg || 'https://placehold.it/200x200'" alt="Card image cap">
    <div class="card-body">
      <img class="w-100" :src="post.imgUrl" alt="">
      <p class="card-text">
        {{ post.body }}
      </p>
      <button v-if="user.isAuthenticated" class="btn btn-success" @click="addLike(post.id)">
        Do you like this?
      </button>
      <p>Likes: {{ post.likes.length }}</p>
      <p> {{ formatTimeStamp(post.createdAt) }}</p>
    </div>
    <router-link router-link :to="{ name: 'Profile', params: {id: post.creatorId } }" @click.stop="" class="creator m-5 align-self-end">
      <img class="h-100 rounded-pill" :src="post.creator.picture" alt="" srcset="">
      <p><em>{{ post.creator.name }}</em></p>
    </router-link>
    <div class="align-self-end m-3" v-if="account.id === post.creatorId && user.isAuthenticated">
      <button class="btn btn-danger" @click.stop="destroy">
        Delete
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { postsService } from '../services/PostsService'
import Pop from '../utils/Notifier'
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      account: computed(() => AppState.account),
      user: computed(() => AppState.user),
      async destroy() {
        try {
          if (await Pop.confirm()) {
            await postsService.destroy(props.post.id)
            Pop.toast('Delorted', 'success')
          }
        } catch (error) {
          Pop.toast(error, 'error')
        }
      },
      formatTimeStamp(timeStamp) {
        const date = new Date(timeStamp)
        let hours = date.getHours()
        let minutes = date.getMinutes()

        hours = (hours > 12) ? hours - 12 : hours

        hours = ('0' + hours).slice(-2)
        minutes = ('0' + minutes).slice(-2)

        const time = hours + '  :  ' + minutes
        return `${date.getMonth()} / ${date.getDate()} / ${date.getFullYear()} | ${time}`
      },

      async addLike(id) {
        await postsService.addLike(id)
      }
    }
  }
}

</script>

<style lang="scss" scoped>
.cover-img {
  height: 100px;
  object-fit: cover;
}
a {
  color: inherit;
  text-decoration: inherit;
}
.creator{
  height: 3em;
}
</style>
