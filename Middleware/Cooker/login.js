module.exports = (req, res, next) => {
    const auth = req.headers.authorization;

    if(!auth) {
        return console.log("Sem token")
    }

    const [ bearer,  token] = auth.split(' ');
    console.log(token);

    next();
}