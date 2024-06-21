const signup = (req, res) => {
    const { imgAddress, name, password } = req.body;
    console.log(imgAddress, name, password);

    // console.log(req.body);
    res.send("sign up ");
}

module.exports = {
    signup
}