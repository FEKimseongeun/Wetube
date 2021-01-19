import express from "express" //require? : node module을 어디선가 가져오는 거임.
const app = express();

const PORT=4000;

function handleListening() {
    console.log(`Listening on: http://localhost:${PORT}`);
}

const handleHome=(req, res)=>res.send('Hello from home');

const handleProfile=(req, res) => res.send("You are on my profile"); //훨씬 더 간단해짐
// " => " 이걸 arrow function 이라함
// function handleProfile(req, res){
//     res.send("You are on my profile"); 
// }

app.get("/", handleHome);
app.get("/profile", handleProfile);
app.listen(PORT, handleListening);

// app.get('/', function (req, res) {
//   res.send('hello world')
// })