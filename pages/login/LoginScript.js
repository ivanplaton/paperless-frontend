import axios from 'axios';

import LoginPage from './LoginPage.vue'

export default {
    name: 'LoginPage',
    component: {
        axios,
        LoginPage
    },
    data() {
        return {
            email: '',
            password: ''
        }
    },
    computed: {
        emailState() {
          return this.email.length >= 5
        },
        passwordState() {
          return this.password.length >= 8
        },
        invalidEmailFeedback() {
          if (this.email.length > 0) {
            return 'Enter a valid email address'
          }
        },
        invalidPasswordFeedback() {
          if (this.password.length > 0) {
            return 'Enter a valid password'
          }
        }
    },
    methods: {
      login() {
        axios.post('http://139.59.118.48:8080/api/security/login',
          new URLSearchParams({ 
            username: this.email,
            password: this.password,
          }), {
          headers: { 
            'Content-Type': 'application/x-www-form-urlencoded'
          }
          }).then(function(response) {
            console.log(response)
              if (response.status === 200) {
                console.log('SUCCESS!')
              }
        });
      }
    }
}