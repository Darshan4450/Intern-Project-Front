<template>
    <FlexboxLayout class="mt-2 h-20">
        <FlexboxLayout>
            <Image :src="baseURL + '/images/item.jpg'"
            class="w-32" />
        </FlexboxLayout>
        <FlexboxLayout class="card w-full px-2 py-1">
            <FlexboxLayout>
                <Label :text="item.name" class="text-lg" />
            </FlexboxLayout>
            <FlexboxLayout class="actions">
                <FlexboxLayout class="card-content">
                    <Label :text="'Price: ' + item.price" />
                    <Label v-if="user.role === 'owner'" class="far icon" text.decode="&#xf2ed;" />
                </FlexboxLayout>
                <FlexboxLayout class="border border-green-500">
                    <Label class="fas text-green-500" text.decode="&#xf067;" />
                    <Label text="1" class="text-sm" />
                    <Label class="fas text-green-500" text.decode="&#xf068;" />
                </FlexboxLayout>
                <FlexboxLayout class="border border-green-500 px-1">
                    <Label class="text-sm text-green-700 bold" text="ADD" @tap="addItemToCart(item)" />
                </FlexboxLayout>
            </FlexboxLayout>
        </FlexboxLayout>
    </FlexboxLayout>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props: ['item'],
    methods: {
        ...mapActions(['addItemToCart']),
    },
    computed: {
        user() {
            return this.$store.state.Auth.user
        },
    }
}
</script>

<style scoped>
.icon {
    font-size: 20rem;
}
.card {
    flex-direction: column;
    justify-content: space-between;
}
.actions {
    justify-content: space-between;
    align-items: center;
}
</style>