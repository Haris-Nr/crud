const router = require("express").Router();
const Input = require("../model/input")
const multer = require('multer')



// create function

router.post('/create',async(req,res)=>{
        try {
            const newInput = new Input(req.body)
            await newInput.save();
            return res.render("index",{
                name:newInput.name
            })
        } catch (error) {
            res.send({
                message:error.message,
            })
        }
})


/// fetch data

router.get("/fetch",async(req,res)=>{

    try {
        const data = await Input.find()
        return res.render({
            data:data
        })
        // res.send({
        //     data : data
        // })    
    } catch (error) {
        res.send({
            message:error.message,
        })
    }    
})


// update /

router.put("/update/:id",async(req,res)=>{
    try {
        await Input.findByIdAndUpdate(req.params.id,req.body);
        res.send({
            message:"data updated successfully!"
        })
    } catch (error) {
        res.send({
            message:error.message
        })
    }
})


/// delete

router.delete("/delete/:id",async(req,res)=>{


    try {
        await Input.findByIdAndDelete(req.params.id)
        res.send({
            message :"Data deleted Successfully"
        })    
    } catch (error) {
        res.send({
            message:error.message,
        })
    }


    
})


router.get("/search/:key",async(req,res)=>{
    try {
        const data =await  Input.find({
            "$or":[
                {"name":{$regex:req.params.key}},
                {"email":{$regex:req.params.key}},
                {"password":{$regex:req.params.key}},
            ]
        })
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})


const upload = multer({
    storage : multer.diskStorage({
        destination:(req , file,cb)=> cb(null,"./upload/"),
        filename :( req ,file,cb )=> cb( null,new Date().toISOString()+file.originalname),
    }) ,
}).single("images")


router.post("/imageUpload",upload,async(req,res)=>{
    res.send("upload")
})


module.exports = router;