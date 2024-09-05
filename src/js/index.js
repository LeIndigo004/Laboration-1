/**
 * The main script file of the application.
 *
 * @author Leia Lindberg
 * @version 1.1.0
 */

// Select the body element
const bodyElement = document.querySelector('body')
// Create a form element
const form = document.createElement('form')

// Create an input element for a name
const inputName = document.createElement('input')
// Set the type
inputName.type = 'text'

// Create a Header 1
const headerText = document.createElement('h1')
// Add the text
headerText.innerHTML = 'Write your name here'

// Append the input and header to the form
form.appendChild(headerText)
form.appendChild(inputName)
// Append the form to the body
bodyElement.appendChild(form)
