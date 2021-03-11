//Access to all wall posts

import Session from "./Session";

const posts = [
  {
    src: "https://bulma.io/images/placeholders/1280x960.png",
    alt: "Placeholder image",
    caption: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: Date(),

    user: {
      name: "John Smith",
      handle: "@johnsmith",
      pic: "https://bulma.io/images/placeholders/96x96.png",
    },
  },
  {
    src: "https://bulma.io/images/placeholders/1280x960.png",
    alt: "Placeholder image",
    caption: " Fun in Web Server Programming",
    time: Date(),

    user: {
      name: "Jackson Teller",
      handle: "@johnsmith",
      pic: "https://bulma.io/images/placeholders/96x96.png",
    },
  },
  {
    src: "https://bulma.io/images/placeholders/1280x960.png",
    alt: "Placeholder image",
    caption: " Wonderful Monday! ",
    time: Date(),

    user: {
      name: "Cas Cacchione",
      handle: "@johnsmith",
      pic: "https://bulma.io/images/placeholders/96x96.png",
    },
  },
];

export function GetMyPosts() {
  return GetPostsForUser(Session.user.handle);
}

export function GetPostsForUser(id) {
  return posts.filters((x) => x.user.handle == id);
}

export function GetMyFeed() {
  return posts;
}
