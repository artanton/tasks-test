import { createSelector } from '@reduxjs/toolkit';

export const selectContact = state => state.cont.contacts;

export const selectFilter = state => state.filt.filter;

export const selectIsLoading = state => state.cont.isLoading;

export const selectError = state => state.cont.error;

export const selectSearchedContacts = createSelector(
  [selectContact, selectFilter],
  (storeContacts, searchedContact) => {
    return storeContacts.filter(contact => {
      const fitContact = contact.name
        .toLowerCase()
        .includes(searchedContact.toLowerCase());
      return fitContact;
    });
  }
);
