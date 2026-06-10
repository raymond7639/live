username = 'raymond7639'


function fetchUserProfile(username) {
    return fetch(`https://api.github.com/users/${username}`)
        .then(raw => raw.json()
        );
}
fetchUserProfile("raymond7639").then(function (data) {
    console.log(data);
    
})