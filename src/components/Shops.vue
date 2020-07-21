<template>
      <StackLayout>
        <FlexboxLayout class="header">
          <Label text="Popular Shops" />
          <Label class="fas" style="color:#28a745;" text.decode="More &#xf054;" @tap="$navigator.navigate('/shoplist', { frame: 'home', props: { category: { name: undefined } } })" />
      </FlexboxLayout>
  <FlexboxLayout style="margin-left: 5;height:400px">
    <RadListView orientation="horizontal" for="shop in shops">
        <v-template>
            <FlexboxLayout class="card" @tap="setShop(shop)">
                <Image stretch="true" class="card-image" :src="'http://192.168.0.106:4050/'+shop.image" /> 
                <Label class="card-text" :text="shop.name" />
            </FlexboxLayout>
        </v-template>
    </RadListView>
    </FlexboxLayout>
      </StackLayout>
</template>

<script>
export default {
    props: ['shops'],
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
    margin-top:20px;
    padding: 5;
    font-weight: bold;
}
.card {
    width: 600px;
    height: 400px;
    margin-right: 5;
    border-width: 1;
    border-radius: 5;
    border-color: #d9d9d9;
    padding: 5;
    align-items: flex-start;
    flex-direction: column;
}
.card-image {
    width: 100%;
    height: 250px;
}
.card-text {
    text-align: center;
    width: 100%;
}
</style>