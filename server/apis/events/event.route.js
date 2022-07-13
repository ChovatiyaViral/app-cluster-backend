const express = require('express');
const EventCtrl = require('./event.controller');
const auth = require('../../../middleware/checkAuthentication');


const router = express.Router();

router.route('/html/pdf')
    .post(EventCtrl.eventPDF)

router.route('/html')
    .post(EventCtrl.eventHTML)

router.route('/edit/:id')
    .put(auth, EventCtrl.editEvent)

router.route('/delete/:id')
    .delete(auth, EventCtrl.deleteEvent)

router.route('/add')
    .post(auth, EventCtrl.createEvent);

router.route('/')
    .post(auth, EventCtrl.getEventData)



module.exports = router;