import { memo, useCallback } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui/Text/Text";
import EyeIcon from "shared/assets/icons/eye-20-20.svg";
import { Icon } from "shared/ui/Icon/Icon";
import { Card } from "shared/ui/Card/Card";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import cls from "./ArticleListItem.module.scss";
import {
  Article,
  ArticleBlockType,
  ArticleTextBlock,
  ArticleView,
} from "../../model/types/article";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  // isLoading?: boolean;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, article, view } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onOpenArticle = useCallback(() => {
    navigate(RoutePath.article_details + article.id);
  }, [article.id, navigate]);

  const types = <Text text={article.type.join(", ")} className={cls.types} />;
  const views = (
    <>
      <Text text={String(article.views)} className={cls.views} />
      <Icon Svg={EyeIcon} />
    </>
  );
  const image = (
    <img className={cls.img} src={article.img} alt={article.title} />
  );

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT
    ) as ArticleTextBlock;
    return (
      <div
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Card>
          <div className={cls.header}>
            <Avatar size={2} src={article.user.avatar} />
            <Text text={article.user.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <Text title={article.title} className={cls.title} />
          {types}
          {image}
          {textBlock && (
            <ArticleTextBlockComponent
              block={textBlock}
              className={cls.textBlock}
            />
          )}
          <div className={cls.footer}>
            <Button onClick={onOpenArticle} theme={ButtonTheme.OUTLINE}>
              {t("Read more")}
            </Button>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
    >
      <Card onClick={onOpenArticle}>
        <div className={cls.imageWrapper}>
          {image}
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article.title} className={cls.title} />
      </Card>
    </div>
  );
});
