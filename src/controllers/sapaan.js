exports.sayHalo = (req, res, next) => {
    res.send({
        message: `Halo dari saya yang membuat ini`,
        status: `OK`
    });
};