
const todoModel = require("../model/model");


async function addTask(req,res){
    try {
        await todoModel.create({
            task:req.body.task,
            complete:req.body.complete
        })
        res.status(201).json({message:"success"});
        
    } catch (error) {
        res.status(500).json({ error: error.message });
      }
    
}

async function getApi(req, res) {
    try {
      const todos = await todoModel.find({});
      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async function deleteApi(req, res) {
    try {
        await todoModel.findByIdAndDelete(req.params.id);
        res.json({ message: 'Todo deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
      }
  }



  async function updateApi(req, res) {
    try {
      const newTask=  await todoModel.findByIdAndUpdate(req.params.id,
            {
                task:req.body.task,
                complete:req.body.complete
        });
        res.json({message:"update successfully"} );
    } catch (error) {
        res.status(500).json({ error: error.message });
      }
  }
module.exports={addTask,getApi,deleteApi,updateApi}
