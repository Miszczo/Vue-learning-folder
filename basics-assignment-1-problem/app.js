const app = Vue.createApp({
  data() {
    return {
      outputName: 'Mike',
      outputAge: 26,
      imageLink: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg'
    };
  },
  methods: {
    outputRandomNumber() {
      const randomNumber = Math.random() +1;
      return randomNumber;
    },
  },
});

app.mount('#assignment');
