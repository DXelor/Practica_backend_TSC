import { Router, Request, Response } from 'express';

const router = Router();

router.get('/mensajes', (req: Request, res:Response)=>{
    res.json({
        ok:true,
        mensaje: 'Todo esta BIEN!!'
    });
});
router.post('/mensajes', (req: Request, res:Response)=>{
    res.json({
        ok:true,
        mensaje: 'esta es una peticion post'
    });
});

export default router;