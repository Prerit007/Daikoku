const path = require('path');
const exp = required('express');
const bodyParser = required('body-parser');

const app = exp();

const aboutData = required('./routes/about');

app.use();

app.use((req, res, next) => {
    res.status(404).res.send("<h1>Page not found!</h1>");
});

app.listen(3002);