const fs = require('fs-extra')
const os = require("os")
const fetch = require("node-fetch")

const { JPM_ENDPOINT } = require('../constants/jpmEndpoint')
const { JPM_CACHE } = require('../utils/jpmCache')

async function login({ email, password }) {

    // email = 'hello@luisanton.io'
    // password = 'password'
    const response = await fetch(`${JPM_ENDPOINT}/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })
    const jwt = await response.json()

    console.log("🚀 Logged in. Welcome to Jolie Package Manager.")
    JPM_CACHE.write({ jwt })
}

module.exports = { login }