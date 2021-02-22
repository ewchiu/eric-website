// index file for the website
const express = require("express");
const app = express();
const handlebars = require('express-handlebars').create({defaultLayout: 'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 2120);

app.use(express.static('public'));
app.use(express.static('views/images'));

app.get("/", (req, res) => {
    res.render('home')
})

app.get("/resume", (req, res) => {
    res.render('resume')
})

app.get("/travel", (req, res) => {
    res.render('travel')
})

app.get("/contact", (req, res) => {
    res.render('contact')
})

app.use((req, res) => {
    res.status(404);
    res.render('404')
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500);
    res.render('500');
})

app.listen(app.get('port'), () => {
    console.log('Express started on port ' + app.get('port') + '; Ctrl+C to terminate')
})


// // picture carousel
// let picIndex = 1;
// scrollPics(picIndex);

// function nextPic(i) {
//     scrollPics(picIndex += i);
// }

// function scrollPics(i) {
//     const pics = document.getElementsByClassName("pics");

//     if (i > pics.length) {
//         picIndex = 1;
//     }
//     if (i < 1) {
//         picIndex = 3;
//     }

//     for (let x = 0; x < 3; x++) {
//         pics[x].style.display = "none"
//     }

//     pics[picIndex - 1].style.display = "block";
// }