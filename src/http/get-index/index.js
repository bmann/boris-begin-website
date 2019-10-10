const Main = require('@architect/views/main.js')
const staticAssetsHelper = require('./static-assets-helper')

// Customize your site by changing the data below
exports.handler = async function Index () {
  let body = Main({
    /**
     * Basic bio
     */
    fullname: 'Boris Mann', // ←  Start by adding your name!
    title: 'Boris Mann @ Begin',
    occupation: 'Web Tinkerer and Open Source Hand-waver',
    location: 'Vancouver, BC, Canada',
    bio: 'Building <a href="https://fission.codes">Fission</a>, a decentralized backend-as-a-service that supports user control of data. Come <a href="https://fission.codes/discord">chat with my on the Fission Discord</a>.',

    /**
     * Contact / social
     * - Comment out any item below to remove it from your page
     */
    email: 'boris@bmannconsulting.com',
    twitter: 'bmann',
    linkedin: 'boris',
    /* instagram: 'yourInsta', */
    /* facebook: 'your-facebook-name', */

    /**
     * Layout
     */
    photographer: 'Ivana Cajina',
    service: 'Unsplash',
    credit: 'https://unsplash.com/@von_co',
    image: staticAssetsHelper('background.jpg')
    // or link to an external image URL such as ↓
    // image: 'https://images.unsplash.com/photo-1506535772317-9fdb71c959c6'
  })

  return {
    headers: {'content-type': 'text/html; charset=utf8'},
    body
  }
}
