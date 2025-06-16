

// // Pre code For getting User Repo :-
// function getUserRepo(username) {
//     return fetch(`https://api.github.com/users/${username}/repos`)
//     .then((raw) => raw.json())
//     .then(function(data) {
//         console.log(data);
//     })
// }
// getUserRepo("Capten05ast");




let searchBtn = document.querySelector(".search");
let usernameinp = document.querySelector(".usernameinp");
let card = document.querySelector(".card");




// Project starts here :-
function getProfileData(username) {
    return fetch(`https://api.github.com/users/${username}`)
    .then((raw) => {
        // To check if the ok status code is false or not
        if(!raw.ok) {
            card.innerHTML = "";
            throw new Error("User not found");
        }
        return raw.json();
    })
}

function getRepos(username) {
    return fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
    .then((raw) => {
        if(!raw.ok) throw new Error("Failed to fetch repos...");
        return raw.json();
    })
}

function decorateProfileData(details) {
    let data = 
        `<div class="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-500">
            <img src=${details.avatar_url? details.avatar_url : ""} alt="Avatar" class="w-full h-full object-cover" />
        </div>

        <!-- Info -->
        <div class="flex-1">
            <h2 class="text-2xl font-bold text-gray-800 dark:text-white animate-pulse">${details.name? details.name : "Sorry, there's no name"}</h2>
            <p class="text-gray-600 dark:text-gray-300 animate-pulse">${details.bio? details.bio : "Sorry, there's no bio"}</p>
            <div class="mt-2 text-sm text-gray-500 dark:text-gray-400">
            <p>Followers: ${details.followers? details.followers : "No followers"} | Following: ${details.following? details.following : "No one's following"}</p>
            <p>Public Repos: ${details.public_repos? details.public_repos : "---"}</p>
            <p>Location : ${details.location? details.location : "---"} </p?
            </div>
        </div>`
    console.log(details);
    card.innerHTML = data;
}




searchBtn.addEventListener("click", function() {
    let username = usernameinp.value.trim();

    if (username.length > 0) {
        getProfileData(username).then((data) => {
            console.log(data);
            decorateProfileData(data);
        })
    } else {
        alert("Wrong user-name entered")
    }
})




getProfileData("Capten05ast")
.then(function (data) {
    console.log(data);
});

getRepos("capten05ast")
.then(function(data) {
    console.log(data);
})













