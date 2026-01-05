import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/ClassNames/classNames";
import { Input as InputDeprecated } from "@/shared/ui/deprecated/Input";
import { Button as ButtonDeprecated } from "@/shared/ui/deprecated/Button";
import { Input } from "@/shared/ui/redesigned/Input";
import { Button } from "@/shared/ui/redesigned/Button";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { HStack } from "@/shared/ui/redesigned/Stack";
import {
  getAddCommentFormError,
  getAddCommentFormText,
} from "../../model/selectors/addCommentFormSelectors";
import cls from "./AddCommentForm.module.scss";
import {
  addCommentFormActions,
  addCommentFormReducer,
} from "../../model/slices/addCommentFormSlice";
import { ToggleFeatures } from "@/shared/lib/features";
import { Card } from "@/shared/ui/redesigned/Card";

export interface AddCommentFormProps {
  className?: string;
  // eslint-disable-next-line no-unused-vars
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation();
  const text = useSelector(getAddCommentFormText);
  // eslint-disable-next-line no-unused-vars
  const error = useSelector(getAddCommentFormError);
  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch],
  );

  const onSendHandler = useCallback(() => {
    onSendComment(text || "");
    onCommentTextChange("");
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Card padding="24" max border="partial">
            <HStack
              justify="between"
              max
              gap="16"
              className={classNames(cls.AddCommentFormRedesigned, {}, [
                className,
              ])}
              data-testid="AddCommentForm"
            >
              <Input
                className={cls.input}
                placeholder={t("Enter your comment")}
                value={text}
                onChange={onCommentTextChange}
                data-testid="AddCommentForm.Input"
              />
              <Button
                onClick={onSendHandler}
                data-testid="AddCommentForm.Button"
              >
                {t("Send")}
              </Button>
            </HStack>
          </Card>
        }
        off={
          <HStack
            justify="between"
            max
            className={classNames(cls.AddCommentForm, {}, [className])}
            data-testid="AddCommentForm"
          >
            <InputDeprecated
              className={cls.input}
              placeholder={t("Enter your comment")}
              value={text}
              onChange={onCommentTextChange}
              data-testid="AddCommentForm.Input"
            />
            <ButtonDeprecated
              onClick={onSendHandler}
              data-testid="AddCommentForm.Button"
            >
              {t("Send")}
            </ButtonDeprecated>
          </HStack>
        }
      />
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
