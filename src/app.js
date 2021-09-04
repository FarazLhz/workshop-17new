const express = require("express");
require("../src/db/conn");

const MensRanking = require('../src/models/mens')

const app = express();
const port = process.env.PORT || 2000;

app.use(express.json());

//we will handle post request
app.post("/mens", async (req, res) => {
    try {
        const addingMensRecords = new MensRanking(req.body)
        console.log(req.body);
        const insertMens = await addingMensRecords.save();
        res.status(201).send(insertMens);
    } catch(e) {
        res.status(400).send(e);
    }
})

// we will handle get request
app.get("/mens", async (req, res) => {
    try {
        const getMens = await MensRanking.find({}).sort({"ranking":1});
        res.send(getMens);
        res.send(insertMens);
    } catch(e) {
        res.status(400).send(e);
    }
})

// we will handle get request individually
app.get("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getMen = await MensRanking.findById({_id});
        res.send(getMen);
    } catch(e) {
        res.status(400).send(e);
    }
})

// we will handle patch request individually
app.patch("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getMen = await MensRanking.findByIdAndUpdate(_id, req.body, {
            new:true
        });
        res.send(getMen);
    } catch(e) {
        res.status(500).send(e);
    }
})

// we will handle delete request individually
app.delete("/mens/:id", async (req, res) => {
    try {
        const getMen = await MensRanking.findByIdAndDelete(req.params.id);
        res.send(getMen);
    } catch(e) {
        res.status(500).send(e);
    }
})

app.listen(port, () => {
    console.log(`connection is live at port no ${port}`);
})