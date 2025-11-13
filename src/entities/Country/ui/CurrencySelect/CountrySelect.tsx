import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { ListBox as ListBoxDeprecated } from "@/shared/ui/deprecated/Popups";
import { classNames } from "@/shared/lib/ClassNames/classNames";
import { Country } from "../../model/types/country";
import { ToggleFeatures } from "@/shared/lib/features";
import { ListBox } from "@/shared/ui/redesigned/Popups";

interface CountrySelectProps {
  className?: string;
  value?: Country;
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Georgia, content: Country.Georgia },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo(
  ({ className, value, onChange, readonly }: CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Country);
      },
      [onChange],
    );

    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <ListBox
            className={classNames("", {}, [className])}
            value={value}
            defaultValue={t("profile_Country")}
            items={options}
            onChange={onChangeHandler}
            readonly={readonly}
            direction="top right"
            label={t("profile_Country")}
          />
        }
        off={
          <ListBoxDeprecated
            className={classNames("", {}, [className])}
            value={value}
            defaultValue={t("profile_Country")}
            items={options}
            onChange={onChangeHandler}
            readonly={readonly}
            direction="top right"
            label={t("profile_Country")}
          />
        }
      />
    );
  },
);
