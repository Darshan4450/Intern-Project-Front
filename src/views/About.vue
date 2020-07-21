<template native>
  <Page>
    <ActionBar :title="navbarTitle" rows="auto" columns="*">
      
    </ActionBar>
    <StackLayout>
      <Button text="Home" @tap="$navigator.navigate('/home')" />
    </StackLayout>
  </Page>
</template>
<script>

  export default {
    data() {
      return {
        navbarTitle: `About.vue`
      };
    }
  };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
