import MainNavBar from "./MainNav";
import Login from "./logIn";
function Home1 () {
    if (sessionStorage.getItem('myUserEntity') != null) {
        var userEntity = {};
        userEntity = JSON.parse(sessionStorage.getItem('myUserEntity'));
        console.log(userEntity);
        return (
            <MainNavBar/>
        );
    } else {
        return (
            <Login/>
        );
    }
}

export default Home1;