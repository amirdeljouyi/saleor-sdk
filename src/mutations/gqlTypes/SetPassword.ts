/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AccountErrorCode } from "./../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: SetPassword
// ====================================================

export interface SetPassword_setPassword_errors {
  __typename: "AccountError";
  /**
   * The error code.
   */
  code: AccountErrorCode;
  /**
   * Name of a field that caused the error. A value of `null` indicates that the
   * error isn't associated with a particular field.
   */
  field: string | null;
  /**
   * The error message.
   */
  message: string | null;
}

export interface SetPassword_setPassword_user_defaultShippingAddress {
  __typename: "Address";
  /**
   * The ID of the object.
   */
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  cityArea: string;
  postalCode: string;
  phone: string;
  /**
   * Address is user's default shipping address.
   */
  isDefaultShippingAddress: boolean | null;
}

export interface SetPassword_setPassword_user_addresses {
  __typename: "Address";
  /**
   * The ID of the object.
   */
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  cityArea: string;
  postalCode: string;
  phone: string;
  /**
   * Address is user's default shipping address.
   */
  isDefaultShippingAddress: boolean | null;
}

export interface SetPassword_setPassword_user {
  __typename: "User";
  /**
   * The ID of the object.
   */
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  /**
   * Designates whether the user can log into this admin site.
   */
  isStaff: boolean;
  defaultShippingAddress: SetPassword_setPassword_user_defaultShippingAddress | null;
  /**
   * List of all user's addresses.
   */
  addresses: (SetPassword_setPassword_user_addresses | null)[] | null;
}

export interface SetPassword_setPassword_accountErrors {
  __typename: "AccountError";
  /**
   * Name of a field that caused the error. A value of `null` indicates that the
   * error isn't associated with a particular field.
   */
  field: string | null;
  /**
   * The error message.
   */
  message: string | null;
  /**
   * The error code.
   */
  code: AccountErrorCode;
}

export interface SetPassword_setPassword {
  __typename: "SetPassword";
  errors: SetPassword_setPassword_errors[];
  /**
   * JWT token, required to authenticate.
   */
  token: string | null;
  /**
   * A user instance.
   */
  user: SetPassword_setPassword_user | null;
  accountErrors: SetPassword_setPassword_accountErrors[];
}

export interface SetPassword {
  /**
   * Sets the user's password from the token sent by email using the RequestPasswordReset mutation.
   */
  setPassword: SetPassword_setPassword | null;
}

export interface SetPasswordVariables {
  token: string;
  email: string;
  password: string;
}
