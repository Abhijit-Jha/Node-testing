import { describe,it,expect, vi } from "vitest"; //the only change
import request from "supertest";
import { app } from ".";
import {prisma} from "./__mocks__/db"
vi.mock('./db');

describe("POST /sum",()=>{
    it("should be -1",async()=>{
        //right before you do test
        prisma.sum.create.mockResolvedValue({
            a : 1,
            b : -1,
            answer : -1,
            id : 1
        });
        const req = await request(app).post("/sum").send({
            a : 1,
            b : -2
        });
        expect(req.body.answer).toBe(-1);
        expect(req.statusCode).toBe(200);
    })
    
});