import { memo } from "react";
import { classNames } from "@/shared/lib/ClassNames/classNames";
import { Card as CardDeprecated } from "@/shared/ui/deprecated/Card";
import { Card as CardRedesigned } from "@/shared/ui/redesigned/Card";
import { Skeleton as SkeletonDeprecated } from "@/shared/ui/deprecated/Skeleton";
import { Skeleton as SkeletonRedesigned } from "@/shared/ui/redesigned/Skeleton";
import cls from "./ArticleListItem.module.scss";
import { ArticleView } from "../../model/consts/articleConsts";
import { ToggleFeatures } from "@/shared/lib/features";

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton = memo(
  (props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

    if (view === ArticleView.BIG) {
      return (
        <ToggleFeatures
          feature="isAppRedesigned"
          on={
            <div
              className={classNames(cls.ArticleListItem, {}, [
                className,
                cls[view],
              ])}
            >
              <CardRedesigned>
                <div className={cls.header}>
                  <SkeletonRedesigned border="50%" height={32} width={32} />
                  <SkeletonRedesigned
                    width={148}
                    height={16}
                    className={cls.username}
                  />
                  <SkeletonRedesigned
                    width={148}
                    height={16}
                    className={cls.date}
                  />
                </div>
                <SkeletonRedesigned
                  width={252}
                  height={24}
                  className={cls.title}
                />
                <SkeletonRedesigned height={200} className={cls.img} />
                <div className={cls.footer}>
                  <SkeletonRedesigned width={200} height={34} />
                </div>
              </CardRedesigned>
            </div>
          }
          off={
            <div
              className={classNames(cls.ArticleListItem, {}, [
                className,
                cls[view],
              ])}
            >
              <CardDeprecated>
                <div className={cls.header}>
                  <SkeletonDeprecated border="50%" height={2} width={2} />
                  <SkeletonDeprecated
                    width={9.25}
                    height={1}
                    className={cls.username}
                  />
                  <SkeletonDeprecated
                    width={9.25}
                    height={1}
                    className={cls.date}
                  />
                </div>
                <SkeletonDeprecated
                  width={15.75}
                  height={1.5}
                  className={cls.title}
                />
                <SkeletonDeprecated height={12.5} className={cls.img} />
                <div className={cls.footer}>
                  <SkeletonDeprecated width={12.5} height={2.125} />
                </div>
              </CardDeprecated>
            </div>
          }
        />
      );
    }

    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <div
            className={classNames(cls.ArticleListItem, {}, [
              className,
              cls[view],
            ])}
          >
            <CardRedesigned>
              <div className={cls.imageWrapper}>
                <SkeletonRedesigned
                  className={cls.img}
                  width={200}
                  height={200}
                />
              </div>
              <div className={cls.infoWrapper}>
                <SkeletonRedesigned width={130} height={16} />
              </div>
              <SkeletonRedesigned
                className={cls.title}
                width={148}
                height={16}
              />
            </CardRedesigned>
          </div>
        }
        off={
          <div
            className={classNames(cls.ArticleListItem, {}, [
              className,
              cls[view],
            ])}
          >
            <CardDeprecated>
              <div className={cls.imageWrapper}>
                <SkeletonDeprecated
                  className={cls.img}
                  width={12.5}
                  height={12.5}
                />
              </div>
              <div className={cls.infoWrapper}>
                <SkeletonDeprecated width={8.125} height={1} />
              </div>
              <SkeletonDeprecated
                className={cls.title}
                width={9.25}
                height={1}
              />
            </CardDeprecated>
          </div>
        }
      />
    );
  },
);
