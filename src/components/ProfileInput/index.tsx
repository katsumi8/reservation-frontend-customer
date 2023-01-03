import React from "react";
import { TitleProp } from "@/types/propTypes";
import ProfileInfoPresenter from "./presenter";
import { useCreateForm } from "@/hooks/useCreateForm";

const ProfileInfo = ({ title }: TitleProp) => {
  const {
    firstNameProps,
    lastNameProps,
    emailProps,
    phoneNumberProps,
    termsOfServiceProps,
    inputStyle,
    phoneNumberError,
    onFocusPhoneHandler,
    onBlurPhoneHandler,
    submitHandler,
  } = useCreateForm();

  return (
    <ProfileInfoPresenter
      title={title}
      firstNameProps={firstNameProps}
      lastNameProps={lastNameProps}
      emailProps={emailProps}
      phoneNumberProps={phoneNumberProps}
      termsOfServiceProps={termsOfServiceProps}
      inputStyle={inputStyle}
      phoneNumberError={phoneNumberError}
      onFocusPhoneHandler={onFocusPhoneHandler}
      onBlurPhoneHandler={onBlurPhoneHandler}
      submitHandler={submitHandler}
    />
  );
};

export default ProfileInfo;
