<template>
<Page actionBarHidden="true">
    <ScrollView>
      <StackLayout class="p-2">
        <FlexboxLayout v-if="user.role === 'owner'" class="text-lg" style="justify-content:space-between;">
          <Label :text="order.customer.name" />
          <Label :text="order.customer.phone" />
        </FlexboxLayout>
        <FlexboxLayout v-if="user.role === 'customer'" class="text-lg" style="justify-content:space-between;">
          <Label :text="order.shop.name" />
          <Label :text="'2020-12-02'" />
        </FlexboxLayout>
        <StackLayout class="border border-gray-500 rounded p-2 mt-4">
          <FlexboxLayout class="border-b border-b-gray-100 mt-2" style="flex-direction: column" v-for="(item, index) in order.items" :key="index">
            <FlexboxLayout style="justify-content:space-between;">
              <Label :text="item.name" textWrap="true" />
              <Label :text="'₹'+item.price" textWrap="true" />
            </FlexboxLayout>
            <FlexboxLayout>
              <Label :text="' x'+item.quantity" textWrap="true" />
            </FlexboxLayout>
          </FlexboxLayout>
          <Label class="text-center mt-1" :text="'Total: ₹'+order.total" textWrap="true" />
        </StackLayout>
        <StackLayout class="p-2">
          <Label class="text-center text-lg" text="Updates" textWrap="true" />
          <FlexboxLayout v-if="user.role === 'owner'" style="justify-content:space-between;" class="py-1">
            <Label class="px-1 text-sm rounded" @tap="inc('accepted')" text="Accepted" :class="percent >= x ? 'bg-green-200 border border-green-500' : ''" />
            <Label class="px-1 text-sm rounded" @tap="inc('packed')" text="Packed" :class="percent >= 2 * x ? 'bg-green-200 border border-green-500' : ''" />
            <Label v-if="order.modeOfDelivery === 'Home Delivery'" class="px-1 rounded text-sm" @tap="inc('outfordelivery')" text="Out For Delivery" :class="percent >= 3 * x ? 'bg-green-200 border border-green-500' : ''" />
            <Label class="px-1 text-sm rounded" @tap="inc('delivered')" text="Delivered" :class="(order.modeOfDelivery === 'Home Delivery') ? percent >= 4 * x ? 'bg-green-200 border border-green-500' : '' : percent >= 3 * x ? 'bg-green-200 border border-green-500' : '' " />
          </FlexboxLayout>
          <FlexboxLayout v-if="user.role === 'customer'" style="justify-content:space-between;" class="py-1">
            <Label class="px-1 text-sm rounded" text="Accepted" :class="percent >= x ? 'bg-green-200 border border-green-500' : ''" />
            <Label class="px-1 text-sm rounded" text="Packed" :class="percent >= 2 * x ? 'bg-green-200 border border-green-500' : ''" />
            <Label v-if="order.modeOfDelivery === 'Home Delivery'" class="px-1 rounded text-sm" text="Out For Delivery" :class="percent >= 3 * x ? 'bg-green-200 border border-green-500' : ''" />
            <Label class="px-1 text-sm rounded"  text="Delivered" :class="(order.modeOfDelivery === 'Home Delivery') ? percent >= 4 * x ? 'bg-green-200 border border-green-500' : '' : percent >= 3 * x ? 'bg-green-200 border border-green-500' : '' " />
          </FlexboxLayout>
          <GridLayout :columns="progress" class="border h-4 mt-2">
            <StackLayout col="0" class="success"></StackLayout>
          </GridLayout>
        </StackLayout>
      </StackLayout>
    </ScrollView>
</Page>
</template>

<script>
import socket from '../socket'
export default {
    props: ['order'],
    data() {
      return {
        percent: 0,
        x: 0
      }
    },
    methods: {
      inc(status) {
        this.order.status = status
        socket.emit('orderUpdate', this.order)
      }
    },
    computed: {
      progress() {
        let percent = 0
        if(this.order.modeOfDelivery === 'Home Delivery') {
          if(this.order.status === 'accepted') {
            percent = 25
          } else  if(this.order.status === 'packed') {
            percent = 50
          } else if(this.order.status === 'outfordelivery') {
            percent = 75
          } else if(this.order.status === 'delivered') {
            percent = 100
          }
          this.x = 25
        } else {
          this.x = 33.33
          if(this.order.status === 'accepted') {
            percent = 33.33
          } else  if(this.order.status === 'packed') {
            percent = 66.66
          }  else if(this.order.status === 'delivered') {
            percent = 100
          }
        }
        if(this.percent < percent) {
          this.percent = percent
        }
        return this.percent + "*," + (100 - this.percent) + "*";
      },
      user() {
        return this.$store.state.Auth.user
      }
    },
    mounted() {
      socket.on(`orderUpdate/${this.order._id}`, (order) => {
        this.order.status = order.status
      })
    }
}
</script>

<style>

</style>