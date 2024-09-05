/**
 * The main script file of the application.
 *
 * @author Leia Lindberg
 * @version 1.1.0
 */

// Select the submit button
const submitButton = document.querySelector('button')

// Fetch api when button is clicked
submitButton.addEventListener('click', (event) => {
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
function displayCountry () {
  fetchApi()
  const form = document.querySelector('form')
  const wrapper = document.querySelector('#wrapper')
  form.style.display = 'none'
  wrapper.style.backgroundColor = '#374375'
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
  } catch (error) {
    console.error(error.message)
  }
}
