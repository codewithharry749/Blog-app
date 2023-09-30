const VlogscheduleSchema = require("../model/scheduleSchema");

const createSchedule = async (req, res, next) => {
    try {
        const { name, date, place, amount } = req.body;
        // console.log(name, email, phone)
        const response = await VlogscheduleSchema.create({
            name, date, place, amount
        });
        await response.save().then(() => {
            res.status(201).json({

                succss: true,
                data: response,
                massage: 'Entry created successfully'
            });
        }).catch(() => res.status(500).json({ Error: 'Something Error' }));


    } catch (error) {
        console.log("Error has occured in Controller ")
        next()
    }

}

module.exports = { createSchedule };