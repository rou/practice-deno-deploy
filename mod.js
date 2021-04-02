import { handleRequest } from "./request_handler";

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
