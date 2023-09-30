const VlogscheduleSchema = require("../model/scheduleSchema");


const deleteSchedule = async (req, res, next) => {
    try {
        const { id } = req.params;
        await VlogscheduleSchema.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: "userData deleted Successfully from database",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server",
        })
    }
}

module.exports = { deleteSchedule }