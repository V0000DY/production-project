import { memo, useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/ClassNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
  Text as TextDeprecated,
  TextAlign,
  TextSize,
} from "@/shared/ui/deprecated/Text";
import { Text } from "@/shared/ui/redesigned/Text";
import { Skeleton as SkeletonDeprecated } from "@/shared/ui/deprecated/Skeleton";
import { Skeleton } from "@/shared/ui/redesigned/Skeleton";
import { Avatar } from "@/shared/ui/deprecated/Avatar";
import EyeIcon from "@/shared/assets/icons/eye-20-20.svg";
import ClendarIcon from "@/shared/assets/icons/calendar-20-20.svg";
import { Icon } from "@/shared/ui/deprecated/Icon";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import cls from "./ArticleDetails.module.scss";
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from "../../model/selectors/articleDetails";
import { RenderArticleBlock } from "./RenderArticleBlock";
import { ToggleFeatures } from "@/shared/lib/features";
import { AppImage } from "@/shared/ui/redesigned/AppImage";

interface ArticleDetailsProps {
  className?: string;
  id?: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

const Deprecated = () => {
  const article = useSelector(getArticleDetailsData);

  return (
    <>
      <HStack justify="center" max className={cls.avatarWrapper}>
        <Avatar size={12.5} src={article?.img} className={cls.avatar} />
      </HStack>
      <VStack gap="4" max data-testid="ArticleDetails.Content">
        <TextDeprecated
          className={cls.title}
          title={article?.title}
          text={article?.subtitle}
          size={TextSize.L}
        />
        <HStack gap="8" className={cls.articleInfo}>
          <Icon Svg={EyeIcon} className={cls.icon} />
          <TextDeprecated text={String(article?.views)} />
        </HStack>
        <HStack gap="8" className={cls.articleInfo}>
          <Icon Svg={ClendarIcon} className={cls.icon} />
          <TextDeprecated text={article?.createdAt} />
        </HStack>
      </VStack>
      {article?.blocks.map(RenderArticleBlock)}
    </>
  );
};

const Redesigned = () => {
  const article = useSelector(getArticleDetailsData);
  return (
    <>
      <Text title={article?.title} size="l" bold />
      <Text title={article?.subtitle} />
      <AppImage
        fallback={<Skeleton width="100%" height={420} border="16px" />}
        src={article?.img}
        alt={article?.title}
        className={cls.img}
      />
      {article?.blocks.map(RenderArticleBlock)}
    </>
  );
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, id } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);

  useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <>
        <SkeletonDeprecated
          className={cls.avatar}
          width={12.5}
          height={12.5}
          border="50%"
        />
        <SkeletonDeprecated className={cls.title} width={19} height={1.5} />
        <SkeletonDeprecated className={cls.skeleton} width={37.5} height={2} />
        <SkeletonDeprecated
          className={cls.skeleton}
          width="100%"
          height={12.5}
        />
        <SkeletonDeprecated
          className={cls.skeleton}
          width="100%"
          height={12.5}
        />
      </>
    );
  } else if (error) {
    content = (
      <TextDeprecated title={t("article_error")} align={TextAlign.CENTER} />
    );
  } else {
    content = (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<Redesigned />}
        off={<Deprecated />}
      />
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <VStack
        max
        gap="16"
        className={classNames(cls.ArticleDetails, {}, [className])}
      >
        {content}
      </VStack>
    </DynamicModuleLoader>
  );
});
