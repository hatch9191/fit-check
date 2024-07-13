import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from './customFetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type IMutation = {
  __typename?: 'Mutation';
  createUser: IUser;
};


export type IMutationCreateUserArgs = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type IQuery = {
  __typename?: 'Query';
  getUser: Maybe<IUser>;
  hello: Scalars['String'];
};


export type IQueryGetUserArgs = {
  id: Scalars['String'];
};

export type IUser = {
  __typename?: 'User';
  bio: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Maybe<Scalars['String']>;
  id: Scalars['String'];
  lastName: Maybe<Scalars['String']>;
  profileName: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type IGetUserQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type IGetUserQuery = { __typename?: 'Query', getUser: { __typename?: 'User', firstName: string | null } | null };



export const GetUserDocument = `
    query GetUser($id: String!) {
  getUser(id: $id) {
    firstName
  }
}
    `;

export const useGetUserQuery = <
      TData = IGetUserQuery,
      TError = unknown
    >(
      variables: IGetUserQueryVariables,
      options?: UseQueryOptions<IGetUserQuery, TError, TData>
    ) => {
    
    return useQuery<IGetUserQuery, TError, TData>(
      ['GetUser', variables],
      customFetcher<IGetUserQuery, IGetUserQueryVariables>(GetUserDocument, variables),
      options
    )};

useGetUserQuery.document = GetUserDocument;

useGetUserQuery.getKey = (variables: IGetUserQueryVariables) => ['GetUser', variables];


useGetUserQuery.fetcher = (variables: IGetUserQueryVariables, options?: RequestInit['headers']) => customFetcher<IGetUserQuery, IGetUserQueryVariables>(GetUserDocument, variables, options);
