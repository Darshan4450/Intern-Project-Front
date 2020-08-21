<template>
      <StackLayout>
        <FlexboxLayout class="header px-1 font-bold mt-4">
          <Label text="Popular Shops" />
          <Label class="text-sm text-green-600" text.decode="More &#8250;" @tap="$navigator.navigate('/shoplist', { frame: 'home', props: { category: { name: undefined } } })" />
      </FlexboxLayout>
  <FlexboxLayout class="pl-1 mt-1">
    <RadListView orientation="horizontal" for="shop in shops">
        <v-template>
            <AbsoluteLayout>
                <FlexboxLayout class="card border border-gray-400 p-2 mr-2" @tap="setShop(shop)">
                    <Image :src="baseURL+shop.image" stretch="aspectFill" class="w-64 h-24" />
                    <Label :text="shop.name" />
                    <FlexboxLayout class="text-xs">
                        <Image class="w-4 h-4" v-if="shop.rating < 3.0" src="~/assets/images/star-half.png" />
                        <Image class="w-4 h-4" v-if="shop.rating >= 3.0" src="~/assets/images/star.png" />
                        <Label :text="shop.rating" class="bold text-gray-800" />
                    </FlexboxLayout>
                </FlexboxLayout>
                <Label :text="'1.5 km'" top="15" left="15" class="px-2 text-xs rounded-lg bg-gray-200" />
            </AbsoluteLayout>
        </v-template>
    </RadListView>
    </FlexboxLayout>
      </StackLayout>
</template>

<script>
import { baseURL } from "../bootstrap"
export default {
    props: ['shops'],
    data() {
        return {
            baseURL: baseURL
        }
    },
    methods: {
        setShop(shop) {
            this.$navigator.navigate('/shopitems', { frame: "home", props: { shop } })
        }
    }
}
</script>

<style scoped>
.header {
    justify-content: space-between;
}
.card {
    flex-direction: column;
}
</style>