<template>
  <Page actionBarHidden="true">
    <ScrollView>
      <StackLayout v-if="user.role === 'customer'" class="pt-6">
        <Image :src="user.image" class="rounded-full w-20 h-20" stretch="aspectFill" />
        <Button text="Change Avatar" class="bg-blue-600 text-white" @tap="pickImg" />
        <TextField hint="Name" :text="user.name" v-model="user.name" />
        <TextField hint="Email" :text="user.email" v-model="user.email" />
        <TextField hint="Phone" :text="user.phone" v-model="user.phone" />
        <TextField hint="Password" :text="user.password" v-model="user.password" secure="true" />
        <Label text="Don't want to change password ? Leave Password field Empty." textWrap="true" class="text-center text-xs text-gray-600" />
        <Button text="Save Changes" @tap="update" class="primary" />
      </StackLayout>
      <StackLayout v-if="user.role === 'owner'" class="pt-6">
        <Image :src="user.image" class="rounded-full w-20 h-20" stretch="aspectFill" />
        <Button text="Change Avatar" class="bg-blue-600 text-white" @tap="pickImg" />
        <TextField hint="Shop Email (Optional)" :text="user.email" v-model="user.email" keyboardType="email" />
        <TextField hint="Phone" :text="user.phone" v-model="user.phone" keyboardType="phone" />
        <TextField hint="Owner Name" :text="user.owner.name" v-model="user.owner.name" />
        <TextField hint="Owner's Email" :text="user.owner.email" v-model="user.owner.email" keyboardType="email" />
        <TextField hint="Owner's Phone" :text="user.owner.phone" v-model="user.owner.phone" keyboardType="phone" />
        <TextField hint="Opening time" :text="user.timings.split(',')[0]" keyboardType="datetime"  />
        <TextField hint="Closing time" :text="user.timings.split(',')[1]" keyboardType="datetime" />
        <TextField hint="Password" v-model="user.password" secure="true" />
        <Label text="Don't want to change password ? Leave Password field Empty." textWrap="true" class="text-center text-xs text-gray-600" />
        <Button text="Save Changes" @tap="update" class="primary" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>
<script>

import { mapActions } from "vuex"
import * as imagepicker from "nativescript-imagepicker";
import axios, { baseURL } from '../bootstrap';
export default {
    data() {
        return {
            user: {
              password: ''
            },
            baseURL: baseURL,
        }
    },
    methods: {
      ...mapActions(['updateUser', 'updateShop']),
      
      pickImg() {
        let context = imagepicker.create({ mode: "single" })
        context.authorize()
        .then(() => {
          return context.present()
        })
        .then((selection) => {
          selection.forEach((selected) => {
            let mili = (new Date).getTime()
            let imgsrc = selected.android.toString()
            this.user.image = imgsrc
          })
        })
      },
      update() {
        if(this.user.image !== this.baseURL + this.authuser.image) {
          let imgsrc = this.user.image
          var name = imgsrc.substr(imgsrc.lastIndexOf("/") + 1);
          var bghttp = require("nativescript-background-http");
          var session = bghttp.session("image-upload");
          var request = {
                  url: this.baseURL + '/uploadimage',
                  method: "POST",
                  headers: { "Content-Type": "application/octet-stream" },
                  description: "Uploading " + name
              }
          var task = session.uploadFile(imgsrc, request);
          let nsrc = ''
          task.on('error', (e) => console.log(e.response))
          task.on('responded', (e) => {
            nsrc = JSON.parse(e.data)
          })
          task.on('complete', (e) => {
              if(this.authuser.role === 'customer') {
                this.updateUser({...this.user, image: nsrc})
              } else {
                this.updateShop({...this.user, image: nsrc})
              }
          })
        }
        else {
          if(this.authuser.role === 'customer') {
            this.updateUser(this.user)
          } else {
            this.updateShop(this.user)
          }
        }
      } 
    },
    mounted() {
        this.user = {...this.authuser, ...this.user}
        this.user.image = this.baseURL + this.user.image
    },
    computed: {
        authuser() {
            return this.$store.state.Auth.user
        }
    }
}
</script>

<style scoped>
</style>