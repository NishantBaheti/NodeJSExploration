console.log("Before");

// getUser(1)
//   .then((userObj) => getRepositories(userObj.username))
//   .then((repoObj) => getLatestCommitId(repoObj.repositories[0]))
//   .then((commits) => console.log("Commits", commits))
//   .catch((err) => console.log("ERROR ", err.message));

async function displayCommits() {
  try {
    const userObj = await getUser(1);
    const repoObj = await getRepositories(userObj.username);
    const commitObj = await getLatestCommitId(repoObj.repositories[0]);
    console.log(commitObj);
  } catch (err) {
    console.log("ERROR ", err.message);
  }
}
displayCommits();

console.log("After");

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Get user name and id ");
      resolve({
        id: id,
        username: "nishantbaheti",
      });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Get all Repositories");
      resolve({
        username: username,
        repositories: ["repo1", "repo2"],
      });
    }, 2000);
  });
}

function getLatestCommitId(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Get latest commit id`);
      resolve({
        repo: repo,
        commit: "987654df",
      });
    });
  });
}
