import express from "express";
import zod from "zod"

const sumSchema = zod.object({
    a : zod.number(),
    b : zod.number()
})
export const app = express();
app.use(express.json());

app.post("/sum", (req, res) => {
    const body = req.body;
    const resp = sumSchema.safeParse(body)
    if(!resp.success){
        res.status(400).json({
            "error" : "Incorrect INPUTS",
        });
        return
    }

    const answer = resp.data.a + resp.data.b;

    res.json({
        answer
    }).status(200);
});
