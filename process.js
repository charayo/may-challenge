let username = "charayo";
const baseUrl = "https://api.github.com/graphql";
const token;    
(async function () {
    const data = JSON.stringify({
        query: `{
            user(login: "${username}") {
              name
              bio
              avatarUrl
              login
              repositories(affiliations: OWNER, first: 10) {
                edges {
                  node {
                    id
                    name
                    nameWithOwner
                    owner {
                      id
                    }
                  }
                }
              }
            }
          }`
        ,
    });

    fetch(
        ' https://api.github.com/graphql',
        {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length,
                Authorization: 'Bearer token',
            },
        }
    ).then(res => {
        res.json().then(data => {
            // document.getElementById('fullname').innerHTML = data.data.user.name
            // document.getElementById('avatar').src = data.data.user.avatarUrl
            // document.getElementById('bio').innerHTML = data.data.user.bio
            // document.getElementById('login').innerHTML = data.data.user.login
            console.log(data)
        })
    })

})();