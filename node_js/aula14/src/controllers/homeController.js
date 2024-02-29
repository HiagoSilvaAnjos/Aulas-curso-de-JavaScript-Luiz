exports.initialPage = (req, res) => {
    // req.session.user = { name: "Hiago", loggedIn: true };
    // console.log(req.session.user);

    // req.flash('info', 'information');
    // req.flash('error', 'error');
    // req.flash('success', 'Onsuccess');
    // console.log(req.flash('info'), req.flash('error'), req.flash('success'));

    res.status(200).render('index');
    return
}

exports.postPage = (req, res) => {
    res.status(200).send(req.body);
    return
}