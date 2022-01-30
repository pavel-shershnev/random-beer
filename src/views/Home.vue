<template>
  <div>
    <modal v-model="dialog" />
    <v-progress-circular v-if="user.length===0"
      :size="70"
      :width="7"
      color="purple"
      indeterminate
    ></v-progress-circular>
    <div v-else>
      <v-card width="850">
        <v-row class="row mx-auto">
          <v-col cols="12" class="pa-1">
            <v-card elevation="10">

              <v-card-title>
                <span class="d-none d-sm-flex">Hello {{user[0].first_name}} </span> 
                <div class="box">
                  <div dflex class="animation mt-2"></div> 
                  <span 
                    class="ml-2 alert" 
                    @click="dialog = !dialog"
                  >
                    You have recommended beer
                  </span>
                </div> 
              </v-card-title>

            </v-card>
          </v-col>
        </v-row>
        <v-row class="row mx-auto" >
          <v-col md="8" sm="8" cols="12" class="pa-1" >
            <v-card 
            color="#1E1E1E" 
            elevation="10" 
            height="100%"
            >
              <v-tabs :vertical="isMobile">
                <v-tab v-for="(item, idx) in tabs" :key="idx" class="tabTitle">
                    <v-icon left class="ml-1">
                      {{item.icon}}
                    </v-icon>
                  {{item.tab}}
                </v-tab>
                <v-tab-item v-for="(item, idx) in user" :key="idx" class="ma-1">
                  <card-text :user="item" />
                </v-tab-item>
              </v-tabs>
            </v-card>
          </v-col>
          
          <v-col md="4" sm="4" cols="12" class="pa-1 " >
            <v-card  elevation="10" height="430">
              <v-img
              height="100%"
                contain
                :src="user[0].avatar"
              ></v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>

<script>
import cardText from '../components/cardText.vue'
import modal from '../components/modal.vue'


export default {
  name: 'Home',
  components: {cardText, modal},
  data () {
    return {
      dialog: false,
      tab: null,
      tabs: [
        { tab: 'personal data', icon: 'mdi-account'},
        { tab: 'employment', icon: 'mdi-briefcase'},
        { tab: 'address', icon: 'mdi-map-marker'},
        { tab: 'credit card', icon: 'mdi-credit-card-chip'},
        { tab: 'subscription' , icon: 'mdi-bottle-wine'}
      ],
    }
  },
  computed: {
    isMobile() {
      switch (this.$vuetify.breakpoint.name) {
          case 'xs': return false
          case 'sm': return false
          case 'md': return true
          case 'lg': return true
          case 'xl': return true
      }
    },
    user() {
      return this.$store.getters.getUser || []
    }
  },
  methods: {
    
  },
  mounted() {
  },
}
</script>
<style scoped>
  .tabTitle{
    justify-content: left!important;
    font-size: 75%!important;
  }
  .row {
      max-width: 99%;
    }
  .box {
    position: absolute;
    right: 20px;
    font-size: 75%;
    width: auto;
    
  }
  .alert:hover {
    cursor: pointer;
  }
  .alert {

    border-bottom: 1px solid rgb(209, 88, 88)
  }
  .animation {
    float: left;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: orangered;
    animation: fadeleft .6s ease infinite alternate;
  }
  @keyframes fadeleft {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width:600px){
      .row {
        display: flex;
        flex-direction: column-reverse;
      }
      .box {
        right: 0;
      }
  }
</style>
