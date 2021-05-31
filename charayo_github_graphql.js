// // const guthub_data ={
// //     "token": "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",
// //     "username": "charayo"
// // }
// // const body = {
// //     "query":""
// // }
// // const headers ={
// //     "Content-Type": "application/json",
// //     Authentication: "bearer "+github_data["token"]
// // }
// // fetch(baseUrl)


// query listRepos($queryString: String!){
//     rateLimit{
//      cost
//      remaining
//      resetAt
//     }
//     search(query:$queryString, type:REPOSITORY, first:20){  
//      repositoryCount
//      pageInfo{
//       endCursor
//       startCursor
//      }
//      edges{
//       node{
//        ... on Repository{
//         id
//         name
//         createdAt 
//         description 
//         isArchived
//         isPrivate
//         url
//         owner{
//          login
//          id
//          __typename
//          url
//         }
//         assignableUsers{
//          totalCount
//         }
//         licenseInfo{
//          key
//         }
//         defaultBranchRef{
//          target{
//           ... on Commit{
//            history(first:10){
//             totalCount
//             edges{
//              node{
//               ... on Commit{
//                committedDate
//               }
//              }
//             }
//            }
//           }
//          }
//         }
//        }
//       }
//      }
//     }
//    }
let content = {
    "query listRepos($queryString: String!)": `{
        rateLimit{
            cost
            remaining
            resetAt
           }
           search(query:$queryString, type:REPOSITORY, first:20){  
            repositoryCount
            pageInfo{
             endCursor
             startCursor
            }
            edges{
             node{
              ... on Repository{
               id
               name
               createdAt 
               description 
               isArchived
               isPrivate
               url
               owner{
                login
                id
                __typename
                url
               }
               assignableUsers{
                totalCount
               }
               licenseInfo{
                key
               }
               defaultBranchRef{
                target{
                 ... on Commit{
                  history(first:10){
                   totalCount
                   edges{
                    node{
                     ... on Commit{
                      committedDate
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
           }
    }
  `};
  
  let body = JSON.stringify(content);
  
  fetch('https://graphql-pokemon.now.sh/', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: body
  })
    .then(response => response.json())
    .then(data => {
      document.body.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    });


    