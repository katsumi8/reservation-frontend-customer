import { gql, useMutation } from "@apollo/client";

const CREATE_USER = gql`
  mutation ($user: UserInput!) {
    userCreate(user: $user) {
      user {
        id
      }
      userErrors {
        message
      }
    }
  }
`;

export const useUserCreator = () => {
  const [userCreate, { data, loading }] = useMutation(CREATE_USER);

  return { userCreate };
};
