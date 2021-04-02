import { handleRequest } from "~/request_handler.js";

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
