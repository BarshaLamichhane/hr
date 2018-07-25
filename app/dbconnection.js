
var mongoose = require('mongoose')
var globalUri = `mongodb://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}`

var mongodbUri = globalUri

mongoose.connection.openUri(mongodbUri)

var conn = mongoose.connection
conn.on('error', function () {
	console.log('connection error: Unable to connect to MongoDB')
})
conn.on('connected', function () {
	console.log('connected: MongoDB Connected')
})
conn.on('disconnected', function () {
	console.log('disconnected: MongoDB disconnected')
})



module.exports = conn
