import ReposTable from './../../components/repos_table/repos_table.vue'

export default {
  mounted(){
    this.$parent.closeNavigation();
  },
  computed: {
    repositories(){
      return this.$parent.repositories;
    }
  },
  components:{
    ReposTable
  }
};