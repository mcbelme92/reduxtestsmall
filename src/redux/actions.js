// Acción
export const increment = (amount = 1) => {
  return {
    type: "INCREMENT",
    payload: amount,
  };
};
