<template>
  <div class="card ml-3 p-2 w-100 vh-100 shadow">
    <button
      class="btn btn-outline-primary text-uppercase"
      @click="login"
      v-if="!user.isAuthenticated"
    >
      Login
    </button>

    <div class="dropdown" v-else>
      <div
        class="dropdown-toggle"
        @click="state.dropOpen = !state.dropOpen"
      >
        <img
          :src="user.picture"
          alt="user photo"
          height="40"
          class="rounded"
        />
        <span class="mx-3">{{ user.name }}</span>
      </div>
      <div
        class="dropdown-menu p-0 list-group w-100"
        :class="{ show: state.dropOpen }"
        @click="state.dropOpen = false"
      >
        <router-link :to="{ name: 'Account' }">
          <div class="list-group-item list-group-item-action hoverable">
            Account
          </div>
        </router-link>
        <div
          class="list-group-item list-group-item-action hoverable"
          @click="logout"
        >
          logout
        </div>
      </div>
    </div>
    <div>
      <img class="text-center m-3 w-25 rounded-pill" :src="account.picture" alt="">
      <p><b>Name: {{ account.name }}</b></p>
      <!-- <p>Bio: {{ acount.bio || 'Not Provided' }}</p> -->
      <p>email: {{ account.email || 'Not Provided' }}</p>
      <p>GitHub: <a :href="account.github">{{ account.github || 'Not Provided' }}</a></p>
      <p>LinkedIn: <a :href="account.linkedin">{{ account.linkedin || 'Not Provided' }}</a></p>
    </div>
  </div>
</template>

<script>
import { AuthService } from '../services/AuthService'
import { AppState } from '../AppState'
import { computed, reactive } from 'vue'
export default {
  setup() {
    const state = reactive({
      dropOpen: false
    })
    return {
      state,
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style scoped>
.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}
.dropdown-menu.show {
  transform: scale(1);
}
.hoverable {
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}
.nav-link{
  text-transform: uppercase;
}
.nav-item .nav-link.router-link-exact-active{
  color: var(--primary);
}
</style>
