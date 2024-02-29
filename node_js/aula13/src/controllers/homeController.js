exports.initialPage = (req, res) => {
    res.status(200).render('index');
    return
}

exports.postPage = (req, res) => {
    res.status(200).send(req.body);
    return
}