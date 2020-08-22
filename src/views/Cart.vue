<template>
  <Page actionBarHidden="true">
    <ScrollView>
      <StackLayout class="mt-4">
          <Label v-if="order.items.length > 0" text="Your Shopping Cart" class="text-xl text-center" />
          <Label v-if="order.items.length == 0" text="Your Shopping Cart Is Empty." class="text-center" />
        <StackLayout v-if="order.items.length > 0" class="px-2">
          <FlexboxLayout class="mt-4 border-b-2 border-gray-400 py-1" style="flex-direction: column" v-for="item in order.items" :key="item._id">
                <FlexboxLayout>
                  <Image class="w-16 rounded-full" :src="item.image" />
                  <FlexboxLayout style="flex-direction: column" class="px-2">
                    <Label :text="item.name" class="text-md" />
                    <Label :text="'₹ ' + item.price" />
                  </FlexboxLayout>
                </FlexboxLayout>
                <FlexboxLayout style="justify-content: space-between" class="mt-2">
                  <FlexboxLayout class="border border-gray-900 rounded">
                    <Label class="text-lg px-3 bg-gray-300 rounded-l border-r" text="+" @tap="incQuantity(item)" />
                    <Label class="px-4" :text="item.quantity" />
                    <Label class="text-lg px-3 bg-gray-300 rounded-r border-l" text.decode="&#8211;" @tap="decQuantity(item)" />
                  </FlexboxLayout>
                  <Image src="~/assets/images/bin.png" class="w-4" @tap="removeItem(item)" />
                </FlexboxLayout>
            </FlexboxLayout>
        </StackLayout>
        <StackLayout class="text-center mt-2">
          <Label v-if="order.items.length > 0" :text="'Cart Total: ₹ ' + order.total" class="text-lg" />
          <Button text="Continue Shopping" @tap="onTap" />
          <Button v-if="order.items.length > 0" text="Proceed To CheckOut" class="primary" @tap="checkout" />
        </StackLayout>
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
            baseURL: baseURL,
            // items: [
            //   { id: 1, name: 'Weat (1 kg)', price: 25, quantity: 1 },
            //   { id: 1, name: 'Weat (1 kg)', price: 25, quantity: 1 }
            // ]
        }
    },
    methods: {
      ...mapActions(['removeItem', 'incQuantity', 'decQuantity']),
      checkout() {
        this.$navigator.navigate('/checkout', { frame: 'home' })
      },
      onTap(args) {
        const button = args.object;
        const page = button.page;
        page.frame.goBack();
    }
    },
    computed: {
      order() {
        return this.$store.state.Cart.order
      },
      user() {
        return this.$store.state.Auth.user
      }
    }
}
</script>

<style scoped>

</style>