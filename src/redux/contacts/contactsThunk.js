import { token } from '../request';
import {
  addContactService,
  deleteContactsService,
  getContactsService,
} from '../service/contactsService';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await getContactsService();
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async ({ name, number }, thunkAPI) => {
    try {
      const { data } = await addContactService({ name, number });
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, thunkAPI) => {
    try {
      const { data } = await deleteContactsService(id);
      console.log(data);
      token.set(data.token);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
