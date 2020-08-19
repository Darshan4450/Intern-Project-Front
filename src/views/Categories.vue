<template>
  <Page actionBarHidden="true">
    <StackLayout>
      <StackLayout>
        <!-- <SearchBar ref="searchBar" hint="Search" /> -->
    </StackLayout>
    <GridLayout class="h-40 px-1 mt-4">
      <Carousel height="100%" width="100%" pageChanged="myChangeEvent" pageTapped="mySelectedEvent" indicatorColor="blue" finite="true" bounce="false" showIndicator="true" verticalAlignment="top" android:indicatorAnimation="swap" color="white">
        <CarouselItem verticalAlignment="middle">
            <Image class="rounded" src="~/assets/images/sh1.jpg" stretch="aspectFill" />
        </CarouselItem>
        <CarouselItem verticalAlignment="middle">
            <Image class="rounded" src="~/assets/images/sh2.jpg" stretch="aspectFill" />
        </CarouselItem>
        <CarouselItem verticalAlignment="middle">
            <Image class="rounded" src="~/assets/images/sh3.jpg" stretch="aspectFill" />
        </CarouselItem>
    </Carousel>
    </GridLayout>
    <FlexboxLayout class="bold px-1 mt-4">
          <Label text="Categories" />
      </FlexboxLayout>
    <FlexboxLayout style="height:100px" class="mt-1 pl-1">
        <RadListView orientation="horizontal" for="c in categories">
            <v-template>
                <FlexboxLayout class="bg-gray-100 border border-gray-600 rounded-md px-2 mr-2" @tap="shawShops(c)">
                  <Image class="w-4 h-4" :src="c.image" />
                  <Label class="text-center text-md" :text="c.name" />
                </FlexboxLayout>
            </v-template>
        </RadListView>
    </FlexboxLayout>
    <Shops :shops="shops" />
    </StackLayout>
  </Page>
</template>

<script>
import Vue from 'nativescript-vue'
import RadListView from 'nativescript-ui-listview/vue';
Vue.use(RadListView);
import axios from '../bootstrap'
import Shops from "../components/Shops"
Vue.registerElement('Carousel', () => require('nativescript-carousel').Carousel);
Vue.registerElement('CarouselItem', () => require('nativescript-carousel').CarouselItem);
export default {
    components: { Shops },
    data() {
        return {
            categories: [
                { name: "Groceries", image: "~/assets/images/grocery.png" },
                { name: "Stationeries", image: "~/assets/images/stationery.png" },
                { name: "Hardware", image: "~/assets/images/hardware.png" },
                { name: "Vegetables/Fruits", image: "~/assets/images/veges.png" },
                { name: "Medicines", image: "~/assets/images/medicine.png" },
                { name: "Sports", image: "~/assets/images/sport.png" }
            ],
            shops: [],
        };
    },
    methods: {
        shawShops(c) {
            this.$navigator.navigate('/shoplist', { frame: 'home', props: { category: c } })
        },
        loadShops() {
            axios.get('/shop')
            .then((data) => {
                this.shops = data.data
            })
        }
    },
    mounted() {
        //this.$refs.searchBar.nativeView.dismissSoftInput();
        this.loadShops()
    },
}
</script>

<style scoped>
</style>