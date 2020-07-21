<template>
  <Page actionBarHidden="true">
    <ScrollView>
      <StackLayout class="container">
          <Label text="Your Cart" class="h2" />
        <ListView for="item in items" height="200" class="list">
          <v-template>
            <FlexboxLayout class="item">
                <Image class="img" src="https://capital-wm.com/wp-content/uploads/2016/09/lots-of-groceries4-1024x683.jpg" />
                <Label :text="item.name" />
                <Label :text="'Price: ' + item.price" />
                <Label class="far icon" text.decode="&#xf2ed;" />
            </FlexboxLayout>
          </v-template>
        </ListView>
        <StackLayout class="container">
          <Label :text="'Cart Total: $' + 75" class="h2" />
          <Button text="Continue Shopping" />
          <Button text="Select Address" />
          <Button text="Proceed To CheckOut" class="primary" />
        </StackLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    computed: {
      items() {
        return this.$store.state.Cart.items
      }
    }
}
</script>

<style scoped>
.container {
    text-align: center;
}
.item {
    justify-content: space-between;
}
.icon {
    font-size: 20rem;
}
.img {
    width: 100px;
    height: 100px;
}
</style>