import Router from './routers.js'

const router = new Router()

router.add('/universo', './pages/universo.html')
router.add('/exploracao', './pages/exploracao.html')
router.add('/', './pages/home.html')

router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()
