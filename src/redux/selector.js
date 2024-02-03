export const getContacts = state => state.contacts.item;
export const getFilter = state => state.filters;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

export const getVisibleContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  return filter ? contacts.filter(({ name }) => name.toLowerCase().includes(filter)) : contacts;
};
//OK