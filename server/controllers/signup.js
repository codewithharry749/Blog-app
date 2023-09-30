const Signup = require("../model/SignupSchema");


const signupData = async (req, res) => {
    try {
        const { username, email, password, cpassword } = req.body;
        if (!username || !email || !password || !cpassword) {
            res.status(422).json({
                Error: 'Plz Fill All Data Currectly'
            });
        } else {
            const userExist = await Signup.findOne({ email: email })

            const userNameExist = await Signup.findOne({ username: username })


            if (userNameExist) {
                res.status(422).json({
                    data: 'usernameExist',
                    Error: 'User Name are already Used'
                });
            }
            if (userExist) {
                res.status(422).json({
                    data: 'userExist',
                    Error: 'Email id already Used'
                });
            }
            if (password !== cpassword) {
                res.status(422).json({
                    success: false,
                    Error: 'Password Not Matched'
                });
            }



            const response = await Signup.create({
                username, email, password, cpassword
            });

            await response.save().then(() => {
                res.status(201).json({
                    data: response,
                    success: true,
                    massage: 'Entry created successfully'
                });
            }).catch(() => res.status(500).json({ Error: 'Error founded in data entry' }));
        }



    } catch (error) {
        console.log("Error has occured in Signup")
    }
}

module.exports = { signupData };