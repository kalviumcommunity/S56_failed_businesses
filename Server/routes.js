const express = require("express");
const router = express.Router();

router.get("/get", (req, res, next) => {
    try {
        res.send("Get request on home page");
    } catch (error) {
        next(error); 
    }
});

router.post("/post", (req, res, next) => {
    try {
        res.send("Post request on home page");
    } catch (error) {
        next(error);
    }
});

router.patch("/patch", (req, res, next) => {
    try {
        res.send("Patch request on home page");
    } catch (error) {
        next(error);
    }
});

router.delete("/delete", (req, res, next) => {
    try {
        res.send("Delete request on home page");
    } catch (error) {
        next(error);
    }
});
module.exports = router;
