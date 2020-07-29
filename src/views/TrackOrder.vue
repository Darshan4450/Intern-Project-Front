<template>
<Page actionBarHidden="true">
    <ScrollView>
      <Label :text="order._id" class="text-center" />
      
    </ScrollView>
</Page>
</template>

<script>
export default {
    props: ['order']

}
</script>

<style>

</style>