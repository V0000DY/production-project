import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { ListBox } from "@/shared/ui/Popups";
import { classNames } from "@/shared/lib/ClassNames/classNames";
import { Currency } from "../../model/types/currency";

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.EUR, content: Currency.EUR },
];

export const CurrencySelect = memo(
  ({ className, value, onChange, readonly }: CurrencySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Currency);
      },
      [onChange],
    );

    return (
      <ListBox
        className={classNames("", {}, [className])}
        value={value}
        defaultValue={t("profile_Currency")}
        items={options}
        onChange={onChangeHandler}
        readonly={readonly}
        direction="top right"
        label={t("profile_Currency")}
      />
    );
  },
);
