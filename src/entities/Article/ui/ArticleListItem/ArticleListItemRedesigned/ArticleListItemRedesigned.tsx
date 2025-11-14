import { useTranslation } from "react-i18next";
import { memo } from "react";
import { classNames } from "@/shared/lib/ClassNames/classNames";
import { Text } from "@/shared/ui/redesigned/Text";
import EyeIcon from "@/shared/assets/icons/eye.svg";
import { Icon } from "@/shared/ui/redesigned/Icon";
import { Card } from "@/shared/ui/redesigned/Card";
import { Avatar } from "@/shared/ui/redesigned/Avatar";
import { Button } from "@/shared/ui/redesigned/Button";
import { getRouteArticleDetails } from "@/shared/const/router";
import { AppLink } from "@/shared/ui/redesigned/AppLink";
import cls from "./ArticleListItemRedesigned.module.scss";
import { ArticleTextBlock } from "../../../model/types/article";
import {
  ArticleBlockType,
  ArticleView,
} from "../../../model/consts/articleConsts";
import { AppImage } from "@/shared/ui/redesigned/AppImage";
import { Skeleton } from "@/shared/ui/redesigned/Skeleton";
import { ArticleListItemProps } from "../ArticleListItem";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";

export const ArticleListItemRedesigned = memo((props: ArticleListItemProps) => {
  const { className, article, view, target } = props;
  const { t } = useTranslation();

  const userInfo = (
    <>
      <Avatar size={32} src={article.user.avatar} />
      <Text text={article.user.username} bold />
    </>
  );

  const views = (
    <HStack gap="8">
      <Icon Svg={EyeIcon} />
      <Text text={String(article.views)} className={cls.views} />
    </HStack>
  );

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;

    return (
      <Card
        max
        padding="24"
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
        data-testid="ArticleListItem"
      >
        <VStack gap="16" max>
          <HStack gap="8">
            {userInfo}
            <Text text={article.createdAt} />
          </HStack>
          <Text title={article.title} bold />
          <Text title={article.subtitle} size="s" />
          <AppImage
            fallback={<Skeleton width="100%" height={16} />}
            className={cls.img}
            src={article.img}
            alt={article.title}
          />
          {textBlock?.paragraphs && (
            <Text
              text={textBlock.paragraphs.slice(0, 2).join(" ")}
              className={cls.textBlock}
            />
          )}
          <HStack max justify="between">
            <AppLink target={target} to={getRouteArticleDetails(article.id)}>
              <Button>{t("Read more")}</Button>
            </AppLink>
            {views}
          </HStack>
        </VStack>
      </Card>
    );
  }

  return (
    <AppLink
      data-testid="ArticleListItem"
      target={target}
      to={getRouteArticleDetails(article.id)}
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
    >
      <Card className={cls.card} border="round">
        <AppImage
          fallback={<Skeleton width={200} height={200} />}
          className={cls.img}
          src={article.img}
          alt={article.title}
        />
        <VStack className={cls.info} gap="4">
          <Text text={article.title} className={cls.title} />
          <VStack gap="4" className={cls.footer} max>
            <HStack justify="between" max>
              <Text text={article.createdAt} className={cls.date} />
              {views}
            </HStack>
            <HStack gap="4">{userInfo}</HStack>
          </VStack>
        </VStack>
      </Card>
    </AppLink>
  );
});
