import UserCard from './../../components/user_card/user_card.vue';

export default {
  mounted(){
    this.$parent.closeNavigation();
  },
  computed:{
    user(){
      return this.$parent.user;
    }
  },
  components:{
    UserCard
  },
};