import ResourceController from "../Controllers/resorce_controller"
import Signup from "../models/signup"
import Express from "express"

let SignupController = new ResourceController(Signup)

let Router = Express.Router()

Router.post("/", SignupController.create.bind(SignupController))

export default Router