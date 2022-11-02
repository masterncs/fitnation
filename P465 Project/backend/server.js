const express = require('express')
const fileUpload = require('express-fileupload')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5001

connectDB()

const app = express()
app.use(fileUpload());
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const path = require('path')
app.use(express.static(path.join(__dirname, '../frontend/public/')))

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname + '/../frontend/public/index.html'))
})

//upload endpoint
app.post('/upload', (req,res) =>{
    if (req.files == null) {
        return res.status(400).json({msg: 'No file uploaded'})
    }

    const file = req.files.file;

    file.mv(`${__dirname}/uploads/${file.name}`, err => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        }
        res.json({fileName: file.name, filePath: `/uploads/${file.name}`});
    });
});

app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.get("/:universalURL", (req,res) => {
    res.send("404 URL NOT FOUND");
});

app.listen(port, () => console.log(`Server started on port ${port}`))

