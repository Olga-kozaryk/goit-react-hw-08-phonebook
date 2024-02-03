
import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "../redux/thunk";


const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = (state) => {
  state.isLoading = false;
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
      items: [],
      isLoading: false,
      error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.push(action.payload); 
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
    state.contacts = state.contacts.filter(contact => contact.id !== action.payload);

})

      .addMatcher((action) => action.type.endsWith('/pending'), handlePending)
      .addMatcher((action) => action.type.endsWith('/fulfilled'), handleFulfilled)
      .addMatcher((action) => action.type.endsWith('/rejected'), handleRejected)
    
    
  }
});

export const contactsReducer = contactsSlice.reducer;

//OK


