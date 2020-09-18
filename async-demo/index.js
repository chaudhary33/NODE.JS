console.log("Runs First");
// getUser(1, displayRepsitories);
console.log("Ending Code");
// getUser(1)
//     .then(user => getRepsitories(user.gitHubUsername))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => console.log("Commits: ", commits))
//     .catch(err => console.log("Error: ", err.message));

   async function displayCommits() {
       try{
        const user = await getUser(1);
        const repos = await getRepsitories(user.gitHubUsername);
        const commits = await getCommits([0]);
        console.log("Commits", commits);
       }
       catch(error){
           console.log("Error: ", error.message);
       }
    }
//Named functions
displayCommits();
// function displayRepsitories(user){
//     getRepsitories(user.gitHubUsername, displayRepos)
// }
// function displayRepos(repos){
//     getCommits(repos, displayCommits);
// }
// function displayCommits(commits){
//     console.log("Commits: ",commits);
// }
//Actual functions
function getUser(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Reading a user from database...");
            resolve({
            id: id, 
            gitHubUsername: 'alam'
            });
        }, 2000);
    });
    
}

function getRepsitories(uername){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Calling Github API...");
            // resolve(['repo1', 'repo2','repo3']);
            reject(new Error("Could not be load"))
       }, 2000);
    });
}

function getCommits(repos){
   return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Getting Commits...");
        resolve(['20']);
   }, 2000);
   });
 }