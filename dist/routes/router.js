"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/mensajes', (req, res) => {
    res.json({
        ok: true,
        mensaje: 'Todo esta BIEN!!'
    });
});
router.post('/mensajes', (req, res) => {
    res.json({
        ok: true,
        mensaje: 'esta es una peticion post'
    });
});
exports.default = router;
