<template>
    <Page class="page" actionBarHidden="true">
            <ScrollView width="100%">
                <StackLayout class="pt-8">
                  <Image width="100" height="100"
                    src="~/assets/images/shop.png" />
                <Label text="Application" horizontalAlignment="center" class="m-t-20 h2"  />
                <Label text="You Are Registering Your Shop." horizontalAlignment="center" class="m-t-20 h3" style="color:green"  />
                <StackLayout class="m-t-20">
                    <TextField v-model="shop.name" hint="Shop Name" />
                    <TextField v-model="shop.email" hint="Shop Email (Optional)" keyboardType="email" />
                    <TextField v-model="shop.license" hint="License: GST No., etc." />
                    <TextField v-model="shop.phone" hint="Phone" keyboardType="phone" />
                    <TextField v-model="shop.type" hint="Shop Type" />
                    <TextField v-model="shop.owner.name" hint="Owner Name" />
                    <TextField v-model="shop.owner.email" hint="Owner's Email" keyboardType="email" />
                    <TextField v-model="shop.owner.phone" hint="Owner's Phone" keyboardType="phone" />
                    <TextField v-model="shop.otime" hint="Opening time" keyboardType="datetime"  />
                    <TextField v-model="shop.ctime" hint="Closing time" keyboardType="datetime" />
                    <TextField v-model="shop.password" hint="Password" secure="true" />
                    <Button text="Send For Registration" @tap="signUp" class="success" />
                </StackLayout>
                <StackLayout>
                  <Label @tap="$navigator.navigate('/shoplogin')" horizontalAlignment="center" class="m-t-20 h3" style="margin-bottom: 20;">
                    <FormattedString>
                        <Span text="Already Registered ?"></Span>
                        <Span text=" LogIn" style="color:#007bff"></Span>
                    </FormattedString>
                </Label>
                </StackLayout>
                </StackLayout>
            </ScrollView>
    </Page>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        data() {
            return {
                shop: {
                    name: "Shop One",
                    email: "",
                    password: "Darshan",
                    phone: "1236549870",
                    license: "22AAAAA0000A1Z5",
                    type: "Grocery",
                    owner: {
                        name: "Owner 1",
                        email: "o1@test.com",
                        phone: "1478523690",
                    },
                    otime: "08:00",
                    ctime: "17:00",
                    location: "23.0000,22.0000",
                    workingdays: "monday,friday",
                },
                categories: ["Grocery", "Hardware", "Sports", "Toys", "Furniture", "Vegetables/Fruits", "Stationary"]
            };
        },
        methods: {
            ...mapActions(['addShop']),
            signUp() {
                this.shop.timings = this.shop.otime + "," + this.shop.ctime
                this.addShop(this.shop)
                this.$navigator.navigate('/shoplogin')
            }
        }
    };
</script>

<style>
</style>
