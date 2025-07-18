import { memo, useCallback } from "react";
import { classNames } from "../../lib/ClassNames/classNames";
import CopyIcon from "../../assets/icons/copy-20-20.svg";
import cls from "./Code.module.scss";
import { Button, ButtonTheme } from "../Button/Button";

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo((props: CodeProps) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button
        onClick={onCopy}
        className={cls.copyBtn}
        theme={ButtonTheme.CLEAR}
      >
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
});
