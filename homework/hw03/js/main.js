import { getAccessToken } from "./utilities.js";
const rootURL = "https://photo-app-secured.herokuapp.com";
let token = null;
let username = "eli";
let password = "password";

async function initializeScreen() {
  //this funciton gets invoked when the page first loads
  token = await getToken();
  showNav();
  //get posts
  getPosts();
}

async function getToken() {
  return await getAccessToken(rootURL, username, password);
}

function showNav() {
  document.querySelector("#nav").innerHTML = `
    <nav class="flex justify-between py-5 px-9 bg-white border-b fixed w-full top-0">
            <h1 class="font-Comfortaa font-bold text-2xl">Photo App</h1>
            <ul class="flex gap-4 text-sm items-center justify-center">
                <li><span>${username}</span></li>
                <li><button class="text-blue-700 py-2">Sign out</button></li>
            </ul>
        </nav>
    `;
}

// implement remaining functionality below:
//await async syntax

// profile code

//posts code
async function getPosts() {
  const response = await fetch(
    "https://photo-app-secured.herokuapp.com/api/posts/?limit=10",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  console.log(data);
  renderPosts(data);
}

function getBookmarkButton(postJSON) {
  let template = "";
  if (postJSON.current_user_bookmark_id) {
    //has bookmark
    template = `
    <button onclick="window.deleteBookmark(${postJSON.current_user_bookmark_id})">
        <i class="fas fa-bookmark"></i>
    </button>
    `;
  } else {
    template = `
      <button onclick="window.createBookmark(${postJSON.id})">
          <i class="far fa-bookmark"></i>
      </button>
    `;
  }

  return template;
}

function getLikeButton(postJSON) {
  let template = "";
  if (postJSON.current_user_like_id) {
    template = `
    <button onClick="deleteLike(${postJSON.current_user_like_id})">
      <i class="fa-solid fa-heart text-red-700"> </i>
    </button>
  `;
  } else {
    template = `
    <button onClick="createLike(${postJSON.id})">
      <i class="far fa-heart"> </i>
    </button>
    `;
  }
  return template;
}

function renderPost(postJSON) {
  const template = `
        <section class="bg-white border mb-10">
            <div class="p-4 flex justify-between">
                <h3 class="text-lg font-Comfortaa font-bold">${
                  postJSON.user.username
                }</h3>
                <button class="icon-button"><i class="fas fa-ellipsis-h"></i></button>
            </div>
            <img src="${
              postJSON.image_url
            }" alt="placeholder image" width="300" height="300"
                class="w-full bg-cover">
            <div class="p-4">
                <div class="flex justify-between text-2xl mb-3">
                    <div>
                        ${getLikeButton(postJSON)}
                        <button><i class="far fa-comment"></i></button>
                        <button><i class="far fa-paper-plane"></i></button>
                    </div>
                    <div>
                        ${getBookmarkButton(postJSON)}
                    </div>
                </div>
                <p class="font-bold mb-3">${postJSON.likes.length} likes</p>
                <div class="text-sm mb-3">
                    <p>
                        <strong>${postJSON.user.username}</strong>
                        ${postJSON.caption} <button class="button">more</button>
                    </p>
                </div>
                ${showComments(postJSON.comments)}
                <p class="uppercase text-gray-500 text-xs">1 day ago</p>
            </div>
            <div class="flex justify-between items-center p-3">
                <div class="flex items-center gap-3 min-w-[80%]">
                    <i class="far fa-smile text-lg"></i>
                    <input type="text" class="min-w-[80%] focus:outline-none" placeholder="Add a comment...">
                </div>
                <button class="text-blue-500 py-2">Post</button>
            </div>
        </section>
    `;
  const container = document.querySelector("main");
  container.insertAdjacentHTML("beforeend", template);
}

function renderPosts(postListJSON) {
  postListJSON.forEach(renderPost);
}

//await / async syntax:
window.createBookmark = async function (postID) {
  const postData = {
    post_id: postID,
  };

  const response = await fetch(
    "https://photo-app-secured.herokuapp.com/api/bookmarks/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(postData),
    }
  );
  const data = await response.json();
  console.log(data);
};

window.deleteBookmark = async function (bookmarkId) {
  const response = await fetch(
    `https://photo-app-secured.herokuapp.com/api/bookmarks/${bookmarkId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  console.log(data);
};

function showComments(comments) {
  let template = "";
  if (comments.length > 1) {
    const lastComment = comments[comments.length - 1];
    template = `
    <p class="text-sm mb-3">
      ${lastComment.user.username} ${lastComment.text}
    </p>
    <button class="text-sm mb-3">
      view all ${comments.length} comments
    </button>
    `;
  }
  if (comments.length === 1) {
    template = `
    <p class="text-sm mb-3">
      <strong> ${comments[0].user.username} </strong>
      ${comments[0].text}
    </p>
    `;
  }
  return template;
}

window.createLike = async function (postID) {
  const postData = {
    post_id: postID,
  };
  const response = await fetch(
    "https://photo-app-secured.herokuapp.com/api/likes/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(postData),
    }
  );
  const data = await response.json();
  console.log(data);
};

window.deleteLike = async function (likeID) {
  const response = await fetch(
    `https://photo-app-secured.herokuapp.com/api/likes/${likeID}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  console.log(data);
};

// after all of the functions are defined, invoke initialize at the bottom:
initializeScreen();
