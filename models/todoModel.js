const mongoose = require("mongoose");


const Todo = new mongoose.Schema(
  {
   
      task_name:String,
      start_date:String,
      end_date:String,
      status:String,
      priority:String
    
  },
  
  { timestamps: true }
);

module.exports = mongoose.model("Todo", Todo);
