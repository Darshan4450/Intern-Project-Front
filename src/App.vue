<template>
  <Page>
    <GridLayout>
      <Navigator :defaultRoute="$store.state.Auth.isAuth ? '/dashboard' : '/login'"/>
      <ActivityIndicator rowSpan="3" :busy="$store.state.loading"></ActivityIndicator>
    </GridLayout>
  </Page>
</template>
<script>
  const { VUE_APP_MODE } = process.env;
  export default {
    data() {
      return {
        
      };
    },

  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
