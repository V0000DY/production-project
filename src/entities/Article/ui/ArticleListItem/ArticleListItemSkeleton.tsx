import { memo } from "react";
import { classNames } from "@/shared/lib/ClassNames/classNames";
import { Card } from "@/shared/ui/deprecated/Card";
import { Skeleton } from "@/shared/ui/deprecated/Skeleton";
import cls from "./ArticleListItem.module.scss";
import { ArticleView } from "../../model/consts/articleConsts";

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton = memo(
  (props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

    if (view === ArticleView.BIG) {
      return (
        <div
          className={classNames(cls.ArticleListItem, {}, [
            className,
            cls[view],
          ])}
        >
          <Card>
            <div className={cls.header}>
              <Skeleton border="50%" height={2} width={2} />
              <Skeleton width={9.25} height={1} className={cls.username} />
              <Skeleton width={9.25} height={1} className={cls.date} />
            </div>
            <Skeleton width={15.75} height={1.5} className={cls.title} />
            <Skeleton height={12.5} className={cls.img} />
            <div className={cls.footer}>
              <Skeleton width={12.5} height={2.125} />
            </div>
          </Card>
        </div>
      );
    }

    return (
      <div
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Card>
          <div className={cls.imageWrapper}>
            <Skeleton className={cls.img} width={12.5} height={12.5} />
          </div>
          <div className={cls.infoWrapper}>
            <Skeleton width={8.125} height={1} />
          </div>
          <Skeleton className={cls.title} width={9.25} height={1} />
        </Card>
      </div>
    );
  },
);
