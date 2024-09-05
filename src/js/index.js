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

    // Create a new header
    const h1 = document.createElement('h1')
    // Put the countrys name as the header
    h1.innerHTML = country.name.common
    h1.setAttribute('class', 'countryName')
    h1.style.color = '#FFFCF5'
    wrapper.appendChild(h1)

    // Get the flag image for the country
    const flagImage = document.createElement('IMG')
    flagImage.setAttribute('src', country.flags.png)
    flagImage.setAttribute('alt', country.flags.alt)
    wrapper.appendChild(flagImage)

    // Add a smaller text as a welcome message
    const name = document.querySelector('input')
    const h3 = document.querySelector('h3')
    h3.innerHTML = `Welcome ${name.value} to ${country.name.common}!`
    h3.style.color = '#FFFCF5'
    wrapper.appendChild(h3)

    // Get the country capital
    const capital = document.createElement('p')
    capital.innerHTML = `Capital: ${country.capital[0]}`
    wrapper.appendChild(capital)

    // Get the country region
    const region = document.createElement('p')
    region.innerHTML = `Region: ${country.region}`
    wrapper.appendChild(region)

    // Get the country language
    const language = document.createElement('p')
    language.innerHTML = `Language: ${Object.values(country.languages)[0]}`
    wrapper.appendChild(language)

    // Get the map of the country
    const map = document.createElement('a')
    map.setAttribute('href', country.maps.googleMaps)
    map.innerHTML = 'Show map'
    wrapper.appendChild(map)
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
    // log the country
    console.log(randomCountry)

    return randomCountry
  } catch (error) {
    console.error(error.message)
  }
}
