const PartyEvents = require('./partyEvents.model');
require('dotenv').config();
const browseURL = `http://localhost:${process.env.PORT}/`;


const createPartyEvents = async (req, res, next) => {
    try {
        const { event_name, state, date, company_name, sponsor, is_like } = req.body;
        // const { poster_img, event_name, state, date, logo, company_logo, company_name, sponsor } = req.body;
        if (!(event_name && state && date && company_name && is_like)) {
            res.status(400).send("enter all details");
        }

        const partyEvents = new PartyEvents({
            event_name,
            state,
            date,
            logo: req.files.logo[0].originalname,
            company_logo: req.files.company_logo[0].originalname,
            poster_img: req.files.poster_img[0].originalname,
            company_name,
            sponsor,
            is_like: []
        })

        const partyEventsData = await partyEvents.save();
        res.status(200).json(partyEvents)

    } catch (e) {
        next(e)
    }
};


const getAllPartyEventsData = async (req, res, next) => {
    try {
        const allPartyEventsData = await PartyEvents.find();

        const partyData = await allPartyEventsData.map((item) => {
            return {
                ...item._doc,
                logo: browseURL + item.logo,
                company_logo: browseURL + item.company_logo,
                poster_img: browseURL + item.poster_img
            }
        })
        res.status(200).json(partyData)
    } catch (e) {
        next(e)
    }
}

const partyLike = async (req, res, next) => {
    try {
        PartyEvents.findByIdAndUpdate(req.body.id, {
            $push: { is_like: req.body.userId }
        }, { new: true }).exec((err, result) => {
            if (err) {
                return res.status(422).json({ error: err })
            } else {
                res.json(result)
            }
        });
    } catch (e) {
        next(e)
    }
}


const partyDisLike = async (req, res, next) => {
    try {
        PartyEvents.findByIdAndUpdate(req.body.id, {
            $pull: { is_like: req.body.userId }
        }, { new: true }).exec((err, result) => {
            if (err) {
                return res.status(422).json({ error: err })
            } else {
                res.json(result)
            }
        });
    } catch (e) {
        next(e)
    }
}

module.exports = { createPartyEvents, getAllPartyEventsData, partyLike, partyDisLike }