const { Router } = require("express");
const {
  getDatosController,
  postDatosController,
} = require("../controllers/productsContoller");

const router = new Router();

router.get("/", getDatosController);
router.post("/", postDatosController);
