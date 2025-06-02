import { classNames } from "shared/lib/ClassNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { getLoginState } from "../../model/selectors/getLoginState";
import { loginActions } from "../../model/slice/loginSlice";
import { loginByUsername } from "../../model/services/loginByUserName/loginByUsername";
import cls from "./LoginForm.module.scss";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username, password, error, isLoading } = useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t("Sign in form")} />
      {error && <Text text={t("Login error")} theme={TextTheme.ERROR} />}
      <Input
        type="text"
        className={cls.input}
        placeholder={t("Enter username")}
        onChange={onChangeUsername}
        value={username}
        autofocus
      />
      <Input
        type="text"
        className={cls.input}
        placeholder={t("Enter password")}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        theme={ButtonTheme.OUTLINE}
        className={cls.loginBtn}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t("login")}
      </Button>
    </div>
  );
});
