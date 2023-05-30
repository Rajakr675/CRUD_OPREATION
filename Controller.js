const knex=require("./DataBaseConection");
const { GenrateToken } = require('./jwt');


// 1. Create

const UserCreate=async(req,res)=>{
    try{
        await knex("crud").insert(req.body);
        res.send({data:req.body,message:"your data inserted successfuly...!"});
        console.log("your data inserted successfuly...!");
    }
    catch(error){
        res.send("your data is not inserted...!");
        console.log("your data is not inserted...!");
        
    }
}

// 2. Read

const UserRead=async(req,res)=>{
    try{
        const info=await knex("crud").where({id:req.body.id});
        res.send(info);
        console.log(info);
    }
    catch(error){
        res.send(error);
        console.log(error);
    }
}

// 3.Update

const UserUpdate=async(req,res)=>{
    try{
        const info=await knex("crud").where({id:req.body.id}).update(req.body);
        res.send({message:'your data updated succesfully...!'})
    }
    catch(err){
        res.send("Data not updated")
    }

};

// 4.Delete

const UserDelete=async(req,res)=>{
    try{
        const info=await knex("crud").where({id:req.body.id}).delete(req.body)
        res.send(200)
        console.log("your data is deleted succesfully....!");
    }
    catch(error){
        res.send(error)
    }
}

// 5.Login.

const LoginUser=async(req,res)=>{
    const {id,name}=req.body
    try{
        const info=await knex("crud").where({id:id,name:name});
        if(!info == ''){
            let token = GenrateToken(id)       
            res.cookie('Token',token)
            console.log("Logged in successfully....");
            res.send('Logged in successfully');
        }else{
            res.json({message:'id or Name is wrong'})
        }

    }catch(error){
        console.log(error);
    }
}





module.exports={
    UserCreate,
    UserRead,
    UserUpdate,
    UserDelete,
    LoginUser
}