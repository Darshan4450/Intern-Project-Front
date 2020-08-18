<template>
  <Page actionBarHidden="true">
    <ScrollView>
      <StackLayout class="pt-6">
        <Image :src="baseURL + user.image" class="w-20" />
        <Button v-if="user.role === 'customer'" class="fas" text="Edit Profile" @tap="goto('/editprofile')" />
        <Button v-if="user.role === 'owner'" class="fas" text="Edit Shop Details" @tap="goto('/editprofile')" />
        <Button v-if="user.role === 'customer'" class="far" text="Saved Address" @tap="goto('/address')" />
        <Button class="fas" text="Contact Us" />
        <Button class="danger" text="LogOut" @tap="signOut" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { mapActions } from 'vuex'
import { baseURL } from '../bootstrap'
export default {
  data() {
    return {
      baseURL: baseURL
    }
  },
  methods: {
    ...mapActions(['logout']),
    goto(route) {
        this.$navigator.navigate(route, { frame: 'home' })
    },
    signOut() {
        this.logout().
        then((data) => {
            this.$navigator.navigate('/login', { clearHistory: true })
        })
    },
  },
  computed: {
    user() {
        return this.$store.state.Auth.user
    },
  }
}
</script>

<style scoped>
.container {
    padding-top: 100px;
}
.img {
    width: 300px;
    height: 300px;
}
</style>