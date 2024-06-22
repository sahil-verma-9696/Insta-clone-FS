const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/users");

const signup = async (req, res) => {
    try {
        const { imgAddress, name, password } = req.body;

        // Check if the user already exists
        const isUser = await User.findOne({ name: name });
        if (isUser) return res.status(400).send("Use a different username");

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = await User.create({
            name: name,
            password: hash,
            imgAddress: imgAddress
        });

        if (!newUser) return res.status(500).send("Registration failed");

        // Create a JWT token
        const token = jwt.sign({ name: name }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Set the token as a cookie
        res.cookie("token", token, { httpOnly: true });

        // Redirect to the dashboard
        res.redirect("/dashboard");
    } catch (error) {
        res.status(500).send("An error occurred during signup");
    }
}

const login = async (req, res) => {
    try {
        const { name, password } = req.body;

        // Check if request body is present
        if (!name || !password) return res.status(400).send("Request body not found");

        // Find the user by username
        const user = await User.findOne({ name: name });
        if (!user) return res.status(404).send("User not found");

        // Verify the password
        const isVerify = await bcrypt.compare(password, user.password);
        if (!isVerify) return res.status(401).send("Wrong password or username");

        // Create a JWT token
        const token = jwt.sign({ name: name }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Set the token as a cookie
        res.cookie("token", token, { httpOnly: true });

        // Redirect to the dashboard
        res.redirect("/dashboard");
    } catch (error) {
        res.status(500).send("An error occurred during login");
    }
}

module.exports = {
    signup,
    login,
}
