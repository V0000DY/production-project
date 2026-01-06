import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/ClassNames/classNames";
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from "@/shared/ui/deprecated/Button";
import { Input as InputDeprecated } from "@/shared/ui/deprecated/Input";
import { Text as TextDeprecated, TextTheme } from "@/shared/ui/deprecated/Text";
import { Button } from "@/shared/ui/redesigned/Button";
import { Input } from "@/shared/ui/redesigned/Input";
import { Text } from "@/shared/ui/redesigned/Text";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { loginByUsername } from "../../model/services/loginByUserName/loginByUsername";
import cls from "./LoginForm.module.scss";
import { ToggleFeatures } from "@/shared/lib/features";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { useForceUpdate } from "@/shared/lib/render/forceUpdate";

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);
  const forceUpdate = useForceUpdate();

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === "fulfilled") {
      onSuccess();
      forceUpdate();
    }
  }, [dispatch, forceUpdate, onSuccess, password, username]);

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <VStack
            gap="8"
            className={classNames(cls.LoginForm, {}, [className])}
          >
            <Text title={t("Sign in form")} />
            {error && <Text text={t("Login error")} variant="error" />}
            <Input
              type="text"
              className={cls.input}
              placeholder={t("Enter username")}
              onChange={onChangeUsername}
              value={username}
              autofocus
            />
            <Input
              type="password"
              className={cls.input}
              placeholder={t("Enter password")}
              onChange={onChangePassword}
              value={password}
            />
            <Button
              variant="outline"
              className={cls.loginBtn}
              onClick={onLoginClick}
              disabled={isLoading}
            >
              {t("login")}
            </Button>
          </VStack>
        }
        off={
          <div className={classNames(cls.LoginForm, {}, [className])}>
            <TextDeprecated title={t("Sign in form")} />
            {error && (
              <TextDeprecated text={t("Login error")} theme={TextTheme.ERROR} />
            )}
            <InputDeprecated
              type="text"
              className={cls.input}
              placeholder={t("Enter username")}
              onChange={onChangeUsername}
              value={username}
              autofocus
            />
            <InputDeprecated
              type="password"
              className={cls.input}
              placeholder={t("Enter password")}
              onChange={onChangePassword}
              value={password}
            />
            <ButtonDeprecated
              theme={ButtonTheme.OUTLINE}
              className={cls.loginBtn}
              onClick={onLoginClick}
              disabled={isLoading}
            >
              {t("login")}
            </ButtonDeprecated>
          </div>
        }
      />
    </DynamicModuleLoader>
  );
});

export default LoginForm;
