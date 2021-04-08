<template>
  <div class="container">
    <h2>Team</h2>
    <div class="cards">
      <transition appear appear-active-class="animated
      flipInX">
        <a class="card card-1" :class="{
          'light-card' : !isDarkMode, 'dark-card' : isDarkMode
        }">
          <img src="@/assets/img/slack.png" class="card-header"
          :class="{'light-header' : !isDarkMode, 'dark-header'
          : isDarkMode}"
          />
          <h3 :class="{'light-text' : isDarkMode,
          'dark-text' : !isDarkMode}">Slack</h3>
          <p :class="{'light-text' : isDarkMode,
          'dark-text' : !isDarkMode}">
            Messaging app for all team communication</p>
        </a>
      </transition>
       <transition appear appear-active-class="animated
      flipInX">
        <a class="card card-2" :class="{
          'light-card' : !isDarkMode, 'dark-card' : isDarkMode
        }">
        <img src="@/assets/img/figma.png" class="card-header"
        :class="{'light-header' : !isDarkMode, 'dark-header'
          : isDarkMode}"
        />
          <h3 :class="{'light-text' : isDarkMode,
          'dark-text' : !isDarkMode}">Figma</h3>
          <p :class="{'light-text' : isDarkMode,
          'dark-text' : !isDarkMode}">
            Collaborating design tool</p>
        </a>
      </transition>
       <transition appear appear-active-class="animated
      flipInX">
        <a class="card card-3" :class="{
          'light-card' : !isDarkMode, 'dark-card' : isDarkMode
        }">
          <img src="@/assets/img/contentful.png" class="card-header"
          :class="{'light-header' : !isDarkMode, 'dark-header'
          : isDarkMode}"
          />
            <h3 :class="{'light-text' : isDarkMode,
          'dark-text' : !isDarkMode}">Slack</h3>
          <p :class="{'light-text' : isDarkMode,
          'dark-text' : !isDarkMode}">
            Content management system.</p>
        </a>
      </transition>
       <transition appear appear-active-class="animated
      flipInX">
        <a class="card card-4" :class="{
          'light-card' : !isDarkMode, 'dark-card' : isDarkMode
        }">
          <img src="@/assets/img/slack.png" class="card-header"
          :class="{'light-header' : !isDarkMode, 'dark-header'
          : isDarkMode}"
          />
            <h3 :class="{'light-text' : isDarkMode,
          'dark-text' : !isDarkMode}">Slack</h3>
          <p :class="{'light-text' : isDarkMode,
          'dark-text' : !isDarkMode}">
            Messaging app for all team communication</p>
        </a>
      </transition>
       <transition appear appear-active-class="animated
      flipInX">
        <a class="card card-5" :class="{
          'light-card' : !isDarkMode, 'dark-card' : isDarkMode
        }" >
          <img src="@/assets/img/slack.png" class="card-header"
          :class="{'light-header' : !isDarkMode, 'dark-header'
          : isDarkMode}"
          />
            <h3 :class="{'light-text' : isDarkMode,
          'dark-text' : !isDarkMode}">Slack</h3>
          <p :class="{'light-text' : isDarkMode,
          'dark-text' : !isDarkMode}">
            Messaging app for all team communication</p>
        </a>
      </transition>
    </div>
  </div>
  
</template>

<script>
  export default {
    name: "Team",
    computed: {
      isDarkMode(){
               return this.$store.getters.isDarkMode
           }
    }
  }
</script>

<style lang="scss" scoped>
.container {

  margin-left: 25px;
}
h2 {
  @include heading-2;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: space-evenly;
}

.card {
  height: 400px;
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
  margin: 20px;
}

.card-1 {
animation-delay: 0s;
}

.card-2 {
animation-delay: 0.5s;
}

.card-3 {
animation-delay: 1s;
}

.card-4 {
animation-delay: 1.5s;
}

.card-5 {
animation-delay: 2s;
}

.card-header {
  width: 100%;
  border-radius: 10px 10px 0px 0px;
}

h3 {
  @include heading-3;
  margin-bottom: 16px;
}

p {
  font-size: 15px;
  line-height: 24px;
  text-align: left;
  margin-left: 16px;
  margin-top: 0;
}

.light-card {
  background: $white;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);

  &:hover {
    box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.15);
  }
}

.dark-card {
  background: $super-dark-blue;
  box-shadow: 0px 20px 40px rgba(255, 255, 255, 0.15);

  &:hover {
    box-shadow: 0px 30px 60px rgba(255, 255, 255, 0.15);
  }
}

.light-header {
  background: rgba(255, 255, 255, 0.15);
}

.dark-header {
  background: #2a3049;
}
</style>