const express = require('express')
const router = express.Router()
const itemctrl = require('../Controllers/ItemCtrl')

router.get('/select/gendercategoryitem', itemctrl.getItemGenderCategory)
router.get('/select/menoutfit', itemctrl.selectMenOutfits)
router.post('/select/add', itemctrl.addNewItem)
 




module.exports = router