const express = require('express');
const path = require('path');

const {engine} = require('express-handlebars');

const {config} = require('./configs');
const {loginRouter, userRouter, signInRouter, deleteRouter} = require('./routes');

const {PORT} = config;

const app = express();

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/login', loginRouter);
app.use('/signIn', signInRouter);
app.use('/users', userRouter);
app.use('/delete', deleteRouter);
app.use((req, res) => {
    res.render('notFound');
});

app.listen(PORT, () => {
    console.log(`App listen ${PORT}`);
})
