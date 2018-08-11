<template>
  <b-container>
    <b-card title="انتخاب نام برای سناریو"
                header-tag="header">
            <h6 slot="header"
                class="mb-0">به سناریوساز خوش آمدید</h6>
            <br/>
            <input :value="name" @input="$emit('update:name', $event.target.value)"
              type="text"
              class="input-btn"
              placeholder="لطفا نام موردنظر خود برای سناریو را وارد کنید."/>
        </b-card>
  </b-container>
</template>

<script>
export default {
  props: [
    'name'
  ],
  data () {
    return {
    }
  }
}

</script>

<style>
.input-btn {
  width: 80%;
  height: 50px;
  padding: 5px;
}
</style>
