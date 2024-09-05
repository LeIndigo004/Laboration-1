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
  const api = 'https://bored-api.appbrewery.com/random'
  try {
    // Fetch api
    const res = await fetch(api)
    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`)
    }
    const data = await res.json()

    // Return the data
    return data
  } catch (error) {
    console.error(error.message)
  }
}
