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

async function fetchData(userId) {
  try {
    const user = await getUser(userId);
    console.log("User:", user);

    const posts = await getPosts(user.id);
    console.log("Posts:", posts);

    const comments = await getComments(posts[0].id);
    console.log("First comment:", comments[0]);
  } catch (error) {
    console.error("Error occurred:", error.message); // Access error message
  }
}

// Call the async function
fetchData(1);
