const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName; 
    },
    confirmInput(event) {
      this.confirmedName = this.name;
      event.target.value = '';
    },
    submitForm() {
      alert('submitted');
    },
    counterIncrement(num) {
      this.counter = this.counter + num;
    },
    counterDecrement(num) {
      this.counter = this.counter - num;
      if (this.counter < 0) {
        this.counter = 0;
      }
    },
  },
});

app.mount('#events');
