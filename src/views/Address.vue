<template>
  <Page actionBarHidden="true">
      <StackLayout class="container">
          <Label text="Your Addresses" textWrap="true" class="h2" style="text-align:center" />
        <ScrollView height="300">
          <ListView for="address in user.addresses">
          <v-template>
            <StackLayout class="card">
              <Label :text="'Line 1: '+address.split(',')[0]" />
              <Label :text="'Line 2: '+address.split(',')[1]" />
              <Label :text="'City: '+address.split(',')[2]" />
              <Label :text="'Pincode: '+address.split(',')[3]" />
              
            </StackLayout>
          </v-template>
        </ListView>
        </ScrollView>
        <StackLayout style="margin-top:10">
          <Button text="Add New Address" @tap="$navigator.navigate('/addaddress', { frame: 'home' })" class="warning" />
            <Button text="Save Changes" class="primary" />
        </StackLayout>
      </StackLayout>
  </Page>
</template>

<script>
export default {
    data() {
        return {
            
        }
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
    padding: 5;
}
.card {
    border: gray;
    border-width: 1;
}
</style>