<template>
  <Page actionBarHidden="true">
    <StackLayout style="margin-top:50">
      <Button text="Get Current Location" @tap="getLocation" />
      <Label :text="latitude" textWrap="true" />
        <TextField hint="Address Line 1" v-model="address.line1" />
        <TextField hint="Address Line 2(Optional)" v-model="address.line2" />
        <TextField hint="City" v-model="address.city" />
        <TextField hint="Pincode" v-model="address.pincode" />
        <Button text="Save Address" @tap="addNewAddress" class="success" />
    </StackLayout>
  </Page>
</template>

<script>
const { Accuracy } = require('tns-core-modules/ui/enums')
const geolocation = require('nativescript-geolocation')
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            latitude: "",
            address: { line1: "", line2: "", city: "", pincode: "" },
        }
    },
    methods: {
        ...mapActions(['addAddress']),
        getLocation() {
            geolocation.getCurrentLocation({desiredAccuracy: Accuracy.high, maximumAge: 5000, timeout: 20000})
            .then((data) => {
                this.latitude = data.latitude
            })
        },
        addNewAddress() {
            this.$store.state.loading = true
            let stradd = Object.keys(this.address).map((k) => {return this.address[k]}).join(",")
            this.addAddress(stradd)
            .then(() => {
                this.$store.state.loading = false
                this.$navigator.navigate('/address', { frame: 'home' })
            })
        }
    }
}
</script>

<style>

</style>