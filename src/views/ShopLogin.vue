<template>
    <Page class="page" actionBarHidden="true">
        <ScrollView>
            <StackLayout width="100%" class="pt-4">
                <Image class="mt-20" width="100" height="100"
                    src="~/assets/images/shop.png" />
                <Label text="Application" horizontalAlignment="center" class="m-t-20 h2"  />
                <Label text="Shop LogIn Page." horizontalAlignment="center" class="m-t-20 h3" style="color:green"  />
                <Label textWrap="true" v-if="$store.state.message" :text="$store.state.message" horizontalAlignment="center" class="m-t-10 h3 m-l-10" style="color:green"  />
                <StackLayout class="m-t-20">
                  <TextField v-model="user.phone" hint="Phone No." keyboardType="phone" class="input" />
                    <TextField v-model="user.password" hint="Password" secure="true" class="input" />
                    <Button text="LogIn As Owner" @tap="signIn" class="info" />
                </StackLayout>
                <StackLayout>
                <Label @tap="$navigator.navigate('/shopregister')" horizontalAlignment="center" class="m-t-20 h3">
                    <FormattedString>
                        <Span text="Want to register for a shop ?"></Span>
                        <Span text=" Click Here" style="color:#007bff"></Span>
                    </FormattedString>
                </Label>
                <Label @tap="$navigator.navigate('/login')" horizontalAlignment="center" class="m-t-20 h3">
                    <FormattedString>
                        <Span text="Want to login as Customer ?"></Span>
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
            user: {
                phone: "1470852369",
                password: "Darshan",
                role: "owner"
            }
        };
    },
    methods: {
        ...mapActions(['login']),
        signIn() {
            this.$store.state.loading = true
            this.login(this.user)
            .then((data) => {
                this.$store.state.loading = false
                this.$navigator.navigate('/dashboard')
            })
        },
    },
};
</script>

<style scoped>
    
</style>