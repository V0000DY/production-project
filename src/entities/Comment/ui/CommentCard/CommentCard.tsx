import { memo } from "react";
import { classNames } from "@/shared/lib/ClassNames/classNames";
import { Avatar } from "@/shared/ui/deprecated/Avatar";
import { Text } from "@/shared/ui/deprecated/Text";
import { Skeleton } from "@/shared/ui/deprecated/Skeleton";
import { AppLink } from "@/shared/ui/deprecated/AppLink";
import { getRouteProfile } from "@/shared/const/router";
import { VStack } from "@/shared/ui/deprecated/Stack";
import { Comment } from "../../model/types/comment";
import cls from "./CommentCard.module.scss";

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <VStack
        gap="8"
        max
        className={classNames(cls.CommentCard, {}, [className, cls.loading])}
        data-testid="CommentCard.Loading"
      >
        <div className={cls.header}>
          <Skeleton width={2} height={2} border="50%" />
          <Skeleton width={6} height={1} className={cls.username} />
        </div>
        <Skeleton width="100%" height={3} className={cls.text} />
      </VStack>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <VStack
      gap="8"
      max
      className={classNames(cls.CommentCard, {}, [className])}
      data-testid="CommentCard.Content"
    >
      <AppLink to={getRouteProfile(comment.user.id)} className={cls.header}>
        {comment.user.avatar && <Avatar size={2} src={comment.user.avatar} />}
        <Text title={comment.user.username} className={cls.username} />
      </AppLink>
      <Text text={comment.text} className={cls.text} />
    </VStack>
  );
});
