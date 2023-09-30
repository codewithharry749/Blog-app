const VlogscheduleSchema = require("../model/scheduleSchema");

const updateSchedule = async (req, res, next) => {
    try {

        const { id } = req.params;
        const { name, date, place, amount } = req.body;
        const updateUser = await VlogscheduleSchema.findByIdAndUpdate(
            { _id: id },
            { name, date, place, amount });
        res.status(200).json({
            success: true,
            data: updateUser,
            massage: "userData updated successfully"
        });

    } catch (error) {
        res.status(404).json({
            success: false,
            data: "Id is not Correct",
            massage: "Please Enter Correct Id"
        });
        next()
    }
};

module.exports = { updateSchedule };