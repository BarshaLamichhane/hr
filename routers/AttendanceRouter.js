import ResourceController from "../Controllers/resource_controller"
import Attendance from "../models/Attendance"
import Express from "express"

let AttendanceController = new ResourceController(Attendance)

let Router = Express.Router()

Router.post("/", AttendanceController.create.bind(AttendanceController))

export default Router