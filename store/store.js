export const state = () => ({
  city: '',
  lat: '',
  lon: ''
})

export const mutations = {
  SET_LAT(state, payload) {
    state.lat = payload
  },
  SET_LON(state, payload) {
    state.lon = payload
  }
}

export const actions = {
  async fetchCity({ commit }, cityName) {
    const response = await this.$axios.get(
      `https://api.openweathermap.org/geo/1.0/direct`, {
      params: {
        appid: "3d91ba5b3c11d13158a2726aab902a0b",
        q: cityName,
      }
    })
    commit('SET_LAT', response.data[0].lat)
    commit('SET_LON', response.data[0].lng)
  },
};

// export const getters = {
//   cityCord: {

//   }
// }
//     getCounter(state) {
//       return state.counter
//     }
//   }

  // const cityId = this.cityId
  //     const data = axios.get(
  //       `http://api.openweathermap.org/geo/1.0/direct?q=${cityId}&limit=5&appid=3d91ba5b3c11d13158a2726aab902a0b`
  //       )
  //     const res = await data
  //     console.log(res)
  //     this.geoData = res.data[0]
  //     this.isClicked = true
  //     console.log(this.isClicked)
