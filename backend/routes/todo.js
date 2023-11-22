const express = require('express');
const router = express.Router();
const {todos ,postTodo,updateTodo,deletetodo,deletealltodo} = require('../controllers/todos')


router.route('/get').get(todos);
router.route('/post').post(postTodo);
router.route('/post/:id').put(updateTodo).delete(deletetodo)
router.route('/deleteall').delete(deletealltodo)

module.exports = router