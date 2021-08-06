<template>
  <main>
    <div class="row">
      <div class="col-3">
        <div class="row">
          <div class="col-12">
            Profile header
          </div>
          <div class="col-12">
            profile main
          </div>
        </div>
      </div>
      <div class="col-9">
        <div class="row">
          <div class="col-12">
            <Navbar />
          </div>
        </div>
        <div class="row">
          <div class="col-9">
            <router-view />
          </div>
          <div class="col-3">
            my ads
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer>
    <div class="bg-dark text-light text-center p-4">
      Made with 💖 by Aaron Peet
    </div>
  </footer>
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
