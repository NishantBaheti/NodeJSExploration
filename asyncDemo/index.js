console.log("Before");
getUser(1, getRepositories);

console.log("After");

// setTimeout used to increase processing time explicitly

// callbacks
// promises
// async /await

function printCommit(commitObj) {
  console.log(commitObj);
}

function getCommit(repoObj) {
  console.log(repoObj);
  getLatestCommitId(repoObj.repositories[0], printCommit(commitObj));
}

function getRepositories(userObj) {
  console.log(userObj);
  getRepositories(userObj.username, getCommit(repoObj));
}

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Get user name and id ");
    callback({
      id: id,
      username: "nishantbaheti",
    });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log("Get all Repositories");
    callback({
      username: username,
      repositories: ["repo1", "repo2"],
    });
  }, 2000);
}

function getLatestCommitId(repo, callback) {
  setTimeout(() => {
    console.log(`Get latest commit id`);
    callback({
      repo: repo,
      commit: "987654df",
    });
  });
}
