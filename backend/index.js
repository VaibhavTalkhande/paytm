const express = require("express");
const bodyParser = require('body-parser');
const rootRouter =require('./routes/index');
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors(
    {
        origin:"*"
    }
));


app.use('/api/v1',rootRouter);


app.listen(
    3000,()=>{
        console.log(`http://localhost:3000`);
    }
)