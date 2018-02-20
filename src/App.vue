<template>
  <div>
    <md-toolbar class="md-medium">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title main-head">Github</h2>
      <md-field style="flex:1;">
        <md-input v-model="username" placeholder="Search username"></md-input>
      </md-field>
    </md-toolbar>
    <md-progress-bar md-mode="indeterminate" v-if="showProgress"></md-progress-bar> 
    <md-drawer :md-active.sync="showNavigation">
      <md-toolbar class="md-transparent" md-elevation="0">
        <md-button class="md-icon-button" @click="showNavigation = false">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">GitHub</span>
      </md-toolbar>
      <md-list>
        <md-list-item to="/user">
          <md-icon>face</md-icon>
          <span class="md-list-item-text">User</span>
        </md-list-item>

        <md-list-item to="/repositories">
          <md-icon>send</md-icon>
          <span class="md-list-item-text">Repositories</span>
        </md-list-item>
      </md-list>
    </md-drawer>
    <div class="main-content">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>

import { router } from './bootstrap';
import _ from 'lodash';

export default {
  name: 'GithubAppp',
  router,
  data(){
    return{
      user: null,
      showNavigation: false,
      username: null,
      repositories: [],
      showProgress  : false,
    };

  },
  methods: {
    closeNavigation(){
      this.showNavigation = false;
    },
    fetchUser(username){
      this.showProgress = true;
      this.$http.get(`users/${username}`)
        .then(({ data })=>{
          this.user = data;
        });
    },
    fetchRepositories(username){
      this.showProgress = true;
      this.$http.get(`users/${username}/repos`)
        .then(({ data } )=>{
          this.showProgress = false;
          this.repositories = data
        })
    },
    setUsername:_.debounce(function(username){
      if(username){
        this.fetchUser(username);
        this.fetchRepositories(username);
      }
      else{
        this.user = null;
        this.repositories = [];
      }
    }, 500),
  },
  watch:{
    username(value){
      this.setUsername(value);
    }
  }
}
</script>

