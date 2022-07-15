// Promise Sample
const p = new Promise((resolve, reject) => {
  resolve(1);
});
p.then(console.log)
  .then(console.log) // undefined
  .then(() => "return value")
  .then(console.log) // return value
  .then(new Promise((resolve) => resolve(2)))
  .then(console.log) // undefined
  .then(() => new Promise((resolve) => resolve(2)))
  .then(console.log) // 2
  .catch((err) => console.error(err));

// Callback Hell Sample
getUser(1)
  .then((user) => getRepository(user.gitHubId))
  .then((repo) => getCommit(repo.comitsId))
  .then((commit) => console.log(commit))
  .catch((err) => console.error(err));

function getUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Reading in user from a database...");
      resolve({ id, gitHubId: "id" });
    }, 2000);
  });
}

function getRepository(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading in repo from a database...");
      resolve({ id, comitsId: "id" });
    }, 2000);
  });
}

function getCommit(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Reading in commit from a database...");
      resolve({ id, comitsMessage: "message" });
    }, 2000);
  });
}

// Static Promise
const resolved = Promise.resolve(1);
resolved.then((result) => console.log(result));
const rejected = Promise.reject(new Error("error"));
rejected.catch((err) => console.error(err.message));

// All and Race
const p1 = new Promise((resolve) => setTimeout(() => resolve(1), 2000));
const p2 = new Promise((resolve) => setTimeout(() => resolve(2), 1000));
Promise.all([p1, p2]).then((result) => console.log(result));
Promise.race([p1, p2]).then((result) => console.log(result));
