<template>
    <Page actionBarHidden="true">
        <StackLayout>
            <StackLayout>
                <Label text="Application" horizontalAlignment="center" class="m-t-20 h2"  />
                <!-- <SearchBar id="searchBar" hint="Search" text="" clear="onClear" submit="onSubmit" /> -->
            </StackLayout>
                <StackLayout style="margin-top:100px">
                <ListView for="shop in shops" height="1200px">
                    <v-template>
                        <FlexboxLayout flexDirection="row" @tap="setShop(shop)">
                            <Image :src="baseURL+'/' + shop.image"
                                class="thumb img-circle" />
                            <Label :text="shop.name" class="" />
                            <!-- <Label :text="shop.location" class="t-12" /> -->
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
