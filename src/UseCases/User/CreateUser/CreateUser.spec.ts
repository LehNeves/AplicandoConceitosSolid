import request from 'supertest';
import app from "../../../app";

describe("CRUD Users", () => {
	it('Testando criação de usúarios', async () => {
		const result = await request(app).post("/users").send({
			"name" : "Leandro",
			"email" : "leandro-nt@hotmail.com",
			"password" : "123456"
		});

		expect(result.status).toEqual(201);
	});
});