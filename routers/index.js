
import SignupRouter from "./SignupRouter"
import AttendanceRouter from "./AttendanceRouter"

export function set(app){
	app.use("/signup", SignupRouter)
	app.use("/attendance", AttendanceRouter)
}