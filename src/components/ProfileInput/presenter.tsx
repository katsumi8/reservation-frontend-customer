import { TextInput, Checkbox, Group, InputWrapper } from "@mantine/core";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { classStyle } from "./const";
import ButtonUI from "@/uiParts/ButtonUI";
import { useCreateForm } from "./hooks";

const BasicProfileInfo = () => {
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
    <form onSubmit={submitHandler}>
      <div>
        <Group position="left" mt="md">
          <TextInput
            placeholder="First name"
            label="First name"
            required
            {...firstNameProps}
          />
          <TextInput
            placeholder="Last name"
            label="Last name"
            required
            {...lastNameProps}
          />
        </Group>
        <br />
        <TextInput
          label="email"
          required
          placeholder="your@email.com"
          {...emailProps}
        />

        <br />
        <InputWrapper id="phone" required label="Phone number">
          <PhoneInput
            country={"de"}
            {...phoneNumberProps}
            inputStyle={inputStyle}
            onFocus={onFocusPhoneHandler}
            onBlur={onBlurPhoneHandler}
          />
          <div style={classStyle}>{phoneNumberError && phoneNumberError}</div>
        </InputWrapper>
        <Checkbox
          mt="md"
          label="I agree to Terms & Conditions and Privacy Policy."
          {...termsOfServiceProps}
          required
        />
      </div>
      <br />
      <ButtonUI
        primaryLabel="Submit"
        secondaryLabel="← Go back"
        buttonType="submit"
        secondaryButtonType="button"
        pathNames={["/thank-you", "/seat-select"]}
      />
    </form>
  );
};

export default BasicProfileInfo;
