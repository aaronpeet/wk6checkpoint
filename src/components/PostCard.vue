<template>
  <div class="card m-3 w-100">
    <img class="card-img-top cover-img" :src="post.creator.coverImg" alt="Card image cap">
    <div class="card-body">
      <p class="card-text">
        {{ post.body }}
      </p>
    </div>
    <router-link router-link :to="{ name: 'Profile', params: {id: post.creatorId } }" @click.stop="" class="creator p-3 align-self-end">
      <img class="h-100 rounded-pill" :src="post.creator.picture" alt="" srcset="">
      <p><em>{{ post.creator.name }}</em></p>
    </router-link>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      account: computed(() => AppState.account)

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
