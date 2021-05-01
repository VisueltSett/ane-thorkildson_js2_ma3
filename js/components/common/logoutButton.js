export default function logoutButton() {
const logoutBtn = document.querySelector("#logout");
const token = getToken();

if(token) {
    logoutBtn.display = block;
}

if (logoutBtn){
    logoutBtn.onclick = function(){
        const doLogout= confirm("Are you sure you want to logout?");
        
        if(doLogout){
            clearStorage();
            location.href = "/";
        }
    };
}


}