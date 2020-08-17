<template>
  <Page actionBarHidden="true">
      <StackLayout>
        <Label text="Your Orders" class="h2" style="text-align:center;margin-top:10" />
        <ScrollView height="100%">
        <ListView for="order in orders">
            <v-template>
            <StackLayout class="card">
                <FlexboxLayout class="card-header">
                    <Label class="text-xs" :text="order._id" />
                    <Label class="text-xs" :text="formatDate(order.date)" />
                </FlexboxLayout>
                <StackLayout v-if="user.role === 'customer'">
                    <Image :src="baseURL+order.shop.image" class="thumb img-circle" />
                <Label :text="order.shop.name" class="text-center" />
                </StackLayout>
                <StackLayout v-if="user.role === 'owner'">
                  <Label :text="order.customer.name" class="text-center" />
                </StackLayout>
                <FlexboxLayout class="card-header">
                    <Button text="View" @tap="$navigator.navigate('/trackorder', { frame: 'home', props: { order } })" />
                    <Label :text="'₹ '+order.total" />
                    <Button v-if="user.role === 'customer'" text="Reorder" class="warning" />
                </FlexboxLayout>
            </StackLayout>
            </v-template>
        </ListView>
      </ScrollView>
      </StackLayout>
      
  </Page>
</template>

<script>
import socket from '../socket'
import axios, { baseURL } from '../bootstrap'
export default {
    data() {
        return {
            orders: [],
            baseURL: baseURL
        }
    },
    methods: {
        getOrders() {
            let url = ''
            if(this.user.role === 'owner') {
                url = `/order?shopId=${this.user._id}`
            } else {
                url = `/order?customerId=${this.user._id}`
            }
            axios.get(url)
            .then((data) => {
                this.orders = data.data
            })
        },
        formatDate(d) {
            let date = new Date(d)
            return date.toDateString()
        }
    },
    mounted() {
        this.getOrders()
    },
    computed: {
        user() {
            return this.$store.state.Auth.user
        }
    }
}
</script>

<style scoped>
.img {
    width: 100px;
    height: 100px;
}
.card-header {
    justify-content: space-between;
}
</style>