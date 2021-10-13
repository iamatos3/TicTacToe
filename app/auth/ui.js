const store = require('../store')

const signUpSuccess = function (responseData) {
  $('#ttt-display').text('Successfully signed up!')

  $('#ttt-display').removeClass()
  $('#ttt-display').addClass('text-success')

  $('form').trigger('reset')
  console.log('responseData is', responseData)
}

const signUpFailure = function (error) {
  $('#error-message').text('Sign up failed. Please try again.')

  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  console.error(error)
}

const signInSuccess = function (responseData) {
  store.user = responseData.user
  console.log('store is', store)

  $('#ttt-display').text('Sign in was successful')
  $('#ttt-display').removeClass()
  $('#ttt-display').addClass('text-success')

  $('form').trigger('reset')

  $('#before-sign-in').hide()
  $('#after-sign-in').show()

  console.log('responseData is', responseData)
}

const signInFailure = function (error) {
  $('#error-message').text('The username or password was incorrect. Please try again.')

  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  console.error(error)
}

const changePasswordSuccess = function (responseData) {
  $('#ttt-display').text('Password change was successful!')

  $('ttt-display').removeClass()
  $('ttt-display').addClass('text-success')

  $('form').trigger('reset')

  console.log('responseData is', responseData)
}

const changePasswordFailure = function (error) {
  $('error-message').text('Change password attempt has failed. Please try again.')

  $('error-message').removeClass()
  $('error-message').addClass('text-danger')

  console.error(error)
}

const signOutSuccess = function () {
  $('#ttt-display').text('Sign out was successful!')
  $('#ttt-display').addClass('text-success')

  $('form').trigger('reset')

  $('#before-sign-in').show()
  $('#after-sign-in').hide()
}

const signOutFailure = function (error) {
  $('#error-message').text('Unable to sign out, please try again.')

  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
