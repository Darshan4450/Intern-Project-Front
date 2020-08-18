<template>
    <Page class="page" actionBarHidden="true">
        <ScrollView>
            <StackLayout width="100%" class="pt-8">
                <Image width="100" height="100"
                    src="~/assets/images/warehouse.png" />
                <Label text="Application" horizontalAlignment="center" class="m-t-20 h2"  />
                <StackLayout class="m-t-20">
                    <TextField v-model="user.name" hint="Name" class="blue" />
                    <TextField v-model="user.email" hint="Email" keyboardType="email" />
                    <TextField v-model="user.phone" hint="Phone" keyboardType="phone" />
                    <TextField v-model="user.password" hint="Password" secure="true" />
                    <Button text="SignUp" @tap="signUp" class="success" />
                </StackLayout>
                <StackLayout>
                  <Label @tap="$navigator.navigate('/login')" horizontalAlignment="center" class="m-t-20 h3">
                    <FormattedString>
                        <Span text="Already have an account ?"></Span>
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
                message: "You have successfully authenticated. This is where you build your core application functionality.",
                user: {
                    name: "Customer 2",
                    email: "c2@test.com",
                    password: "Darshan",
                    phone: "1234567890",
                    role: "customer"
                }
            };
        },
        methods: {
            ...mapActions(['register']),
            signUp() {
                this.register(this.user)
                this.$navigator.navigate('/login')
            }
        }
    };
</script>

<style>
</style>
