import { gql, useMutation } from "@apollo/client";

const CREATE_RESERVATION = gql`
  mutation ($reservation: ReservationInput!) {
    rsrvtnCreate(reservation: $reservation) {
      reservation {
        id
      }
    }
  }
`;

export const useReservationCreator = () => {
  const [reservationCreate, { data, loading }] =
    useMutation(CREATE_RESERVATION);

  return { reservationCreate };
};
