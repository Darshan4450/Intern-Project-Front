<template>
  <Page actionBarHidden="true">
    <StackLayout class="p-2">
      <Label text="Coming Orders" class="bold text-center" />
      <FlexboxLayout class="border border-green-700 rounded mt-2 p-2 bg-green-100" v-for="(order, index) in orders" :key="index">
              <!-- <Image src="~/assets/images/youtube-profile.png" class="card-image" /> -->
            <FlexboxLayout @tap="$navigator.navigate('/trackorder', { frame: 'home', props: { order } })" class="card-body w-full" style="justify-content: space-between;">
                <FlexboxLayout class="card-content">
                  <Label :text="order.customer.name" />
                  <Label class="text-xs" :text="order._id" />
                </FlexboxLayout>
                <FlexboxLayout class="card-content mt-2">
                    <Label class="text-green-700 capitalize" :text="order.status" />
                    <Label :text="'₹ '+order.total" />
                </FlexboxLayout>
            </FlexboxLayout>
          </FlexboxLayout>
    </StackLayout>
  </Page>
</template>

<script>
import axios from '../bootstrap'
import socket from '../socket'
export default {
  data() {
    return {
      orders: []
    }
  },
  methods: {
    getOrders() {
      axios.get(`/order?shopId=${this.user._id}&status=pending`)
      .then((data) => {
        this.orders = data.data
      })
    }
  },
  mounted() {
    this.getOrders()
    socket.on(`newOrder/${this.user._id}`, (order) => {
      this.orders.push(order)
    })
  },
  computed: {
    user() {
      return this.$store.state.Auth.user
    }
  }
}
</script>

<style scoped>
.card-image {
    width: 10%;
    height: 10%;
}
.card-body {
    flex-direction: column;
}
.card-content {
    justify-content: space-between;
}

</style>