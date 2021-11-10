var fs = require("fs");
const express = require("express");

const router = express.Router();


/////////////////////////////////////////////////////////

router.get("/login", 
    (req, res) => {

        res.writeHead(200);
        var data = fs.readFileSync("./views/login.html");
        res.end(data.toString());
});
app.post('/login', (req, res) => {
  // Insert Login Code Here
  let username = req.body.UserName;
  let password = req.body.Password;
  res.send(`Username: ${UserName} Password: ${Password}`);
});
//////////////////////////////////////////
module.exports = router;