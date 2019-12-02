module.exports={
    lintOnSave:false,
    devServer:{
        before(app){
            app.get('/getlist',(req,res)=>{
                let data=require('./mock/data.json')
                res.send(data)
            })
        }
    }
   
}