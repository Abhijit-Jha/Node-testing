import express from "express";
import { prisma } from "./db"
import { vi } from "vitest";
export const app = express();
app.use(express.json());
//DEEP MOCKING
vi.mock("./db");

//UGLY WAY - mocking primsa request - we are calling prisma.sum.create 
// vi.mock("./db", () => {
//     return {
//         prisma: {
//             sum: {
//                 create: vi.fn()
//             }
//         }
//     }
// });

app.post("/sum", async (req, res) => {
    const body = req.body;
    const answer = body.a + body.b;

    //mock this request
    const resp = await prisma.sum.create({
        data: {
            a: body.a,
            b: body.a,
            answer: answer
        }
    })

    res.json({
        answer: answer,
        id : resp.id //getting from database
    }).status(200);
});
