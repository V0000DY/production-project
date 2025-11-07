/* eslint-disable no-unused-vars */
import { useTranslation } from "react-i18next";
import { classNames, Mods } from "@/shared/lib/ClassNames/classNames";
import { Text, TextAlign, TextTheme } from "@/shared/ui/deprecated/Text";
import { Input } from "@/shared/ui/deprecated/Input";
import { Loader } from "@/shared/ui/deprecated/Loader";
import { Avatar } from "@/shared/ui/deprecated/Avatar";
import { Currency, CurrencySelect } from "@/entities/Currency";
import { Country, CountrySelect } from "@/entities/Country";
import { HStack, VStack } from "@/shared/ui/deprecated/Stack";
import { Profile } from "../../model/types/profile";
import cls from "./ProfileCard.module.scss";

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstName?: (value?: string) => void;
  onChangeLastName?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { t } = useTranslation();
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;

  if (isLoading) {
    return (
      <HStack
        justify="center"
        max
        className={classNames(cls.ProfileCard, { [cls.loading]: true }, [
          className,
        ])}
      >
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack
        justify="center"
        max
        className={classNames(cls.ProfileCard, {}, [className, cls.error])}
      >
        <Text
          title={t("profile_load_error")}
          text={t("profile_reload")}
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
        />
      </HStack>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <VStack
      gap="16"
      max
      className={classNames(cls.ProfileCard, mods, [className])}
    >
      {data?.avatar && (
        <HStack justify="center" max className={cls.avatarWrapper}>
          <Avatar src={data?.avatar} alt={t("profile_Avatar")} />
        </HStack>
      )}
      <Input
        value={data?.first}
        placeholder={t("profile_Name")}
        className={cls.input}
        onChange={onChangeFirstName}
        readonly={readonly}
        data-testid="ProfileCard.firstname"
      />
      <Input
        value={data?.lastname}
        placeholder={t("profile_Lastname")}
        className={cls.input}
        onChange={onChangeLastName}
        readonly={readonly}
        data-testid="ProfileCard.lastname"
      />
      <Input
        value={data?.age}
        placeholder={t("profile_Age")}
        className={cls.input}
        onChange={onChangeAge}
        readonly={readonly}
      />
      <Input
        value={data?.city}
        placeholder={t("profile_City")}
        className={cls.input}
        onChange={onChangeCity}
        readonly={readonly}
      />
      <Input
        value={data?.username}
        placeholder={t("profile_Username")}
        className={cls.input}
        onChange={onChangeUsername}
        readonly={readonly}
      />
      <Input
        value={data?.avatar}
        placeholder={t("profile_AvatarLink")}
        className={cls.input}
        onChange={onChangeAvatar}
        readonly={readonly}
      />
      <CurrencySelect
        className={cls.input}
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
      />
      <CountrySelect
        className={cls.input}
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readonly}
      />
    </VStack>
  );
};
