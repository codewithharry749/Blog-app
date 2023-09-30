const Signup = require("../model/SignupSchema");


const loginData = async (req, res, next) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(500).json({ error: "plz filled Email & Password" });
    }

    const userLogin = await Signup.findOne({ email: email });

    if (userLogin) {
        if (userLogin.password === password) {
            res.status(200).json({
                data: "Success",
                Massage: "User Login Successfull",
                success: true
            })
        } else {
            res.status(500).json({
                Error: "User Login  Failed",
                success: false
            })
        }
    } else {
        res.status(500).json({
            Error: "Not Any Previous Record Exist",
            success: false
        })
    }


}

module.exports = { loginData }