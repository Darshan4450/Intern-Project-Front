<template>
  <Page actionBarHidden="true">
    <ScrollView>
      <StackLayout v-if="user.role === 'customer'" class="container">
        <Image src="~/assets/images/youtube-profile.png" class="img" />
        <TextField hint="Name" :text="user.name" v-model="user.name" />
        <TextField hint="Email" :text="user.email" v-model="user.email" />
        <TextField hint="Phone" :text="user.phone" v-model="user.phone" />
        <TextField hint="Password" :text="user.password" v-model="user.password" secure="true" />
        <Label text="Don't want to change password ? Leave Password field Empty." textWrap="true" class="pass" />
        <Button text="Save Changes" @tap="updateUser(user)" class="primary" />

      </StackLayout>
      <StackLayout v-if="user.role === 'owner'" class="container">
        <Image src="~/assets/images/youtube-profile.png" class="img" />
        <TextField hint="Shop Email (Optional)" :text="user.email" v-model="user.email" keyboardType="email" />
        <TextField hint="Phone" :text="user.phone" v-model="user.phone" keyboardType="phone" />
        <TextField hint="Owner Name" :text="user.owner.name" v-model="user.owner.name" />
        <TextField hint="Owner's Email" :text="user.owner.email" v-model="user.owner.email" keyboardType="email" />
        <TextField hint="Owner's Phone" :text="user.owner.phone" v-model="user.owner.phone" keyboardType="phone" />
        <TextField hint="Opening time" :text="user.timings.split(',')[0]" keyboardType="datetime"  />
        <TextField hint="Closing time" :text="user.timings.split(',')[1]" keyboardType="datetime" />
        <TextField hint="Password" v-model="user.password" secure="true" />
        <Label text="Don't want to change password ? Leave Password field Empty." textWrap="true" class="pass" />
        <Button text="Save Changes" @tap="updateShop(user)" class="primary" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>
<script>
import { mapActions } from "vuex"
export default {
    data() {
        return {
            user: {
              password: ''
            }
        }
    },
    methods: {
      ...mapActions(['updateUser', 'updateShop'])
    },
    mounted() {
        this.user = {...this.authuser, ...this.user}
    },
    computed: {
        authuser() {
            return this.$store.state.Auth.user
        }
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
.pass {
  font-size:10px;
  text-align: center;
  color: gray;
}
</style>