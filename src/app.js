const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


const app = express();
const indexRouter = require('./routes/index');

//Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/IngresarUsuario',indexRouter);



//Settings
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'),()=>{
    console.log(`server on port ${app.get('port')}`);
})
















