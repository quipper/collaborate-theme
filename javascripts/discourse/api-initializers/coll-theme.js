import { apiInitializer } from "discourse/lib/api";
import { inject as service } from "@ember/service";
export default apiInitializer("0.11.1", api => {
  const latestRoute = '/latest';
  const unreadRoute = '/unread';
  const topRoute = '/top';
  const categoriesRoute = '/categories';


  api.onPageChange((url) => {
    if (url !== "/" || url !== latestRoute || url !== unreadRoute || url !== topRoute || url !== categoriesRoute) {
      document.querySelector("html").classList.remove("forum-naration");
    }
  })
});
