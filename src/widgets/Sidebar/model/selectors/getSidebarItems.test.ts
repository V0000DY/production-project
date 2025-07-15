import { RoutePath } from "shared/config/routeConfig/routeConfig";
import MainIcon from "shared/assets/icons/main-20-20.svg";
import AboutIcon from "shared/assets/icons/about-20-20.svg";
import ProfileIcon from "shared/assets/icons/profile-20-20.svg";
import ArticleIcon from "shared/assets/icons/article-20-20.svg";
import { getSidebarItems } from "./getSidebarItems";

describe("getSidebatItems selector", () => {
  test("should return only public items if user is not logged in", () => {
    const result = getSidebarItems.resultFunc(undefined);

    expect(result).toEqual([
      {
        path: RoutePath.main,
        text: "Main",
        Icon: MainIcon,
      },
      {
        path: RoutePath.about,
        text: "About",
        Icon: AboutIcon,
      },
    ]);
  });

  test("should return all items if user is logged in", () => {
    const user = { id: "42", username: "vasya" };
    const result = getSidebarItems.resultFunc(user);

    expect(result).toEqual([
      {
        path: RoutePath.main,
        text: "Main",
        Icon: MainIcon,
      },
      {
        path: RoutePath.about,
        text: "About",
        Icon: AboutIcon,
      },
      {
        path: `${RoutePath.profile}${user.id}`,
        text: "Profile",
        Icon: ProfileIcon,
        authOnly: true,
      },
      {
        path: RoutePath.articles,
        text: "Articles",
        Icon: ArticleIcon,
        authOnly: true,
      },
    ]);
  });
});
