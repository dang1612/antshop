var express = require('express');
const otoModel = require('../model/otoModel');
var router = express.Router();
router.get('/', async(req, res) => {
    var oto = await otoModel.find({});
    res.render('oto/index', { oto: oto })
})


router.get('/delete/:id', async(req, res) => {
    await otoModel.findByIdAndDelete(req.params.id)
        .then(() => { console.log('Delete o to succeed !') })
        .catch((err) => { console.log('Delete o to failed !') });
    res.redirect('/oto');
})



router.get("/add", (req, res) => {
    res.render("oto/add");
})

router.post('/add', async(req, res) => {
    var Oto = req.body;
    await otoModel.create(Oto)
        .then(() => { console.log('Add new o to succeed !') });
    res.redirect('/oto');
})


router.get('/edit/:id', async(req, res) => {
    var oto = await otoModel.findById(req.params.id);
    res.render('oto/edit', { oto: oto });
})
router.post('/edit/:id', async(req, res) => {
    var id = req.params.id;
    await otoModel.findByIdAndUpdate(id, {
            name: req.body.name,
            price: req.body.price,
            image: req.body.image,
            video: req.body.video,
            color: req.body.color
        })
        .then(() => { console.log('Edit oto succeed !') });
    res.redirect('/oto');
})

// router.get('/edit/:id', async(req, res) => {
//     var oto = await otoModel.findById(req.params.id);
//     res.render('oto/edit', { oto: oto });
// })

// router.post('/edit/:id', async(req, res) => {
//     var id = req.params.id;
//     await otoModel.findByIdAndUpdate(id)
//         .then(() => { console.log('Edit oto succeed !') });
//     res.redirect('/oto');
// })

module.exports = router;