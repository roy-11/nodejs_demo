// setTimeout Code
const user01 = getUser1(1);
console.log(user01);

function getUser1(id) {
  setTimeout(() => {
    console.log("Reading in user from a database...");
    return { id, gitHubUsername: "Mosh" };
  }, 2000);
}

// Callback Sample
getUser2(1, (user) => {
  console.log(user);
});

function getUser2(id, callback) {
  setTimeout(() => {
    console.log("Reading in user from a database...");
    callback({ id, gitHubId: "id" });
  }, 2000);
}

// Callback Hell Sample
getUser3(1, (user) => {
  getRepository(user.gitHubId, (repos) => {
    getCommit(repos.comitsId, (commit) => {
      console.log(commit);
    });
  });
});

function getUser3(id, callback) {
  setTimeout(() => {
    console.log("Reading in user from a database...");
    callback({ id, gitHubId: "id" });
  }, 2000);
}

function getRepository(id, callback) {
  setTimeout(() => {
    console.log("Reading in repo from a database...");
    callback({ id, comitsId: "id" });
  }, 2000);
}

function getCommit(id, callback) {
  setTimeout(() => {
    console.log("Reading in commit from a database...");
    callback({ id, comitsMessage: "message" });
  }, 2000);
}

// Callback Hell → namded function
getUser4(1, callbackGetUser);

function callbackGetUser(user) {
  getRepository2(user.gitHubId, callbackGetRepository);
}

function callbackGetRepository(repos) {
  getCommit2(repos.id, callbackGetCommit);
}

function callbackGetCommit(commit) {
  console.log(commit);
}

function getUser4(id, callback) {
  setTimeout(() => {
    console.log("Reading in user from a database...");
    callback({ id, gitHubId: "id" });
  }, 2000);
}

function getRepository2(id, callback) {
  setTimeout(() => {
    console.log("Reading in repo from a database...");
    callback({ id, comitsId: "id" });
  }, 2000);
}

function getCommit2(id, callback) {
  setTimeout(() => {
    console.log("Reading in commit from a database...");
    callback({ id, comitsMessage: "message" });
  }, 2000);
}
