type actionState = {
  hideInputForm: boolean;
  filterType: string;
};

export const initialState: actionState = {
  hideInputForm: false,
  filterType: 'all',
};
