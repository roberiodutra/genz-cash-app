type actionState = {
  hideInputForm: boolean;
  filterType: string;
  refresh: boolean;
  isFormError: string;
};

export const initialState: actionState = {
  refresh: false,
  hideInputForm: false,
  filterType: 'all',
  isFormError: '',
};
