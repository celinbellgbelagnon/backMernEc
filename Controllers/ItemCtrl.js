const database = require('../Config/ConfigMysql')

exports.getItemGenderCategory = (req, res) =>{
    database.query('select * from categoryitems', (error, result1)=>{
        if (error) throw error

        database.query('select * from genderitems', (error, result2)=>{ 
            if (error) throw error
            res.status(201).json({categoryitems: result1, genderitems: result2 })
        }) 
    })
}    

exports.addNewItem = (req, res) =>{
    let addNewItemQuery = 'INSERT INTO items (name_item,color_oitem,size_item,price_item,description_item,item_id_category_fk,item_id_gender_fk) VALUES (?,?,?,?,?,?,?)'
    database.query(
        addNewItemQuery,
        [
            req.body.name,
            req.body.color,
            req.body.size,
            req.body.price,
            req.body.description,
            req.body.articlecategory,
            req.body.articleGender
        ],
        (error, result) =>{
            if (error) throw error
            res.status(201).json({message: "New Item add"})
        }
    )
}

exports.selectMenOutfits = (req, res) => {
    database.query(
        "SELECT * FROM items JOIN categoryitems ON items.item_id_category_fk = categoryitems.id_categoryitems JOIN genderitems ON items.item_id_gender_fk = genderitems.id_genderitem WHERE gender = 'masculin'",
        (error, result) => {
            if (error)  throw error;  
            
            res.status(201).json({items: result})
        }
    );
};
