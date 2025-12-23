import { ArticleBlockType } from "../../model/consts/articleConsts";
import { ArticleBlock } from "../../model/types/article";
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import cls from "./ArticleDetails.module.scss";

export const RenderArticleBlock = (block: ArticleBlock) => {
  const { type, id } = block;

  switch (type) {
    case ArticleBlockType.CODE:
      return (
        <ArticleCodeBlockComponent
          key={id}
          block={block}
          className={cls.block}
        />
      );
    case ArticleBlockType.IMAGE:
      return (
        <ArticleImageBlockComponent
          key={id}
          block={block}
          className={cls.block}
        />
      );
    case ArticleBlockType.TEXT:
      return (
        <ArticleTextBlockComponent
          key={id}
          className={cls.block}
          block={block}
        />
      );
    default:
      return null;
  }
};
