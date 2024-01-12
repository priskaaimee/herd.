import { initializeApp } from "firebase/app"

initializeApp();
import {getFirestore} from "firebase/firestore"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBSB_O4DR2GpaleZvfwKf4INUa_K1q2uC0",
  authDomain: "herd-b37b5.firebaseapp.com",
  projectId: "herd-b37b5",
  storageBucket: "herd-b37b5.appspot.com",
  messagingSenderId: "944567502522",
  appId: "1:944567502522:web:a93dda6b74a9afc09a2483",
  measurementId: "G-M3F9MTZW0W",
}

initializeApp(firebaseConfig)
    
const auth = getAuth()

//pick on login or signup
const pickForm = document.querySelector('.pick')

const pickLoginButton = document.querySelector('.pickLogin')
pickLoginButton.addEventListener('click', (e) => {
    e.preventDefault()
    pickForm.hidden = true
    loginForm.hidden = false
    back.hidden = false
})

const pickSignUpButton = document.querySelector('.pickSignUp')
pickSignUpButton.addEventListener('click', (e) => {
    e.preventDefault()
    pickForm.hidden = true
    signupForm.hidden = false
    back.hidden = false
})

//for back
const back = document.querySelector('.back')
back.addEventListener('click', (e) => {
    e.preventDefault()
    pickForm.hidden = false
    signupForm.hidden = true
    loginForm.hidden = true
    back.hidden = true
})

//signup
const signupForm = document.querySelector('.signup')
signupForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = signupForm.email.value
  const password = signupForm.password.value

  createUserWithEmailAndPassword(auth, email, password)
    .then(cred => {
        showMessage('Account has been succesfully created!')
        signupForm.hidden = true
        logoutButton.hidden = false
        back.hidden = true
    })
    .catch(err => {
        showMessage(err.message)
    })
})

//login
const loginForm = document.querySelector('.login')
loginForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = loginForm.email.value
  const password = loginForm.password.value

  signInWithEmailAndPassword(auth, email, password)
    .then(cred => {
        showMessage('Login successful!')
        signupForm.hidden = true
        logoutButton.hidden = false
        back.hidden = true
    })
    .catch(err => {
        showMessage(err.message)
    })
})

//logout
const logoutButton = document.querySelector('.logout')
logoutButton.addEventListener('click', (e) => {
    e.preventDefault()
    signOut(auth)
    .then(() => {
        showMessage('Succesfully signed out')
        pickForm.hidden = false
        back.hidden = true
    })
    .catch(err => {
        showMessage(err.message)
    })
})

//function to show message
function showMessage(message) {

    const messageElement = document.createElement('div')
    
    messageElement.textContent = message
  
    messageContainer.appendChild(messageElement)
  
    setTimeout(() => {
      messageElement.remove()
    }, 5000)
  }