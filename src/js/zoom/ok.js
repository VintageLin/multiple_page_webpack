export default {
  init () {
    console.log('this is ok.js')
    setTimeout(() => {
      this.error()
    }, 1000)
  },
  error () {
    throw Error('this is a error')
  }
}
