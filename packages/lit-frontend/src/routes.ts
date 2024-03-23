import "./views/profile-page";

export default [
  {
    path: "/app/profile/:userid",
    component: "profile-page"
  },
  { path: "(.*)", redirect: "/app" }
];