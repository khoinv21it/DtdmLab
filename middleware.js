// const express = require('express');
// const app = express();
// app.use((req, res, next) => {
// console.log('Time:', Date.now());
// next();
// });
// app.listen(process.env.port || 3000);
// console.log('Web Server is listening at port '+ (process.env.port
// || 3000));

const express = require('express');
const app = express();
const router = express.Router();
router.use((req, res, next) => {
console.log('Time:', Date.now());
next();
});

router.get('/home', (req,res) => {
res.send("ok")
});
app.use('/', router);
app.listen(process.env.port || 3000);
console.log('Web Server is listening at port '+ (process.env.port
|| 3000));

app.use((err, req, res, next) => {
    res.status(500).send('Something broke!')
});