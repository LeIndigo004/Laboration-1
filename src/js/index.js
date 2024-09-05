/**
 * The main script file of the application.
 *
 * @author Leia Lindberg
 * @version 1.1.0
 */

// Select the submit button
const submitButton = document.querySelector('button')

// Fetch api when button is clicked
submitButton.addEventListener('click', () => {
  fetchApi()
})

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
