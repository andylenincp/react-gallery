import {Router} from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.json({message: 'React Gallery'})
})

export default router