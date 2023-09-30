const User = require("../model/blogSchema")

const getBlogs = async (req, res, next) => {
    try {
        const response = await User.find({});
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

module.exports = { getBlogs }