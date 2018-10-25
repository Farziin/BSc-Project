<template>
  <b-container fluid>
    <vue-headful title="طول مدت تست"/>
    <header-part></header-part>
    <br/>
    <!-- second/minute/hour/day/month/year (dmy) select -->
    <b-container>
      <b-form-select v-model="dmySelected" :options="dmyOptions"></b-form-select>
      <br/>
      <br/>
      <b-input-group size="md" :prepend="dmySelected.text" class="custom-input-group" v-if="dmySelected !== null">
        <b-form-input placeholder="لطفا بازه کلی موردنظر برای تست برنامه را وارد نمایید."
          type="number" class="custom-input" v-model="inputValue"/>
      </b-input-group>
      <br/>
      <br/>
      <!-- next step button -->
      <b-btn @click="goNextStep" v-if="dmySelected !== null" variant="primary">مرحله بعد</b-btn>
    </b-container>
  </b-container>
</template>

<script>
import HeaderPart from '../../components/header'

export default {
  components: {
    HeaderPart
  },
  data () {
    return {
      dmyOptions: [
        { value: null, text: '-- لطفا یک گزینه را انتخاب کنید --', disabled: true },
        { value: { value: 1, text: 'ثانیه' }, text: 'ثانیه' },
        { value: { value: 2, text: 'دقیقه' }, text: 'دقیقه' },
        { value: { value: 3, text: 'ساعت' }, text: 'ساعت' },
        { value: { value: 4, text: 'روز' }, text: 'روز' },
        { value: { value: 5, text: 'ماه' }, text: 'ماه' },
        { value: { value: 6, text: 'سال' }, text: 'سال' }
      ],
      dmySelected: null,
      inputValue: ''
    }
  },
  methods: {
    goNextStep: function () {
      this.$router.push({name: 'add-conditions',
        params: {
          durationType: this.dmySelected,
          durationValue: this.inputValue
        }})
    }
  }
}
</script>

<style>
.custom-input-group {
  direction: ltr;
}

.custom-input {
  direction: rtl;
}
</style>
