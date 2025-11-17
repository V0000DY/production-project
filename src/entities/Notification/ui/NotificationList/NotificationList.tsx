import { memo } from "react";
import { classNames } from "@/shared/lib/ClassNames/classNames";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { Skeleton as SkeletonDeprecated } from "@/shared/ui/deprecated/Skeleton";
import { Skeleton } from "@/shared/ui/redesigned/Skeleton";
import cls from "./NotificationList.module.scss";
import { useNotifications } from "../../api/notificationApi";
import { NotificationItem } from "../NotificationItem/NotificationItem";
import { ToggleFeatures } from "@/shared/lib/features";

interface NotificationListProps {
  className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
  const { className } = props;
  const { data, isLoading } = useNotifications(null, {
    pollingInterval: 10000,
  });

  if (isLoading) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <VStack
            gap="16"
            max
            className={classNames(cls.NotificationList, {}, [className])}
          >
            <Skeleton width="100%" height="80px" border="8px" />
            <Skeleton width="100%" height="80px" border="8px" />
            <Skeleton width="100%" height="80px" border="8px" />
          </VStack>
        }
        off={
          <VStack
            gap="16"
            max
            className={classNames(cls.NotificationList, {}, [className])}
          >
            <SkeletonDeprecated width="100%" height="5" border="0.5" />
            <SkeletonDeprecated width="100%" height="5" border="0.5" />
            <SkeletonDeprecated width="100%" height="5" border="0.5" />
          </VStack>
        }
      />
    );
  }

  return (
    <VStack
      gap="16"
      max
      className={classNames(cls.NotificationList, {}, [className])}
    >
      {data?.map((notification) => (
        <NotificationItem key={notification.id} item={notification} />
      ))}
    </VStack>
  );
});
