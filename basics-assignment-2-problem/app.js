const app = Vue.createApp({
  data() {
    return {
      text: 'write something...',
      confirmedText: '',
    };
  },
  methods: {
    printAlert() {
      alert('You clicked me, how dare you!');
    },
    printTextFromInput(e) {
      this.text = e.target.value;
      if(e.target.value === ''){
        this.text = 'write something...'
      }
    },
    confirmInput() {
      this.confirmedText = this.text;
    }
  },
});
app.mount('#assignment');