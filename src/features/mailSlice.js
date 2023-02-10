import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    composeMessageIsOpen: false,
    selectedMessage: null
  },
  reducers: {
    openComposeMessage: (state) => {
      state.composeMessageIsOpen = true;
    },
    closeComposeMessage: (state) => {
      state.composeMessageIsOpen = false;
    },
    openMessage: (state, action) => {
      state.selectedMessage = action.payload;
    },

  },

});

export const { openComposeMessage, closeComposeMessage, openMessage } = mailSlice.actions;

export const selectComposeMessage = (state) => state.mail.composeMessageIsOpen;

export const selectedMail = (state) => state.mail.selectedMessage;


export default mailSlice.reducer;
