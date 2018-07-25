import Mongoose from 'mongoose'
let Schema = Mongoose.Schema
let UserSchema = Schema({
	
	employee:{
		name:{
			type:String	
		},
		department:{
			type:String
		},
		designation:{
			type:String
		},
		email:{
			type:String,
			unique: true
		},
		contact_no:{
			type:String,

		},
		date_of_join:{
			type:Date

		},
		supervisor:{
			name:{
				type:String
			},
			designation:{
				type:String
			}
		}
	},
	date:{
		type:Date
	},
	standard_time:{
		in_time:{
			hrs:{
				type:Number
			},
			min:{
				type:Number
			},
			sec:{
				type:Number
			}
		},
		out_time:{
			hrs:{
				type:Number
			},
			min:{
				type:Number
			},
			sec:{
				type:Number
			}
		}
	},
	followed_time:{
		in_time:{
			hrs:{
				type:Number
			},
			mins:{
				type:Number
			},
			secs:{
				type:Number
			}
			
		},
		out_time:{
			hrs:{
				type:Number
			},
			mins:{
				type:Number
			},
			secs:{
				type:Number
			}
		}
	}

})



export default Mongoose.model('Attendance', UserSchema, 'attendances')
