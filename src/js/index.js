/**
 * The main script file of the application.
 *
 * @author Leia Lindberg
 * @version 1.1.0
 */

// Select the submit button
const submitButton = document.querySelector('form')

// Fetch api when button is clicked
submitButton.addEventListener('submit', (event) => {
  event.preventDefault()
  const name = document.querySelector('input')
  // If the field is empty when clicking submit
  if (name.value === '') {
    const h3 = document.querySelector('h3')
    h3.innerHTML = 'Please write your name before submitting!'
  } else {
    displayCountry()
  }
})

// Display a new country when button is clicked
document.getElementById('go-back').addEventListener('click', displayCountry)

/**
 * A function for displaying the given country.
 */
async function displayCountry () {
  try {
    // Get the country from fetchApi function
    const country = await fetchApi()

    // Select the form
    const form = document.querySelector('form')
    // Select the wrapper
    const wrapper = document.querySelector('#wrapper')

    // Make form invisible
    form.style.display = 'none'
    wrapper.style.backgroundColor = '#374375'
    document.querySelector('.country-viewer').style.display = 'flex'

    // Create a new header
    document.querySelector('.country-name').innerHTML = country.name.common

    // Get the flag image for the country
    const flagImage = document.querySelector('img')
    flagImage.setAttribute('src', country.flags.png)
    flagImage.setAttribute('alt', country.flags.alt)

    // Add a smaller text as a welcome message
    const name = document.querySelector('input')
    document.getElementById('greeting').innerHTML = `Welcome ${name.value} to ${country.name.common}!`

    // Get the country capital
    document.getElementById('capital')
      .innerHTML = `Capital: ${country.capital[0]}`

    // Get the country region
    document.getElementById('region')
      .innerHTML = `Region: ${country.region}`

    // Get the country language
    document.getElementById('language')
      .innerHTML = `Language: ${Object.values(country.languages)[0]}`

    // Get the map of the country
    const map = document.getElementById('map')
    map.setAttribute('href', country.maps.googleMaps)
    map.innerHTML = 'Show map'
  } catch (error) {
    console.error(error.message)
  }
}

/**
 * Get the response from the api.
 *
 * @returns {Promise<object>} The response data.
 */
async function fetchApi () {
  // Api url
  const api = 'https://restcountries.com/v3.1/all'
  try {
    // Fetch api
    const res = await fetch(api)
    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`)
    }
    // Get the countries
    const data = await res.json()

    // Get a random index
    const randomIndex = Math.floor(Math.random() * data.length)
    const randomCountry = data[randomIndex]

    return randomCountry
  } catch (error) {
    console.error(error.message)
  }
}
