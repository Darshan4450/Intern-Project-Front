<template native>
  <Page>
    <ActionBar :title="navbarTitle" />
    <StackLayout>
      <Button text="About" @tap="$navigator.navigate('/about')" />
      
    </StackLayout>
  </Page>
</template>
<script>

  export default {
    data() {
      return {
        navbarTitle: `Home.vue`,
        msg: `Mode=${'Mobile'} and Platform=${'Android'}`
      };
    },
  };

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
