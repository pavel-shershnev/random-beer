<template>
  <div>
    <v-card flat v-for="(item, idx) in userData" :key="idx" v-show="item[0] != 'avatar'">
      <v-card-text class="pa-1 pb-2 ma-1"><strong>{{ toUp(item[0]) }}: </strong><span class="grey--text">{{ item[1] }}</span></v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['user'],
  computed: {
    userData(){   
       return Object.entries(this.user)
    }
  },
  methods: {
    toUp(str){
        return str.charAt(0).toUpperCase() + str.slice(1)
      },
  },
}
</script>