import { useSelector } from "@/contexts/store";
import {
  dateCreator,
  enteredGuestFix,
} from "./useReservationInfoTable";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { useRouter } from "next/router";
import { styles } from "../const/profileInputStyles";
import { useReservationCreator } from "@/utils/mutation/reservationCreate";
import { UserInput, ReservationCreateVariables } from "@/types/graphqlTypes";


export const useCreateForm = () => {
  let inputStyle = styles.input;
  const router = useRouter();
  const tableIds = useSelector((state) => state.tableSelector.table);
  const customers = useSelector((state) => state.customers.customers);
  const moreCustomers = useSelector((state) => state.customers.moreCustomers);
  const date = useSelector((state) => state.timeAndSlot.date);
  const timeSlot = useSelector((state) => state.timeAndSlot.timeSlot).replace(
    / /g,
    ""
  );
  const description = useSelector((state) => state.description.description);
  const reservedDate = dateCreator(date);
  const enteredGuests = enteredGuestFix(customers, moreCustomers);
  const { reservationCreate } = useReservationCreator();

  const [isFocused, setFocused] = useState({
    Fname: false,
    Lname: false,
    email: false,
    phone: false,
  });

  const form = useForm({
    initialValues: {
      Fname: "",
      Lname: "",
      email: "",
      phone: "",
      termsOfService: false,
    },

    validate: {
      Fname: (values) => (values.length < 2 ? "Too short name" : null),
      Lname: (values) => (values.length < 2 ? "Too short name" : null),
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Email should include @",
      phone: (value) => (value.length < 10 ? "Invalid phone number" : null),
    },
  });

  const firstNameProps = { ...form.getInputProps("Fname") };
  const lastNameProps = { ...form.getInputProps("Lname") };
  const emailProps = { ...form.getInputProps("email") };
  const phoneNumberProps = { ...form.getInputProps("phone") };
  const termsOfServiceProps = {
    ...form.getInputProps("termsOfService", {
      type: "checkbox",
    }),
  };

  const onFocusPhoneHandler = (_e: React.FocusEvent<HTMLElement>) => {
    setFocused({ ...isFocused, phone: true });
  };

  const onBlurPhoneHandler = (_e: React.FocusEvent<HTMLElement>) => {
    setFocused({ ...isFocused, phone: false });
  };

  // Get inferred form values type, will be `{ name: string; age: number }`
  type FormValues = typeof form.values;
  const submitInsideFn = async (values: FormValues) => {
    const userInput: UserInput = {
      user: {
        name: `${values.Fname} ${values.Lname}`,
        email: values.email,
        phoneNo: values.phone,
      },
    };

    const ReservationCreateArgs: ReservationCreateVariables = {
      reservation: {
        PplNo: enteredGuests,
        description,
        time: { date: reservedDate, timeSlot },
        userInput: userInput.user,
      },
    };

    if (tableIds.length === 0) {
      reservationCreate({ variables: ReservationCreateArgs });
    } else if (tableIds.length === 1) {
      ReservationCreateArgs.reservation.tableId = Number(tableIds[0]);
      await reservationCreate({
        variables: ReservationCreateArgs,
      });
    } else {
      for (let i = 0; i < tableIds.length; i++) {
        // i はfor 句で宣言されている
        ReservationCreateArgs.reservation.tableId = tableIds[i];
        // 処理を一つずつ実行する
        await reservationCreate({
          variables: { reservation: ReservationCreateArgs },
        });
      }
    }

    router.push({ pathname: "/Thankyou" });
  };

  const submitHandler = form.onSubmit(submitInsideFn);

  if (form.errors.phone && !isFocused.phone) {
    inputStyle = styles.inputError;
  } else if (form.errors.phone && isFocused.phone) {
    inputStyle = styles.inputErrorAndFocus;
  } else if (isFocused.phone) {
    inputStyle = styles.inputFocus;
  } else if (!isFocused.phone) {
    inputStyle = styles.input;
  }

  const phoneNumberError = form.errors.phone;

  return {
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
  };
};
