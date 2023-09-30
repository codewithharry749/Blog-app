const VlogscheduleSchema = require("../model/scheduleSchema");


const getSchedule = async (req, res) => {
    try {

        const getData = await VlogscheduleSchema.find({});
        res.status(200).json({
            success: true,
            data: getData,
            massage: "All data fetched successfully"
        })

    } catch (error) {
        console.log("Error has occured in Controller", error.massage);
        res.status(500).json({
            success: true,
            data: "Internal server Error",
            massage: error.massage
        })
    }
}

module.exports = { getSchedule }