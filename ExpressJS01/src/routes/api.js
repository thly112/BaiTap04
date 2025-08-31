const express = require('express');
const router = express.Router();
const { register, login, me, home } = require('../controllers/userController');
const homeController = require('../controllers/homeController');
const { auth } = require('../middleware/auth');
const { delay } = require('../middleware/delay');

router.get('/', (req, res) => res.json({ status: 'ok' }));
router.post('/auth/register', register);
router.post('/auth/login', login);
router.get('/home', auth, delay(500), homeController.apiHome);
router.get('/me', auth, me);

module.exports = router;
