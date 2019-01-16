const express = require('express');

const router = express.Router();

router.get("/", function (req, res) {
    var data = ([{},{},{}]);

    res.status(200).json(data);
});

router.get("/:id", function (req, res) {
    var id = req.params.id;

    if (id == 3){
        var data = ({
            name: 'john doe',
            email: 'john@email.com'
        });

        res.status(200).json(data);

    } else {
        res.status(400).send({ message: 'invalid number supplied' });
    }

});


module.exports = router ;