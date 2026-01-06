import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from "@/shared/const/router";
import MainIcon from "@/shared/assets/icons/main-20-20.svg";
import AboutIcon from "@/shared/assets/icons/about-20-20.svg";
import ProfileIcon from "@/shared/assets/icons/profile-20-20.svg";
import ArticleIcon from "@/shared/assets/icons/article-20-20.svg";
import { useSidebarItems } from "./getSidebarItems";

describe("getSidebatItems selector", () => {
  test("should return only public items if user is not logged in", () => {
    const result = useSidebarItems();

    expect(result).toEqual([
      {
        path: getRouteMain(),
        text: "Main",
        Icon: MainIcon,
      },
      {
        path: getRouteAbout(),
        text: "About",
        Icon: AboutIcon,
      },
    ]);
  });

  test("should return all items if user is logged in", () => {
    const user = { id: "42", username: "vasya" };
    const result = useSidebarItems();

    expect(result).toEqual([
      {
        path: getRouteMain(),
        text: "Main",
        Icon: MainIcon,
      },
      {
        path: getRouteAbout(),
        text: "About",
        Icon: AboutIcon,
      },
      {
        path: getRouteProfile(user.id),
        text: "Profile",
        Icon: ProfileIcon,
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        text: "Articles",
        Icon: ArticleIcon,
        authOnly: true,
      },
    ]);
  });
});
