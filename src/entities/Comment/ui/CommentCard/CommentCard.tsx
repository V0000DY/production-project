import { memo } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Text } from "shared/ui/Text/Text";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Comment } from "../../model/types/comment";
import cls from "./CommentCard.module.scss";

interface CommentCardProps {
  className?: string;
  comment: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentCard, {}, [className])}>
        <div className={cls.header}>
          <Skeleton width={2} height={2} border="50%" />
          <Skeleton width={6} height={1} className={cls.username} />
        </div>
        <Skeleton width="100%" height={3} className={cls.text} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
      <div className={cls.header}>
        {comment.user.avatar && <Avatar size={2} src={comment.user.avatar} />}
        <Text title={comment.user.username} className={cls.username} />
      </div>
      <Text text={comment.text} className={cls.text} />
    </div>
  );
});
