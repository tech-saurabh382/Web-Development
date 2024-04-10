
// auth, isStudent, isAdmin

const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = (req, res, next) => {
    try {
        // extract JWT token
        // PENDING : other way to fetch token

        console.log("cookie", req.cookie.token);
        console.log("body", req.body.token)
        // console.log("header", req.header("Authorization"));

        const token = req.cookie.token || req.body.token || req.header("Authorization").replace("Bearer ", "");

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token Missing",
            })
        }

        // verify the token 
        try {
            const payload = jwt.verify(token, process.env.JWT_SECRET);
            console.log(payload);
            // why this ?
            req.user = payload;
        }
        catch (error) {
            return res.status(401).json({
                success: false,
                message: "token is invalid",
            });
        }

        next();
    }
    catch (error) {
        return res.status(401).json({
            success: false,
            message: "Something went wrong, while verifying the token",
        })
    }
}

exports.isStudent = (req, res, next) => {
    try {
        if (req.user.role != "Student") {
            return res.status(401).json({
                success: false,
                message: "This is a protected route for student",
            })
        }
        next();
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "User Role is not matching",
        });
    }
}

exports.isAdmin = (req, res) => {
    try {
        if (req.user.role != "Admin") {
            return res.status(401).json({
                success: false,
                message: "This is a protected route for Admin",
            })
        }
        next();
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "User Role is not matching",
        });
    }
}