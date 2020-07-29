<template>
  <Page actionBarHidden="true">
      <StackLayout>
        <Label text="Your Orders" class="h2" style="text-align:center;margin-top:10" />
        <ScrollView height="100%">
        <ListView for="order in orders">
            <v-template>
            <StackLayout class="card">
                <FlexboxLayout class="card-header">
                    <Label :text="'Order No.: '+order._id" />
                    <Label :text="'Date: '+order.date" />
                </FlexboxLayout>
                <StackLayout v-if="user.role === 'customer'">
                    <Image src="https://img.icons8.com/pastel-glyph/2x/shop.png"
                            class="thumb img-circle" />
                <Label :text="'Nice Stationary'" style="text-align:center;font-size:18" />
                </StackLayout>
                <FlexboxLayout class="card-header">
                    <Button text="View" />
                    <Label :text="'Total Amount: '+order.total" />
                    <Button text="Reorder" class="warning" />
                </FlexboxLayout>
            </StackLayout>
            </v-template>
        </ListView>
      </ScrollView>
      </StackLayout>
      
  </Page>
</template>

<script>
import axios from '../bootstrap'
export default {
    data() {
        return {
            orders: []
        }
    },
    methods: {
        getOrders() {
            axios.get(`/order?shopId=${this.user._id}`)
            .then((data) => {
                this.orders = data.data
            })
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