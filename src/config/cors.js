module.exports = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Acess-Controll-Allow-Methods', 'GET', 'POST', 'OPTIONS', 'PUT', 'PATCH', 'DELETE');
    res.header('Acess-Controll-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
}