<template>
  <v-dialog
    v-model="dialog"
    max-width="600"
    
  >
    <v-card>
      <v-card-title class="pb-0">
          <v-btn @click="otherBeer">Other beer</v-btn>
          <v-spacer></v-spacer>
          <v-icon
          @click="dialog = false"
          right>
            mdi-close-circle
          </v-icon>
      </v-card-title>
      <v-row class="my-6 mx-3" >
        <v-col  md="4" sm="4" cols="12" class="pa-2">
          <v-card height="100%" >
            <v-img src="../assets/img/beer.png" contain :max-height="isMobile" class="mx-0" ></v-img>
          </v-card>
        </v-col>
        <v-col  md="8" sm="8" cols="12" class="pa-1 ">
          <v-card>
            <card-text :user="beer" />
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>

import cardText from './cardText.vue'

export default {
  components: {cardText},
  props: ['value'],
  computed: {
    isMobile() {
      switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 200
          case 'sm': return 200
          case 'md': return ''
          case 'lg': return ''
          case 'xl': return ''
      }
    },
    dialog: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    },
    beer(){
      return this.$store.getters.getBeer
    }
  },
  methods: {
    async otherBeer(){
      await this.$store.dispatch('getBeer')
    }
  },
}
</script>