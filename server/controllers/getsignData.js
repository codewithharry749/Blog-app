const Signup = require("../model/SignupSchema");



const getsignData = async (req, res, next) => {
    try {
        const response = await Signup.find({});
        res.status(200).json({
            success: true,
            data: response,
            massage: "Blog data found successFully"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            massage: "Some issue are arising to found the data"
        })
    }

}

module.exports = { getsignData }