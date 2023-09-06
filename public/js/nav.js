let ul=document.querySelector('.links-container');

auth.onAuthStateChanged((user) => {
    if(user){
        //user is login
        ul.innerHTML +=`
        <li class="link-item"><a href="/admin" class="link">Dashboard</a></li>
        <li class="link-item"><a href="#" onclick="logoutUser()" class="link">Logout</a></li>
        `
    }
    else{
        //no one is logged
        ul.innerHTML += `
        <li class="link-item"><a href="/admin" class="link">Login</a></li>
        `
    }
})