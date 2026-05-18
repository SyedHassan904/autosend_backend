const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController.js');

router.get('/', notificationController.getNotifications);
router.post('/', notificationController.addNotification);

module.exports = router;
