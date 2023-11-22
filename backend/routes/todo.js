const express = require('express');
const router = express.Router();
const {todos ,postTodo} = require('../controllers/todos')


router.route('/get').get(todos);
router.route('/post').post(postTodo);

module.exports = router