const User = require("../model/blogSchema");

const updateBlogs = async (req, res, next) => {
    try {

        const { id } = req.params;
        const { name, email, image, title, address, description } = req.body;

        const updateUser = await User.findByIdAndUpdate({ _id: id }, { name, email, image, title, address, description });

        res.status(200).json({
            success: true,
            data: updateUser,
            massage: "Data updated successFully"
        });

    } catch (error) {
        console.log("Update Data create problem : ", error)
        res.status(404).json({
            success: false,
            data: "Id is not Correct",
            massage: "Please Enter Correct Id"
        });
        next()
    }
}

module.exports = { updateBlogs };