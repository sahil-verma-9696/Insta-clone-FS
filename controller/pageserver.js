const dashboardPage = (req,res)=>{
    res.render("dashboard");
}
const loginPage = (req,res)=>{
    res.render("login");
}
const signupPage = (req,res)=>{
    res.render("signup");
}
const postCreatingPage = (req,res)=>{
    res.render("postcreationpage");
}

module.exports = { 
    dashboardPage,
    loginPage,
    signupPage,
    postCreatingPage,
}