const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'finish the course and learn Vue',
      courseGoalB: '<h2>Master Vue and build amazing aps</h2>',
      vueLink:
        'https://v3.vuejs.org/guide/introduction.html#declarative-rendering',
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount('#user-goal');
