
<template>
  <b-container fluid>
    <b-modal v-model="modalShow" hide-footer>
      <p class="text-center">لطفاً ابتدا وارد سایت شوید.</p>
    </b-modal>

    <b-navbar toggleable="md" type="dark" variant="dark">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand>سناریوساز</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item href="#/login" v-if="showName === false">ورود</b-nav-item>
          <b-nav-item v-if="showName === true">سلام {{ $store.state.name }} عزیز</b-nav-item>
          <b-nav-item v-on:click="addScenario">ایجاد سناریوی جدید</b-nav-item>
          <b-nav-item href="#">ویرایش سناریوی موجود</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      showName: false,
      modalShow: false
    }
  },
  created: function () {
    if (this.$store.state.token !== null) {
      this.showName = true
    } else {
      this.showName = false
    }
  },
  methods: {
    addScenario: function () {
      // if (this.$store.state.token === null) {
      //   this.modalShow = true
      // } else {
      this.$router.push('/add-scenario')
      // }
      // TODO
    }
  }
}
</script>

<style>

</style>
