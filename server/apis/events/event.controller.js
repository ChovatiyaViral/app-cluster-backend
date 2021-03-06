const Events = require('./event.model');
const { getEventHtmlFile, getEventHtmlPdf } = require('../../../HtmlToPdf');
const email = require('../../../MailSend');
const { pagination } = require("../../../utility")

const getEventData = async (req, res, next) => {
    try {
        const totalData = await Events.count();

        const eventData = await Events.find().skip((req.body.page - 1) * 5).limit(req.body.limite);
        res.status(200).send({ totalData, eventData })
    } catch (err) {
        next(err);
    }
};

const createEvent = async (req, res, next) => {
    try {

        const { event_name, event_address, description } = req.body;

        if (!(event_name && event_address && description)) {
            res.status(400).send("All input is required");
        }

        const event = new Events({
            event_name, event_address, description
        });

        const eventData = await event.save();

        const allEventData = await Events.find({});
        res.status(200).json(allEventData)

    } catch (e) {
        next(e)
    }
}

const deleteEvent = async (req, res, next) => {
    try {
        const { id } = req.params;

        const findId = await Events.find({ id });


        if (!findId) {
            res.status(400).send("record not avilable in data");
        }

        Events.findByIdAndRemove(id, async (err, doc) => {
            if (!err) {
                const allData = await Events.find({});
                res.status(200).json(allData)
            } else {
                res.status(400).send("record not avilable in data");
            }
        })

    } catch (error) {
        next(error)
    }
}


const editEvent = async (req, res, next) => {
    try {
        const { id } = req.params;

        const { event_name, event_address, description } = req.body;

        const findId = await Events.findOne({ id });


        if (!findId) {
            res.status(400).send("record not avilable in data");
        }

        const updateEventData = await Events.findByIdAndUpdate({ _id: id }, {
            event_name,
            event_address,
            description
        }
        )

        const allData = await Events.find({});
        res.status(200).json(allData)

    } catch (error) {
        next(error)
    }
}

const eventHTML = async (req, res, next) => {
    try {
        email.sendMail("vchovatiya992@gmail.com", "vchovatiya992@gmail.com", "sbdhvsdgsdnbvyvdnbsvf", "<h1>send mail successfuly</h1>")
        res.json(await getEventHtmlFile(req.body));
    } catch (error) {
        next(error)
    }
}

const eventPDF = async (req, res, next) => {
    try {
        res.json(await getEventHtmlPdf(req.body))
    } catch (error) {
        next(error)
    }
}


module.exports = {
    getEventData,
    createEvent,
    deleteEvent,
    editEvent,
    eventHTML,
    eventPDF
}