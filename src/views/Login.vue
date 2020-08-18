<template>
    <Page class="page" actionBarHidden="true">
        <GridLayout rows="auto, auto, auto">
          <StackLayout width="100%" class="pt-8">
                <Image width="100" height="100"
                    src="~/assets/images/warehouse.png" />
                <Label text="Application" horizontalAlignment="center" class="m-t-20 h2"  />
                <Label v-if="$store.state.message" :text="$store.state.message" horizontalAlignment="center" class="m-t-10 h3" style="color:green"  />
                <StackLayout class="m-t-20">
                  <TextField v-model="user.email" hint="Email" keyboardType="email" class="input" />
                    <TextField v-model="user.password" hint="Password" secure="true" class="input" />
                    <Button text="LogIn" @tap="signIn" class="primary" />
                </StackLayout>
                <StackLayout>
                  <Label @tap="$navigator.navigate('/register')" horizontalAlignment="center" class="m-t-20 h3">
                    <FormattedString>
                        <Span text="Don’t have an account ?"></Span>
                        <Span text=" Sign up" style="color:#007bff"></Span>
                    </FormattedString>
                </Label>
                <Label @tap="$navigator.navigate('/shoplogin')" horizontalAlignment="center" class="m-t-20 h3">
                    <FormattedString>
                        <Span text="Are You The Shop Owner ?"></Span>
                        <Span text=" Click Here" style="color:#007bff"></Span>
                    </FormattedString>
                </Label>
                </StackLayout>
            </StackLayout>
        </GridLayout>
        <!-- <ScrollView>
            <StackLayout width="100%">
                <Image width="100" height="100" class="logo"
                    src="https://play.nativescript.org/dist/assets/img/NativeScript_logo.png" />
                <Label text="Application" horizontalAlignment="center" class="m-t-20 h2"  />
                <Label v-if="$store.state.Auth.message" :text="$store.state.Auth.message" horizontalAlignment="center" class="m-t-10 h3" style="color:green"  />
                <StackLayout class="m-t-30">
                  <TextField v-model="user.email" hint="Email" keyboardType="email" class="input" />
                    <TextField v-model="user.password" hint="Password" secure="true" class="input" />
                    <Button text="LogIn" @tap="signIn" class="primary" />
                </StackLayout>
                <StackLayout>
                  <Label @tap="$navigator.navigate('/register')" horizontalAlignment="center" class="m-t-20 h3">
                    <FormattedString>
                        <Span text="Don’t have an account ?"></Span>
                        <Span text=" Sign up" style="color:#007bff"></Span>
                    </FormattedString>
                </Label>
                <Label @tap="$navigator.navigate('/shoplogin')" horizontalAlignment="center" class="m-t-20 h3">
                    <FormattedString>
                        <Span text="Are You The Shop Owner ?"></Span>
                        <Span text=" Click Here" style="color:#007bff"></Span>
                    </FormattedString>
                </Label>
                </StackLayout>
            </StackLayout>
        </ScrollView> -->
    </Page>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            user: {
                email: "c1@test.com",
                password: "Darshan",
                role: "customer"
            },
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
    mounted() {
        
    },
};
</script>

<style scoped>
    
</style>