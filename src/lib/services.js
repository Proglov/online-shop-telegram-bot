require('dotenv').config();

const api = process.env.BackEnd_API

const login = async (obj) => {
    const response = await fetch(api + '/telegramBot/login', {
        method: 'POST',
        body: JSON.stringify(obj)
    })

    return response.status
}

// const checkStatus = async (obj) => {
//     const response = await fetch(api + '/telegramBot/checkStatus', {
//         method: 'POST',
//         body: JSON.stringify(obj)
//     })
// }

module.exports = {
    login,
}