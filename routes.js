//url을 만들어볼 js

//GLOBAL
const HOME="/";
const JOIN="/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH ="/search";


//USERS
const USERS ="/users";
const USER_DETAIL="/:id";
const EDIT_PROFILE="/edit-profile";
const CHANGE_PASSWORD ="/chagepassword";

//Videos

const VIDEOS="/videos";
const UPLOAD ="/upload";
const VIDEO_DETAIL="/:id";
const EDIT_VIDEO="/:id/edit";
const DELETE_VIDEO="/:id/delete";
//여기서 :id 라고 쓰는 이유는 ":"가 붙었을때 이 값은 언제든지 바뀔 수 있는 것이구나를 스스로 인식하기 때문임

const routes={
    home:HOME,
    join:JOIN,
    login:LOGIN,
    logout:LOGOUT,
    search: SEARCH,
    users: USERS,
    userDetail:USER_DETAIL,
    editProfile:EDIT_PROFILE,
    chagePassword:CHANGE_PASSWORD,
    videos:VIDEOS,
    upload:UPLOAD,
    videoDetail:VIDEO_DETAIL,
    editVideo:EDIT_VIDEO,
    deleteVideo:DELETE_VIDEO
};  

export default routes;
