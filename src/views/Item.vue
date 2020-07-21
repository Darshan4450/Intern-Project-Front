<template>
    <Page actionBarHidden="true">
        <ScrollView>
          <StackLayout class="container">
            <Label :text="item.name" class="h1" textWrap="true" />
            <Image src="https://capital-wm.com/wp-content/uploads/2016/09/lots-of-groceries4-1024x683.jpg" width="150" height="150" class="m-t-20" />
            <Label :text="'Price: ' + item.price" class="h2" />
            <TextView :text="item.decription" class="h3" editable="false" />
            <Button text="Add To Cart" class="warning" @tap="addItemToCart(item)"  />
            <Button text="Buy" class="warning" />
        </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
import { mapActions } from 'vuex'
    export default {
        props: ['item'],
        data() {
            return {
                
            };
        },
        methods: {
            ...mapActions(['addItemToCart'])
        },
        mounted() {
            
        },
        computed: {
            user() {
                return this.$store.state.Auth.user
            },
        }
    };
</script>

<style scoped>
.container {
    text-align: center;
    margin-top: 20;
}
</style>
