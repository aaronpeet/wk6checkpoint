<template>
  <main>
    <div class="row">
      <div class="col-3">
        <div class="row">
          <div class="col-12">
            <Login />
          </div>
        </div>
      </div>
      <div class="col-9">
        <div class="row">
          <div class="col-12 p-0">
            <Navbar />
          </div>
        </div>
        <div class="row">
          <div class="col-9">
            <router-view />
          </div>
          <div class="col-3">
            <Ads />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
