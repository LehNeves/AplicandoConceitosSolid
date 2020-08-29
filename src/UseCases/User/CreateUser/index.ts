import { MailTrapMailProvider } from "../../../providers/implementations/MailTrapMailProvider";
import { MySQLUserRepository } from "../../../repositories/implementations/MySQLUserRepository";
import { CreateUser } from "./CreateUser";
import { CreateUserController } from "./CreateUserController";

const mailtrapMailProvider = new MailTrapMailProvider();
const mysqlUserRepository = new MySQLUserRepository();

const createUser = new CreateUser(
	mysqlUserRepository,
	mailtrapMailProvider
);

const createUserController = new CreateUserController(
	createUser
);

export { createUser, createUserController }; 
