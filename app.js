import express from "express"; 
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
// import { userRouter } from "./router/userRouter";
import userRouter from "./router/userRouter";
import videoRouter from "./router/videoRouter";
import globalRouter from "./router/globalRouter";
import routes from "./routes";


const app = express();

// const handleHome=(req, res)=>res.send('Hello from home');

// const handleProfile=(req, res) => res.send("You are on my profile"); 


app.use(helmet());
app.set("view engine", "pug");
// middleware  부분
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("dev"));

// app.use((req,res,next) => {

// })


// app.use(function(req,res,next){

// })

app.use(localsMiddleware); //이렇게 맨위에 위치시켜야 
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);


// app.get("/", handleHome);
// app.get("/profile", handleProfile);
//get 이 아니라 use는 누군가 /user로 들어왔을때 이 router 전체를 사용하겠따는 의미임.

export default app; //누군가 내파일을 불러올때 app 오브젝트를 준다는 것임.


