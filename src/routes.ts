import { Router } from "express";
import { createUserController } from "./UseCases/User/CreateUser";

const router = Router();


router.post('/users', (request, response) => {
	return createUserController.handle(request, response);
})

export default router;