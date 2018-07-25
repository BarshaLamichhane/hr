import Mongoose from 'mongoose'
let Schema = Mongoose.Schema

var validateNumber = function(v) {
	var mobileno=/^\+?(977)?-?\d{3}-?\d{3}-?\d{4}$/	
	var outsideValleyLandline=/^\+?(977)?-?(\d{3})?-?\d{3}-?\d{3}$/
	var ValleyLandline=/^\+?(977)?-?(\d{2})?-?\d{3}-?\d{4}$/
	return mobileno.test(v) || outsideValleyLandline.test(v) || ValleyLandline.test(v) 
}
/*var landlineOne = function(v) {
	//var abc=/^\+?(977)?-?(\d{3})?-?\d{3}-?\d{3}$/
	//var abc=/^\d{6}$/
	console.log(v)
	//if((abc.length)==6 || (abc.length)==9 || (abc.length)==10){
		return abc.test(v)	
	//}	
}
var landlineTwo = function(v){
	//var abc=/^\+?(977)?-?(\d{2})?-?\d{3}-?\d{4}$/
	//var abc=/^\d{7}$/
	console.log(v)
	
	//if((abc.length)==7 || (abc.length)==9 || (abc.length)==10){
		return abc.test(v)	
	//}	
}*/
var manyValidators = [
	{ validator: validateNumber, message: '{VALUE} is not a valid format' } ///,
	// { validator: landlineOne, message: '{VALUE} is not a valid format2' },
	// { validator: landlineTwo, message: '{VALUE} is not a valid format3'}
]

let UserSchema = Schema({
	username: { type: String, required: true },
	email:{	type: String, required: true},
	password: { type: String, required: true },
	contact_no:{ 
		type: String,
		/* validate: {	
			validator: function(v) {
				var abc=/^\+?(977)?-?\d{3}-?\d{3}-?\d{4}$/
				return abc.test(v)
			},
			
		 //message: '{VALUE} is not a valid phone number!'
		 },*/
		
		validate: manyValidators,
		required: [true, 'User phone number required']
	},

	abc: {
		type:String
	}
	
})



export default Mongoose.model('User', UserSchema, 'users')
