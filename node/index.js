let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let app = express();



let users = [];
app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.route("/users")
    .post((req, res) => {
        console.log(req.body.d);
        
        users.push(req.body.d);
        res.send(true);
    })
    .get((req, res) => {
        res.json(users);
    })
    .delete((req, res) => {
        let i = users.indexOf(el => {
            return el == req.body;
        });
        users = users.splice(i, 1);
        res.send(true);
    })

app.listen(3001, () => console.log('3001!'));