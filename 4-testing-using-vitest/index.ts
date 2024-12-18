import express from "express";

export const app = express();
app.use(express.json());

app.post("/sum", (req, res) => {
    const body  = req.body;
    const answer = body.a + body.b;

    res.json({
        answer : answer
    }).status(200);
});
