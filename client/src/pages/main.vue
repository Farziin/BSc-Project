<template>
  <b-container fluid>
    <vue-headful title="صفحه اصلی سناریوساز"/>
    <header-part></header-part>
    <b-row>
      <b-col cols="3"></b-col>
      <b-col cols="8">
        <b-card title="به سناریوساز خوش آمدید"
          img-src="../assets/pics/iot_pic.png"
          img-alt="ایترنت اشیاء"
          img-top
          tag="article"
          style="max-width: 80%;"
          class="mb-3"
          align="center">
          <p class="card-text">
            این پروژه مربوط به پروژه کارشناسی فرزین حیدری به شماره دانشجویی 9331060 می‌باشد.
          </p>
          <div slot="footer">
            <p>
              برای شروع فرآیند کشیدن و تعریف سناریو ابتدا وارد سایت شوید و سپس، سناریوی جدیدی را ایجاد و یه به ویرایش سناریوهای پیشین بپردازید.
            </p>
            <b-button href="#/login" variant="primary">{{ btnText }}</b-button>
          </div>
        </b-card>
      </b-col>
      <b-col cols="3"></b-col>
    </b-row>
  </b-container>
</template>

<script>
import HeaderPart from '../components/header'

export default {
  components: {
    HeaderPart
  },
  data () {
    return {
      btnText: 'ورود'
    }
  },
  mounted: function () {

  }
}
</script>

<style>
</style>
