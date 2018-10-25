<template>
  <b-container class="root">
    <vue-headful title="صفحه ورود"/>
    <b-alert :show="dismissCountDown"
             dismissible
             variant="danger"
             @dismissed="dismissCountDown=0"
             @dismiss-count-down="countDownChanged">
             <p>{{ errorText }}</p>
    </b-alert>
    <b-card header="ورود به سیستم">
      <b-form @submit="login">
        <!-- email input field -->
        <b-form-group label="نام کاربری: " label-for="usrname-input" >
          <b-form-input id="usrname-input" type="email" v-model="form.email" required placeholder="لطفا نام کاربری خود را وارد کتید">
          </b-form-input>
        </b-form-group>

        <!-- password input field -->
        <b-form-group label="رمز عبور: " label-for="passwd-input" >
          <b-form-input id="passwd-input" type="password" v-model="form.password" required placeholder="لطفا رمز عبور خود را وارد کنید">
          </b-form-input>
        </b-form-group>
        <b-button type="submit" variant="success">ورود</b-button>
      </b-form>
    </b-card>
  </b-container>
</template>

<script>
import api from '../services/platform_api'

export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      dismissSecs: 5,
      dismissCountDown: 0,
      errorText: ''
    }
  },
  methods: {
    login (evt) {
      evt.preventDefault()
      var self = this
      api().post('login', {email: self.form.email, password: self.form.password})
        .then(function (response) {
          console.log(response.data.result.token)
          if (response.data.code !== 200) {
            self.errorText = 'نام کاربری یا رمز عبور نادرست می‌باشد.'
            self.dismissCountDown = self.dismissSecs
          } else {
            console.log('LOGGED IN SUCCESSFULLY!')
            self.$store.dispatch('setUser', {token: response.data.result.token, email: response.data.result.user.email, name: response.data.result.user.name})
            self.$router.push('/')
          }
        })
        .catch(function (err) {
          self.errorText = 'لطفا دوباره تلاش نمایید؛ خطا در ارتباط با سرور به وجود آمده است.'
          console.log('LOGIN ERROR: ' + err)
          self.dismissCountDown = self.dismissSecs
        })
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    }
  }
}
</script>

<style>
.root {
  margin-top: 40px;
}
</style>
