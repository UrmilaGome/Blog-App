const Blog = require("../models/blogModel");

const getAllBlogs =async (req,res) =>{
  
    //Get All Data from DB

    const allBlogs = await Blog.find()

    if(!allBlogs){
        res.status(404).json({
            error : "Error in finding blogs"
        });
        }
 res.json(allBlogs);

};

//Create a blog

const createBlog = async(req,res) =>{

   const {title, description, author} = req.body; 

   if(!title || !description || !author){
    res.status(401).json({
        error : "Please Fill All Details",
    });
   }

   //create single data in db
   const newBlog = await Blog.create({
    title,
    description,
    author
   });

   if(!newBlog){
    res.status(401).json({
        error : "Error in creating Blogs"
    });
   }

   res.status(201).json(newBlog);
};
    // res.send("Blog Created");

    //get single blog

    const getBlog = async(req, res) =>{


        //get single document using id
        const blog = await Blog.findById(req.params.id);

        if(!blog){
            res.status(404).json({
                error : "Error in finding blogs",
            });
            }
     res.json(blog);
   
};


const removeBlog = async(req,res) => {

     //Get single document and delete from db
     
    await Blog.findByIdAndDelete(req.params.id);
        res.status(200).json({
            msg : "Blog Deleted!",
        });
};


//update Blog

const updateBlog = async(req,res) => {

    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body,
         {new : true
    
    }); 

    if(!updatedBlog){
        res.status(401).json({
            error : "Cannot Update Blog",
        })

        }
        res.json(updatedBlog);
    };

module.exports = {getAllBlogs, createBlog, getBlog,removeBlog, updateBlog}