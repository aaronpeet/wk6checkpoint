<template>
  <div class="row">
    <PostCard v-for="p in posts.posts" :key="p.id" :post="p" />
  </div>
</template>

<script>
export default {
  name: 'Thread',
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>
