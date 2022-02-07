document.getElementById('button1').addEventListener('click', getText)
document.getElementById('button2').addEventListener('click', getJson)
document.getElementById('button3').addEventListener('click', getGithubUsers)

// Handling Errors
function handleErrors(res) {
  // handling errors
  if (!res) throw new Error(res.error)
  // returning res
  return res
}

// Getting Text Locally
function getText() {
  // fetching data from text file
  fetch('test.txt')
    // fetching data from text file
    .then(function (res) {
      return res.text()
    })
    // handling errors
    .then(handleErrors)
    // displaying data
    .then(function (data) {
      console.log(data)
      document.getElementById('output').innerHTML = data
    })
    // handling errors
    .catch(function (err) {
      console.log(err)
    })
}

// Getting JSON Locally
function getJson() {
  // fetching data from json file
  fetch('users.json')
    // converting data to json
    .then(function (res) {
      return res.json()
    })
    // handling errors
    .then(handleErrors)
    // displaying data
    .then(function (data) {
      console.log(data)
      let output = ''
      // looping through data
      data.forEach(function (user) {
        output += `<li>${user.username}</li>`
      })
      // displaying data
      document.getElementById('output').innerHTML = output
    })
    // handling errors
    .catch(function (err) {
      console.log(err)
    })
}

// Getting Data From an External API
function getGithubUsers() {
  // fecting data from github api
  fetch('https://api.github.com/users')
    // converting data to json
    .then(function (res) {
      return res.json()
    })
    // handling errors
    .then(handleErrors)
    // displaying data
    .then(function (data) {
      console.log(data)
      let output = ''
      // looping through data
      data.forEach(function (post) {
        output += `<li>${post.login}</li>`
      })
      // displaying data
      document.getElementById('output').innerHTML = output
    })
    // handling errors
    .catch(function (err) {
      console.log(err)
    })
}
