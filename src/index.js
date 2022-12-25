const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
mongoose.set('strictQuery', false);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Akshay:akshay7798953555@akshaydb.e6tjw4w.mongodb.net/test", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
    function (req, res, next) {
        console.log ("inside GLOBAL MW");
        next();
  }
  );
  const assignmentMW= function (req, res, next) {
    var currentdate = new Date(); 
    var datetime =  currentdate.getDate() + " "
                    + (currentdate.getMonth()+1)  + " " 
                    + currentdate.getFullYear() + "  "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();
 
    let ip= req.ip
    let url= req.originalUrl
    console.log(`${datetime}  ${ip}  ${url}`)
    next()    
}
app.use( assignmentMW )
app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
