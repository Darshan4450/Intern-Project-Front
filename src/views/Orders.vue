<template>
  <Page actionBarHidden="true">
    <StackLayout>
      <RadListView for="order in orders">
        <v-template>
          <FlexboxLayout class="card">
              <Image src="~/assets/images/youtube-profile.png" class="card-image" />
            <FlexboxLayout class="card-body">
                <FlexboxLayout class="card-content">
                  <Label :text="'From: '+order.from" />
                  <Label :text="'Order No.: '+order.id" />
                </FlexboxLayout>
                <FlexboxLayout class="card-content">
                    <Label :text="order.status" />
                    <Label :text="'Amount: '+order.amount" />
                </FlexboxLayout>
            </FlexboxLayout>
          </FlexboxLayout>
        </v-template>
      </RadListView>
    </StackLayout>
  </Page>
</template>

<script>
import Vue from 'nativescript-vue'
import RadListView from 'nativescript-ui-listview/vue';
Vue.use(RadListView);
export default {
  data() {
    return {
      orders: [
                {
                    id: 12354,
                    date: '2020-05-11',
                    amount: 500,
                    from: 'Any Name',
                    status: 'pending'
                },
                {
                    id: 12354,
                    date: '2020-05-11',
                    from: 'Any Name',
                    status: 'pending',
                    amount: 500
                },
                {
                    id: 12354,
                    date: '2020-05-11',
                    from: 'Any Name',
                    status: 'pending',
                    amount: 500
                }
            ]
    }
  }
}
</script>

<style scoped>
.card {
    padding: 5;
}
.card-image {
    width: 10%;
    height: 10%;
}
.card-body {
    padding: 5;
    flex: 1;
    flex-direction: column;
}
.card-content {
    justify-content: space-between;
}
</style>