import { describe,it,expect } from "@jest/globals";
import request from "supertest"
import { app } from ".";


describe("POST /sum",()=>{
    it("should be -1",async()=>{
        const req = await request(app).post("/sum").send({
            a : 1,
            b : -2
        });
        expect(req.body.answer).toBe(-1);
        expect(req.statusCode).toBe(200);
    })
    
})