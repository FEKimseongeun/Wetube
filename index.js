// import express from "express"; //require? : node module을 어디선가 가져오는 거임.
// import morgan from "morgan";
// import helmet from "helmet";
// import cookieParser from "cookie-parser";
// import bodyParser from "body-parser";

// const app = express();

// const PORT=4000;

// function handleListening() {
//     console.log(`Listening on: http://localhost:${PORT}`);
// }

// const handleHome=(req, res)=>res.send('Hello from home');

// const handleProfile=(req, res) => res.send("You are on my profile"); //훨씬 더 간단해짐
// // " => " 이걸 arrow function 이라함
// // function handleProfile(req, res){
// //     res.send("You are on my profile"); 
// // }

// //helmet 이라는  node js보안에 도움이 되는 middleware

// app.use(cookieParser());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(helmet());
// app.use(morgan("dev")); // 이것도 middleware
// //morgan("tiny") : 어디로 접속했는지 얼마나 걸렸는지
// //morgan("combined") : 어떤 종류의 접속인지 어떤 브라우저인지 

// // const middleware=(req, res, next)=>{ //middleware는 연결을 끊을 수도 있음,
// //     res.send('not happening');
// // }

// // const betweenHome=(req, res, next)=> { 이거 middleware
// //     console.log("I am between");
// //     next();
// // }
// app.get("/", middleware, handleHome);
// app.get("/profile", handleProfile);

// app.listen(PORT, handleListening);

// // app.get('/', function (req, res) {
// //   res.send('hello world')
// // })