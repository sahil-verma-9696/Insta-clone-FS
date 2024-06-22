const Post = require("./../model/posts");
const User = require("./../model/users")

const jwt = require("jsonwebtoken");

const createPost = async (req, res) => {
    try {
        const token = req.cookies.token;
        if (!token) return res.status(404).send("Session not exist");

        const sessionUser = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findOne({ name: sessionUser.name });


        const { title, imgAddress } = req.body;

        // check if body is present
        if (!title || !imgAddress) return res.status(400).send("Request body not found");

        const newPost = await Post.create({
            title: title,
            img: imgAddress, 
            user: user._id,
        })

        user.posts.push(newPost._id);
        await user.save();

        res.status(200).redirect("/dashboard");

    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred during post creation");
    }
}

module.exports = {
    createPost,
}