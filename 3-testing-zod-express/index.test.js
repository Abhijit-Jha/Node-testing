const { describe,it,expect } = require("@jest/globals");
const request = require("supertest");
const { app } = require(".");


describe("POST /sum",()=>{
    it("should be -1",async()=>{
        const req = await request(app).post("/sum").send({
            a : 1,
            b : -2
        });
        expect(req.body.answer).toBe(-1);
        expect(req.statusCode).toBe(200);
    })
    

    it("should be Incorrect INPUTS",async()=>{
        const req = await request(app).post("/sum").send({
            a : ["sfa"],
            b : -1
        });
        expect(req.statusCode).toBe(400);
        expect(req.body.error).toBe("Incorrect INPUTS");
    })
})