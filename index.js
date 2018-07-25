import Express from 'express'
require("dotenv").config()


let app = Express()

app.listen(process.env.PORT || 3000 , '0.0.0.0', function(){
	console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env)
	
})

app.use(Express.json())
app.use("/", Express.static('public'))


//require("dotenv").config()
require("./app/dbconnection")

require('./routers').set(app)

