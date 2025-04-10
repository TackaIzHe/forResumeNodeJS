const {Router} = require('express')
const router = Router()
const userController = require('../controllers/userControler')

router.get('/', userController.getAll)
router.get('/:id', userController.getUser)
router.post('/', userController.postUser)
router.put('/', userController.putUser)
router.delete('/:id', userController.deleteUser)

module.exports = router