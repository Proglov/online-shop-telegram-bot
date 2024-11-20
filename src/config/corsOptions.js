require('dotenv').config();

const api = process.env.BackEnd_API

var allowlist = [api]

if (process.env.ENVIRONMENT === 'dev') allowlist.push("http://localhost:4500")

var corsOptions = function (req, callback) {
    var corsOptionsDelegate;
    if (allowlist.indexOf(req.header('Origin')) !== -1) {
        corsOptionsDelegate = {
            origin: true, // reflect (enable) the requested origin in the CORS response
            credentials: true // Enable credentials
        };
    } else {
        corsOptionsDelegate = { origin: false };
    }
    callback(null, corsOptionsDelegate); // callback expects two parameters: error and options
};

module.exports = corsOptions