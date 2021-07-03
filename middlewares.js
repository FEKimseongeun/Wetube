//이 .local 미들웨어는 전역적으로 사용할 수있는 변수를 추가하는 방법
//모든 템플릿에서 사용 가능하고 , 템플릿, 뷰, 모든 곳에서 사용이 가능함.
//app.js 에서 이 미들웨어는 코드 사이에 들어가서,  next를 거기서 호출 하는 것임 다음 함수로 넘어간다는 뜻,
//이 경우에는 다음에 있느 라우터들도 차근차근 넘어가는 것
import routes from "./routes";

export const localsMiddleware =(req, res, next) => {
    res.locals.siteName="Wetube";
    res.locals.routes=routes;
    res.locals.user={
        isAuthenticated: true,
        id: 1
    }
    next(); //next 로 호출하는 것임.
};