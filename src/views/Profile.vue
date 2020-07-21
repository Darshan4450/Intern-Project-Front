<template>
  <Page actionBarHidden="true">
    <ScrollView>
      <StackLayout class="container">
        <Image src="~/assets/images/youtube-profile.png" class="img" />
        <Button v-if="user.role === 'customer'" class="fas" text.decode="&#xf4ff; Edit Profile" @tap="goto('/editprofile')" />
        <Button v-if="user.role === 'owner'" class="fas" text.decode="&#xf54f; Edit Shop Details" @tap="goto('/editprofile')" />
        <Button v-if="user.role === 'customer'" class="far" text.decode="&#xf2b9; Saved Address" @tap="goto('/address')" />
        <Button class="fas" text.decode="&#xf095; Contact Us" />
        <Button class="danger" text="LogOut" @tap="signOut" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { mapActions } from 'vuex'
export default {
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