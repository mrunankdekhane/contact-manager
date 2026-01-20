const express = require("express");
const { getContact, createContact, getContactById, updateContact, deleteContact } = require("../controller/contact")
const router = express.Router();

router.get("/", getContact);

router.get("/:id", getContactById);

router.post("/", createContact);

router.put("/:id", updateContact);

router.delete("/:id", deleteContact);

module.exports = router;