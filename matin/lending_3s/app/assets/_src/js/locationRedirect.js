// try {
//   $.getJSON('http://gd.geobytes.com/GetCityDetails?callback=?', (data) => {
//
//     if (data.geobytesinternet === 'EN') {
//       window.location = 'http://google.com'
//     } else if (data.geobytesinternet === 'GE') {
//       window.location = 'http://google.com'
//     } else {
//       return false
//     }
//     console.log(data)
//   })
// } catch (e) {
//   console.log(e)
// }
//
// async function getUserLocation() {
//   let response = await fetch('http://gd.geobytes.com/', {
//     headers: {
//       'Content-Type': 'application/json',
//
//     }
//   })
//
//   return response
// }
//
// getUserLocation().then((response) => {
//   console.log(response)
// })