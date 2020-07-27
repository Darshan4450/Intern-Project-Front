<template>
  <Page actionBarHidden="true">
    <ScrollView>
      <StackLayout class="mt-4">
          <Label text="Your Shopping Cart" class="text-xl text-center" />
        <StackLayout class="px-2">
          <FlexboxLayout class="mt-4 border-b-2 border-gray-400 py-1" style="flex-direction: column" v-for="item in order.items" :key="item._id">
                <FlexboxLayout>
                  <Image class="w-16 rounded-full" :src="baseURL + '/images/item.jpg'" />
                  <FlexboxLayout style="flex-direction: column">
                    <Label :text="item.name" class="bold text-lg" textWrap="true" />
                    <Label :text="'₹ ' + item.price" />
                  </FlexboxLayout>
                </FlexboxLayout>
                <FlexboxLayout style="justify-content: space-between" class="mt-2">
                  <FlexboxLayout class="border border-gray-900 rounded">
                    <Label class="fas px-2 py-1 bg-gray-200" text.decode="&#xf067;" @tap="incQuantity(item)" />
                    <Label class="px-2 py-1" :text="item.quantity" />
                    <Label class="fas px-2 py-1 bg-gray-200" text.decode="&#xf068;" @tap="decQuantity(item)" />
                  </FlexboxLayout>
                  <Label class="far" text.decode="&#xf2ed;" @tap="removeItem(item)" />
                </FlexboxLayout>
            </FlexboxLayout>
        </StackLayout>
        <StackLayout class="text-center mt-2">
          <Label :text="'Cart Total: ₹ ' + order.total" class="text-lg" />
          <Button text="Continue Shopping"  />
          <Button text="Proceed To CheckOut" class="primary" />
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
      ...mapActions(['removeItem', 'incQuantity', 'decQuantity'])
    },
    computed: {
      order() {
        return this.$store.state.Cart.order
      }
    }
}
</script>

<style scoped>

</style>