let knex=require("knex")({
    client:"mysql",
    connection:{
        user:"root",
        host:"localhost",
        database:"Express_crud",     // The database has allready  been created. 
        password:"raja@123"

    }
});

// Here is create a Table from knex Query......!

knex.schema.createTable("crud",(Table)=>{
    Table.increments("id").primary()
    Table.string("name").notNullable()
    Table.string("email").unique().notNullable()
    Table.string("password")
    Table.integer("age")
})
.then(()=>{
    console.log("Your Table Is Created Succesfully...........!");
}).catch((err)=>{                
    console.log("Your Table Is All-Ready Exists..............!");
    //if you want see error then  you can cansol (err).
});

module.exports=knex
