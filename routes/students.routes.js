import express from 'express' ; 
//Appel de notre model
import * as  store from "../store/students.store.js"

const router = express.Router();

//Endpoints
router.get("/",async(_, res) => {
    const items = await store.getAll({page: 1 , limit: 100}) ; 
    //res.json(items);
     res.render("students/index", { items});
})


router.get("/api",async(_, res) => {
    const items = await store.getAll({page: 1 , limit: 100}) ; 
    res.json(items);
})

router.post("/api",async(req, res) => {
    const created =await store.create(req.body);
    res.status(201).json(created);
})

export default router ; 