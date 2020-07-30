<template>
  <Page actionBarHidden="true">
    <ScrollView>
        <StackLayout>
          <StackLayout class="mt-2 px-1">
            <Label text="Select Delivery Option" class="text-md bold" />
            <FlexboxLayout style="justify-content: space-between" class="mt-1">
                <Label @tap="mod = 0" text="Home Delivery" class="bw py-2 px-2 rounded border w-40 text-center border-gray-900" :class="mod == 0 ? 'bw border-green-700 bg-green-100' : ''" />
                <Label @tap="mod = 1" text="Self Pickup" class="bw py-2 px-2 rounded border w-40 text-center border-gray-900" :class="mod == 1 ? 'bw border-green-700 bg-green-100' : ''" />
            </FlexboxLayout>
        </StackLayout>
            <StackLayout class="mt-2 px-1" v-if="mod == 0">
                <Label text="Select Address" class="text-md bold" />
                <FlexboxLayout v-for="(address, index) in user.addresses" :key="index" class="border rounded mt-1" :class="saddress === address ? 'bw border-green-700' : ''">
                    <FlexboxLayout style="flex-direction: column" class="py-2 px-4" @tap="saddress = address">
                        <Label class="text-md" :text="address" textWrap="true" />
                    </FlexboxLayout>
                </FlexboxLayout>
            </StackLayout>
            <StackLayout class="mt-2 px-1">
              <Button text="Place Order" class="success" @tap="checkOut" />
            </StackLayout>
        </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import axios from '../bootstrap'
import socket from '../socket'
export default {
    data() {
        return {
            mod: 2,
            saddress: ''
        }
    },
    methods: {
        checkOut() {
            if(this.mod === 2) {
                alert({ title: 'Delivery Option', message: 'Please Select Delivery Mode.', okButtonText: "Ok" })
            } else if(this.mod === 0 && this.saddress === '') {
                alert({ title: 'Address', message: 'Please Select Your Address.', okButtonText: "Ok" })
            } else {
                let mode = this.mod === 0 ? 'Home Delivery' : 'Self Pickup'
                let order = { ...this.order, customer: this.user._id, modeOfDelivery: mode, deliveryAddress: this.mod === 0 ? this.saddress : '' }
                if(socket.connected) {
                    socket.emit('placeOrder', order)
                }
            }
        }
    },
    computed: {
        user() {
            return this.$store.state.Auth.user
        },
        order() {
            return this.$store.state.Cart.order
        }
    },
    mounted() {
        socket.on(`newOrder/${this.user._id}`, (order) => {
            this.$navigator.navigate('/trackorder', { frame: 'home', props: { order } })
        })
    }
}
</script>

<style scoped>
.bw {
    border-width: 4px;
}
</style>