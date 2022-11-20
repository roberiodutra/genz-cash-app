type actionState = {
  hideInputForm: boolean;
  filterType: string;
  refresh: boolean;
};

export const initialState: actionState = {
  refresh: false,
  hideInputForm: false,
  filterType: 'all',
};
