<template>
    <Page actionBarHidden="true">
        <StackLayout>
            <StackLayout>
                <Label text="Application" horizontalAlignment="center" class="m-t-20 h2"  />
                <!-- <SearchBar id="searchBar" hint="Search" text="" clear="onClear" submit="onSubmit" /> -->
            </StackLayout>
                <StackLayout class="mt-8">
                <ListView for="shop in shops" height="1200px">
                    <v-template>
                        <FlexboxLayout flexDirection="row" @tap="setShop(shop)" class="py-4">
                            <FlexboxLayout class="p-1">
                                <Image :src="baseURL + shop.image" stretch="aspectFill" class="w-10 h-10 rounded-full" />
                            </FlexboxLayout>
                            <FlexboxLayout flexDirection="column" class="px-2">
                                <Label :text="shop.name" class="p-0" />
                                <FlexboxLayout class="text-xs">
                                    <Image class="w-4 h-4" v-if="shop.rating < 3.0" src="~/assets/images/star-half.png" />
                                    <Image class="w-4 h-4" v-else src="~/assets/images/star.png" />
                                    <Label :text="shop.rating" class="bold text-gray-800" />
                                </FlexboxLayout>
                            </FlexboxLayout>
                        </FlexboxLayout>
                    </v-template>
                </ListView>
                </StackLayout>
        </StackLayout>
    </Page>
</template>

<script>
import { mapActions } from 'vuex'
import { baseURL } from '../bootstrap'
    export default {
        props: ['category'],
        data() {
            return {
                baseURL: baseURL
            };
        },
        methods: {
            ...mapActions(['logout', 'loadShops']),
            setShop(shop) {
                this.$navigator.navigate('/shopitems', { frame: "home", props: { shop } })
            }
        },
        mounted() {
            this.$store.state.loading = true
            this.loadShops(this.category.name)
            .then((data) => {
                this.$store.state.loading = false
            })
        },
        computed: {
            user() {
                return this.$store.state.Auth.user
            },
            shops() {
                return this.$store.state.Shop.shops
            }

        }
    };
</script>

<style>
</style>
