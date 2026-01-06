import { memo, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { ListBox } from "@/shared/ui/redesigned/Popups";
import { getFeatureFlags, updateFeatureFlag } from "@/shared/lib/features";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getUserAuthData } from "@/entities/User";
import { HStack } from "@/shared/ui/redesigned/Stack";
import { Text } from "@/shared/ui/redesigned/Text";
import { Skeleton } from "@/shared/ui/redesigned/Skeleton";
import { useForceUpdate } from "@/shared/lib/render/forceUpdate";

interface UiDesignSwitcherProps {
  className?: string;
}

export const UiDesignSwitcher = memo((props: UiDesignSwitcherProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const isAppRedesigned = getFeatureFlags("isAppRedesigned");
  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);
  const [isLoading, setIsLoading] = useState(false);
  const forceUpdate = useForceUpdate();

  const items = useMemo(
    () => [
      {
        content: t("Redesigned"),
        value: "new",
      },
      {
        content: t("Deprecated"),
        value: "old",
      },
    ],
    [t],
  );

  const onChangeHandler = async (value: string) => {
    if (authData) {
      setIsLoading(true);
      await dispatch(
        updateFeatureFlag({
          userId: authData.id,
          newFeatures: { isAppRedesigned: value === "new" },
        }),
      ).unwrap();
      setIsLoading(false);
      forceUpdate();
    }
  };

  return (
    <HStack>
      <Text text={t("UiDesignSwitcher")} />
      {isLoading ? (
        <Skeleton width={100} height={40} />
      ) : (
        <ListBox
          onChange={onChangeHandler}
          value={isAppRedesigned ? "new" : "old"}
          items={items}
          className={className}
        />
      )}
    </HStack>
  );
});
