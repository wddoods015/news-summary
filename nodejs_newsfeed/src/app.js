import express from 'express';
import * as url from 'url';
import path from 'path';
import dotenv from 'dotenv';
import fs from 'fs';
import cors from 'cors';
import https from 'https';
import articleRoutes from './domains/Articles/routes/articleRoutes.js'
import trendRoutes from './domains/Trends/routes/trendRoutes.js'
import funcRoutes from './domains/Functions/routes/funcRoutes.js'


dotenv.config();

const app = express();

 let corsOptions = {
	 origin:[
	 "https://news-feed-nextjs-typescript.vercel.app",
	 "http://localhost:3000"
	 ],
 	credentials: true
 }
 app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// body-parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Set filePath
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

//app.use('요청 경로', express.static('실제 경로'));
//app.use('/', express.static(path.join(__dirname, 'public/build')));
app.use('/', express.static(path.join(__dirname, 'public/')));
//app.use('/assets', express.static(path.join(__dirname, '/public/build/assets')));

app.use('/api/articles/', articleRoutes);
app.use('/api/trends/', trendRoutes);
app.use('/api/functions/', funcRoutes);




app.get('/', (req, res) => {
  res.sendFile("index.html");
});

app.get("*",(req,res,next)=>{
  console.log("req.secure ==" + req.secure);
  if(req.secure){ // --- https        
    next();
  }else{  // -- http        
    let to = "https://" + req.headers.host + req.url;
    console.log("to==> " + to);
    return res.redirect("https://" + req.headers.host + req.url);
  }})

const HTTPS_PORT = 8443;

const option = {
  key: fs.readFileSync(path.join(__dirname, '.ssl', 'private.key')),
  cert: fs.readFileSync(path.join(__dirname, '.ssl', 'certificate.crt'))
};

// HTTPS 서버 생성
https.createServer(option, app).listen(HTTPS_PORT, () => {});



export default app;

