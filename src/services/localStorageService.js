import { decodeToken } from "react-jwt";

function loginProcesses(accessToken) {

    localStorage.setItem("access_token", accessToken);

    const decodedToken = decodeToken(accessToken); // parçalanmış hali

    Object.entries(decodedToken).forEach(([key, value]) => {
        localStorage.setItem(key, value);
    });

}


function logoutProcesses(){
    localStorage.clear();
}


export default {
    loginProcesses,
    logoutProcesses
};
