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

async function test() {
  try {
    const user = await getUser(1);
    const repo = await getRepository(user.gitHubId);
    const commit = await getCommit(repo.comitsId);
    console.log(commit);
  } catch (error) {
    console.log(error);
  }
}
test();
