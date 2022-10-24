import{ Router} from 'express'

const router = Router()

router.get('/', (req, res)=>res.render('index.ejs'))
router.get('/experiencia', (req, res)=>res.render('experiencia.ejs'))
router.get('/proyectos', (req, res)=>res.render('proyectos.ejs'))

export default router