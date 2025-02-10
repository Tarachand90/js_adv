function getUser(id, callback) {
  setTimeout(() => {
    console.log("Fetched user");
    callback({ id: id, name: "Tara" });
  }, 1000);
}

function getPosts(userId, callback) {
  setTimeout(() => {
    console.log("Fetched posts");
    callback([
      { id: 101, title: "Alice's First Post" },
      { id: 102, title: "Alice's Second Post" },
    ]);
  }, 1000);
}

function getComments(postId, callback) {
  setTimeout(() => {
    console.log("Fetched comments");
    callback([
      { id: 1001, text: "Great post!" },
      { id: 1002, text: "Thanks for sharing!" },
    ]);
  }, 1000);
}

// Calling the functions
getUser(1, function (user) {
  getPosts(user.id, function (posts) {
    getComments(posts[0].id, function (comments) {
      console.log("First comment:", comments[0]);
    });
  });
});
