<template>
  <div class="card m-3" style="width: 18rem;">
    <img class="card-img-top" :src="post.creator.coverImg" alt="Card image cap">
    <div class="card-body">
      <p class="card-text">
        {{ post.body }}
      </p>
    </div>
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
  height: 200px;
  width: 250px;
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
