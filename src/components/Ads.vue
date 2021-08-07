<template>
  <div v-for="(ad, index) in ads" :key="index">
    <img class="w-100 p-2 mt-5" :src="ad.tall" alt="">
  </div>
</template>

<script>

import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { postsService } from '../services/PostsService'
export default {
  name: 'Ads',
  setup() {
    onMounted(async() => {
      try {
        await postsService.getAllAds()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      ads: computed(() => AppState.ads)
    }
  }
}
</script>
