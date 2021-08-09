<template>
  <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p><em>Edit your account here:</em></p>
  </div>
  <div v-if="user.isAuthenticated">
    <form @submit.prevent="editAccount">
      <div class="form-group">
        <input type="text"
               id="coverImg"
               class="form-control"
               placeholder="Cover image..."
               v-model="state.account.coverImg"
        >
      </div>
      <div class="form-group">
        <input type="text"
               id="picture"
               class="form-control"
               placeholder="Profile picture..."
               v-model="state.account.picture"
        >
      </div>
      <div class="form-group">
        <input type="text"
               id="name"
               class="form-control"
               placeholder="Name..."
               v-model="state.account.name"
        >
      </div>
      <div class="form-group">
        <input type="text"
               id="gethub"
               class="form-control"
               placeholder="GitHub URL..."
               v-model="state.account.github"
        >
      </div>
      <div class="form-group">
        <input type="text"
               id="linkedin"
               class="form-control"
               placeholder="LinkedIn URL..."
               v-model="state.account.linkedin"
        >
      </div>
      <div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import { accountService } from '../services/AccountService'
export default {
  name: 'Account',
  setup() {
    const state = reactive({
      account: {}
    })
    return {
      state,
      account: computed(() => AppState.account),
      user: computed(() => AppState.user),

      async editAccount() {
        await accountService.editAccount(state.account)
        state.account = {}
      }
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
