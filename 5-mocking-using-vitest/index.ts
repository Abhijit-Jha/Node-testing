import express from "express";
import { prisma } from "./db"
import { vi } from "vitest";
export const app = express();
app.use(express.json());
//mocking primsa request - we are calling prisma.sum.create 
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
    await prisma.sum.create({
        data: {
            a: body.a,
            b: body.b,
            answer: answer
        }
    })

    res.json({
        answer: answer
    }).status(200);
});
