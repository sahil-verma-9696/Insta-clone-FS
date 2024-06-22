const Post = require("./../model/posts");
const User = require("./../model/users");
const jwt = require("jsonwebtoken");

const dashboardPage = async (req, res) => {
    try {
        const token = req.cookies.token;
        if(!token) return res.status(404).send("Session not found");

        const tokenData = jwt.verify(token,process.env.JWT_SECRET,(error)=>{
            console.log(error);
        });
        console.log(tokenData)
        const user = await User.findOne({name : tokenData.name});
        if(!user) return res.status(404).send("user not found");

        const posts = await Post.find().populate({
            path: "user",
        });

        res.render("dashboard", { posts: posts, user: user });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};


const loginPage = (req, res) => {
    const token = req.cookies.token;
    if (token) return res.redirect("/dashboard");

    res.render("login");
};

const signupPage = (req, res) => {
    res.render("signup");
};

const homepage = (req, res) => {
    res.render("signup");
};

const postCreatingPage = (req, res) => {
    res.render("postcreationpage");
};

const profilepage = async (req,res)=>{
    try { 
        const uid = req.params.id;
        console.log(uid)
        const user = await User.findOne({
            _id : uid,
        }).populate({
            path : 'posts',
        })
        if(!user) return res.status(500).send("internal server error")
        
        res.render("profile",{user : user});
    } catch (error) {
        console.log(error);
        res.status(500).send("internal server error");
    }
}

module.exports = {
    dashboardPage,
    loginPage,
    signupPage,
    postCreatingPage,
    homepage,
    profilepage,
};
