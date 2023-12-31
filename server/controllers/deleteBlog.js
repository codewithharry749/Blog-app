const User = require("../model/blogSchema");


const deleteBlogs = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteb = await User.findByIdAndDelete(id)
        res.status(200).json({
            success: true,
            data: deleteb,
            massaage: 'Blog deleted successFully from Database'
        })
    } catch (error) {
        res.status(500).json({
            success: true,
            massaage: "Internal Server Error"
        })
        next()
    }

}

module.exports = { deleteBlogs }