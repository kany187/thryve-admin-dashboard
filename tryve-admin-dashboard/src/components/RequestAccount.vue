<template>
    <transition name="slide-in-right" 
    enter-active-class="animated slideInRight"
    >
        <div 
        v-show="show"
        class="request">Don't have a tryve account?
            <router-link to="/request">Request an account</router-link>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "RequestAccount",
        data(){
            return {
                show: false
            }
        },
        mounted(){
            this.show = true
        },
        computed: {
           isDarkMode(){
               return this.$store.getters.isDarkMode
           }
       }
    }
</script>

<style lang="scss" scoped>
.request {
  position: absolute;
  top: 40px;
  right: 40px;
}

.light-request {
  color: rgba(255, 255, 255, 0.5);

  a {
    color: $white;
  }
}

.dark-request {
  color: rgba(0, 0, 0, 0.3);

  a {
    color: $black;
  }
}
</style>