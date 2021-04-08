<template>
    <div class="container" :class="{'ligth-background' : !isDarkMode,
    'dark-background' : isDarkMode}">
    <RequestAccount />
        <div class="login">
            <h4 :class="{'ligth-text' : isDarkMode, 
            'dark-text' : !isDarkMode}">Tryve</h4>
            <input type="email" placeholder="Email" :class="{
        'light-field' : isDarkMode,
        'dark-field' : !isDarkMode}"/>
            <input type="password" placeholder="Password" :class="{
        'light-field' : isDarkMode,
        'dark-field' : !isDarkMode}"/>
            <button>Sign In</button>
            <router-link to="/recover"  :class="{
        'ligth-link' : isDarkMode,
        'dark-link' : !isDarkMode
      }">Forgot your password?</router-link>
            <ThemeSwitch />
        </div>
    </div>
</template>

<script>
import RequestAccount from "@/components/RequestAccount"
import ThemeSwitch from "@/components/ThemeSwitch"

    export default {
        name: "SignIn",
        components: {
            RequestAccount,
            ThemeSwitch
        },
       computed: {
           isDarkMode(){
               return this.$store.getters.isDarkMode
           }
       },
       
    }
</script>

<style lang="scss" scoped>
/* .ligth-background {
    background-color: $ligth-gray;
}

.dark-background {
    background-color: $dark-blue;
}

.light-text {
    color: $white;
}

.dark-text {
    color: $black;
} */



.container {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
}

.login {
  width: 400px;
}


</style>