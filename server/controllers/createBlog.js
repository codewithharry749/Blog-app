const User = require("../model/blogSchema");

const createBlog = async (req, res, next) => {
    try {

        const { name, email, image, title, address, description } = req.body;

        const response = await User.create({ name, email, image, title, address, description });

        await response.save().then(() => {
            res.status(201).json({
                data: response,
                success: true,
                massage: 'Entry created successfully'
            });
        }).catch(() => res.status(500).json({ Error: 'Error founded in data entry' }))

    } catch (error) {
        console.log("Error has occured in Controller ")
        next();
    }

}

module.exports = { createBlog };