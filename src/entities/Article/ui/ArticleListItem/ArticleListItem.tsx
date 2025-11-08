import { useTranslation } from "react-i18next";
import { HTMLAttributeAnchorTarget, memo } from "react";
import { classNames } from "@/shared/lib/ClassNames/classNames";
import { Text } from "@/shared/ui/deprecated/Text";
import EyeIcon from "@/shared/assets/icons/eye-20-20.svg";
import { Icon } from "@/shared/ui/deprecated/Icon";
import { Card } from "@/shared/ui/deprecated/Card";
import { Avatar } from "@/shared/ui/deprecated/Avatar";
import { Button, ButtonTheme } from "@/shared/ui/deprecated/Button";
import { getRouteArticleDetails } from "@/shared/const/router";
import { AppLink } from "@/shared/ui/deprecated/AppLink";
import cls from "./ArticleListItem.module.scss";
import {
  Article,
  ArticleBlockType,
  ArticleTextBlock,
} from "../../model/types/article";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { ArticleView } from "../../model/consts/articleConsts";
import { AppImage } from "@/shared/ui/redesigned/AppImage";
import { Skeleton } from "@/shared/ui/deprecated/Skeleton";

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, article, view, target } = props;
  const { t } = useTranslation();

  const types = <Text text={article.type.join(", ")} className={cls.types} />;
  const views = (
    <>
      <Text text={String(article.views)} className={cls.views} />
      <Icon Svg={EyeIcon} />
    </>
  );

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;
    return (
      <div
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
        data-testid="ArticleListItem"
      >
        <Card>
          <div className={cls.header}>
            <Avatar size={2} src={article.user.avatar} />
            <Text text={article.user.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <Text title={article.title} className={cls.title} />
          {types}
          <AppImage
            fallback={<Skeleton width="100%" height={16} />}
            className={cls.img}
            src={article.img}
            alt={article.title}
          />
          {textBlock && (
            <ArticleTextBlockComponent
              block={textBlock}
              className={cls.textBlock}
            />
          )}
          <div className={cls.footer}>
            <AppLink target={target} to={getRouteArticleDetails(article.id)}>
              <Button theme={ButtonTheme.OUTLINE}>{t("Read more")}</Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      target={target}
      to={getRouteArticleDetails(article.id)}
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      data-testid="ArticleListItem"
    >
      <Card>
        <div className={cls.imageWrapper}>
          <AppImage
            fallback={<Skeleton width={12.5} height={12.5} />}
            className={cls.img}
            src={article.img}
            alt={article.title}
          />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article.title} className={cls.title} />
      </Card>
    </AppLink>
  );
});
