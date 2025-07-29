/* eslint-disable no-unused-vars */
import { memo, useCallback, useMemo } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import { useTranslation } from "react-i18next";
import { Select, SelectOption } from "shared/ui/Select/Select";
import { ArticleSortField } from "entities/Article/model/types/article";
import { SortOrder } from "shared/types";
import cls from "./ArticleSortSelector.module.scss";

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const { className, onChangeOrder, onChangeSort, order, sort } = props;
  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      { value: "asc", content: t("ascending") },
      { value: "desc", content: t("descending") },
    ],
    [t]
  );

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
    () => [
      { value: ArticleSortField.CREATED, content: t("date of creation") },
      { value: ArticleSortField.TITLE, content: t("title") },
      { value: ArticleSortField.VIEWS, content: t("views") },
    ],
    [t]
  );

  return (
    <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
      <Select
        options={sortFieldOptions}
        label={t("sort by")}
        value={sort}
        onChange={onChangeSort}
      />
      <Select
        className={cls.order}
        options={orderOptions}
        label={t("by")}
        value={order}
        onChange={onChangeOrder}
      />
    </div>
  );
});
