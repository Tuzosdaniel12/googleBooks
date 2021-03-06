const { Books } = require("../models");
// Defining methods for the bookController
module.exports = {
    findAll: async (req, res) => {
       try{
        const books = await Books.find({})

        .sort({ date: -1 })

        res.status(200).json(books)
    
       }catch(err){
      
        res.status(422).json(err);
    }},
    
    create: async (req, res) =>{
        try {
            const createBook = await Books.create(req.body)

            res.status(200).json(createBook)

        } catch (error) {
            console.log(error)
            res.status(422).json(error);

        }
    },

    remove: async (req, res) => {

        try{
            const removeBook = await Books.findByIdAndRemove(req.params.id)

            res.status(200).json(removeBook);

        }catch(error){

            res.status(422).json(error);
            
        } 
    }
  };