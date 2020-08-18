<template>
    <Page>
        <ActionBar>
            <FlexboxLayout
                android:horizontalAlignment="left" class="nav">
                <Label text.decode="&#xf0c9;" class="fas" @tap="$refs.drawer.toggleDrawerState()" />
                <Label :text="'Hello '+user.name+'!'" class="action-label"></Label>
                <AbsoluteLayout>
                  <Label class="fas action-image" text.decode="&#xf07a;" @tap="goto('/cart')" />
                  <Label v-if="order.items.length > 0" :text="order.items.length" class="bg-gray-200 rounded-full py-0 px-1" top="5" left="10" isUserInteractionEnabled="false" />
                </AbsoluteLayout>
            </FlexboxLayout>
        </ActionBar>
        <FlexboxLayout>
        <GridLayout rows="*" height="1500px" style="font-size: 16px">
            <RadSideDrawer ref="drawer">
                <StackLayout ~drawerContent backgroundColor="white">
                    <StackLayout class="mt-8">
                        <FlexboxLayout style="flex-direction:column;">
                            <FlexboxLayout class="h-20" style="justify-content:center;">
                                <Image :src="baseURL+user.image" class="rounded-full w-20" stretch="aspectFill" />
                            </FlexboxLayout>
                            <Label :text="user.name" class="text-center bold mt-2" />
                        </FlexboxLayout>
                    </StackLayout>
                    <StackLayout style="text-align: center; vertical-align: center;">
                        <Button text="Home" @tap="goto(user.role === 'owner' ? '/orders' : '/categories')" />
                        <Button text="Your Orders" @tap="goto('/orderhistory')" />
                        <Button text="Account" @tap="goto('/profile')" />
                        <Button v-if="user.role === 'owner'" text="Item List" @tap="gotoP('/shopitems')" />
                        <Button v-if="user.role === 'owner'" text="Add Item" />
                    </StackLayout>
                    <Button text="LogOut" class="danger m-t-20" @tap="signOut" />
                </StackLayout>
                <StackLayout ~mainContent>
                    <Label v-if="$store.state.message" :text="$store.state.message" horizontalAlignment="center" class="bold text-green-600 mt-2 text-sm"  />
                    <Frame id="home" v-if="user.role === 'customer'">
                        <Categories  />
                    </Frame>
                    <Frame id="home" v-if="user.role === 'owner'">
                        <Orders />
                    </Frame>
                </StackLayout>
            </RadSideDrawer>
        </GridLayout>
        </FlexboxLayout>
    </Page>
</template>

<script>
import Vue from "nativescript-vue";
import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
Vue.use(RadSideDrawer);
import Categories from "./Categories"
import { mapActions } from 'vuex'
import { baseURL } from '../bootstrap'
import socket from '../socket'
import Orders from './Orders.vue';
    export default {
        components: { Categories, Orders },
        data() {
            return {
                baseURL: baseURL,
                categories: ["Grocery", "Stationary", "Hardware", "Vegetables/Fruits", "Medicine", "Sports"]
            };
        },
        methods: {
            ...mapActions(['logout', 'loadShops']),
            signOut() {
                this.logout().
                then((data) => {
                    this.$navigator.navigate('/login', { clearHistory: true })
                })
            },
            goto(route) {
                this.$navigator.navigate(route, { frame: 'home' })
                this.$refs.drawer.closeDrawer()
            },
            gotoP(route) {
                this.$navigator.navigate(route, { frame: 'home', props: { shop: this.user } })
                this.$refs.drawer.closeDrawer()
            }
            // setShop(shop) {
            //     this.$store.state.Shop.shop = shop
            //     this.$navigator.navigate('/shopitems')
            // }
        },
        mounted() {
            // this.$store.state.loading = true
            // this.loadShops()
            // .then((data) => {
            //     this.$store.state.loading = false
            // })
        },
        computed: {
            user() {
                return this.$store.state.Auth.user
            },
            order() {
                return this.$store.state.Cart.order
            }

        }
    };
</script>

<style>
</style>
