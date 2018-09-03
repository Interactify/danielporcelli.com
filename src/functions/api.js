export const getSlides = () => {
  return fetch(`/_slider.json`, { accept: 'application/json'}).then(function(response) {
    if (response.status >= 400) {
      throw new Error("Bad response from server")
    }
    return response.json()
  }).then(function(data) {
      console.log(data)
    return data
  })
}
