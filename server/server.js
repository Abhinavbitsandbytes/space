import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/App';
const app=express();
const PORT=5000;
const router=express.Router()
router.use('^/$',(req,res,next)=>{
   fs.readFile(path.resolve('./build/index.html'),'utf-8',(err,data)=>{
       if(err){
           console.log(err);
           res.status(500).send("HEY! YOU GOT BURSTED");
       }
      return   res.send(data.replace('<div id="root"></div>',`<div id="root">${ReactDOMServer.renderToString(<App/>)}</div>`));
   })
});
router.use(express.static(path.resolve(__dirname,'..','build')));
app.use(router)
app.listen(PORT,()=>{console.log('listining to 5000')});