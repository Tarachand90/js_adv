function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetching user...");
      if (id < 0) {
        reject(new Error("Invalid user ID"));
      } else {
        resolve({ id: id, name: "Tara" });
      }
    }, 1000);
  });
}

function getPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetched posts");
      if (userId != 1) {
        reject(new Error("Posts not found for this user"));
      } else {
        resolve([
          { id: 101, title: "Tara's First Post" },
          { id: 102, title: "Tara's Second Post" },
        ]);
      }
    }, 1000);
  });
}

function getComments(postId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetching comments...");
      if (postId != 101) {
        reject(new Error("Comments not found for this post"));
      } else {
        resolve([
          { id: 1001, text: "Great post!" },
          { id: 1002, text: "Thanks for sharing!" },
        ]);
      }
    }, 1000);
  });
}

getUser(1)
  .then((user) => {
    console.log("User:", user);
    return getPosts(user.id);
  })
  .then((posts) => {
    console.log("Posts:", posts);
    return getComments(posts[0].id);
  })
  .then((comments) => {
    console.log("First comment:", comments[0]);
  })
  .catch((error) => {
    console.error("Error occurred:", error.message); // Access error message
  });
