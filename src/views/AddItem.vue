<template>
  <Page actionBarHidden="true">
      <StackLayout style="margin-top:20">
        <TextField hint="Name" :text="item.name" />
        <TextField hint="Description" :text="item.description" />
        <TextField hint="Price" :text="item.price" />
        <TextField hint="Quantity" :text="item.quantity" />
        <Button text="Add Item" class="success" />
      </StackLayout>
  </Page>
</template>

<script>
export default {
    data() {
        return {
            item: {
                name: "",
                description: "",
                price: "",
                quantity: ""
            }
        }
    }
}
</script>

<style>

</style>