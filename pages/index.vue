<template>
  <div>
    <h1>APP NAME</h1>
    <h2 v-if="isClicked"> {{ cityId }} </h2>
    <h2 v-else> Type in a City </h2>
    <form action="submit" @submit.prevent="sendCityName()">
      <label for="query"></label>
      <input 
      type="text"
      id="query"
      v-model="cityName"
      placeholder="Search for a city!"
    >
      <button type="submit">Submit</button>
    </form>
    <h3>{{ lat }}</h3>
    <WeatherApp 
      :someData="geoData"
      :someCity="cityId"
    />
  </div>

</template>

<script>

export default {
  data() {
    return {
    
      geoData: '',
      isClicked: false,
      cityName: ''
    }
  },
  computed: {
    coordinates () {
      return this.$store.state.lat
    }       
        //  ...mapState({
        //     cityId: (state) => state.city,
        //     lat: (state) => state.lat
        // }),
  },
  methods: {
    sendCityName() {
      this.$store.dispatch('fetchCity', this.cityName)
    }
    // ...mapMutations({
    //   submitCity: ""
    // })
  //   async submitForm() {
  //     const cityId = this.cityId
  //     const data = axios.get(
  //       `http://api.openweathermap.org/geo/1.0/direct?q=${cityId}&limit=5&appid=3d91ba5b3c11d13158a2726aab902a0b`
  //       ) 
  //     const res = await data
  //     console.log(res)
  //     this.geoData = res.data[0]
  //     this.isClicked = true
  //     console.log(this.isClicked)
  //   }
  },
}
</script>
