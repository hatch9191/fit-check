import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
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
  password: Scalars['String'];
};

export type IQuery = {
  __typename?: 'Query';
  getUserByEmail: Maybe<IUser>;
  getUserById: Maybe<IUser>;
  hello: Scalars['String'];
};


export type IQueryGetUserByEmailArgs = {
  email: Scalars['String'];
};


export type IQueryGetUserByIdArgs = {
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
  password: Maybe<Scalars['String']>;
  profileName: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type ICreateUserMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type ICreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: string, email: string } };

export type IGetUserByEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type IGetUserByEmailQuery = { __typename?: 'Query', getUserByEmail: { __typename?: 'User', id: string, email: string, password: string | null, firstName: string | null, lastName: string | null } | null };

export type IGetUserByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type IGetUserByIdQuery = { __typename?: 'Query', getUserById: { __typename?: 'User', id: string, email: string, firstName: string | null, lastName: string | null } | null };



export const CreateUserDocument = `
    mutation CreateUser($email: String!, $password: String!) {
  createUser(email: $email, password: $password) {
    id
    email
  }
}
    `;

export const useCreateUserMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<ICreateUserMutation, TError, ICreateUserMutationVariables, TContext>) => {
    
    return useMutation<ICreateUserMutation, TError, ICreateUserMutationVariables, TContext>(
      ['CreateUser'],
      (variables?: ICreateUserMutationVariables) => customFetcher<ICreateUserMutation, ICreateUserMutationVariables>(CreateUserDocument, variables)(),
      options
    )};


useCreateUserMutation.fetcher = (variables: ICreateUserMutationVariables, options?: RequestInit['headers']) => customFetcher<ICreateUserMutation, ICreateUserMutationVariables>(CreateUserDocument, variables, options);

export const GetUserByEmailDocument = `
    query GetUserByEmail($email: String!) {
  getUserByEmail(email: $email) {
    id
    email
    password
    firstName
    lastName
  }
}
    `;

export const useGetUserByEmailQuery = <
      TData = IGetUserByEmailQuery,
      TError = unknown
    >(
      variables: IGetUserByEmailQueryVariables,
      options?: UseQueryOptions<IGetUserByEmailQuery, TError, TData>
    ) => {
    
    return useQuery<IGetUserByEmailQuery, TError, TData>(
      ['GetUserByEmail', variables],
      customFetcher<IGetUserByEmailQuery, IGetUserByEmailQueryVariables>(GetUserByEmailDocument, variables),
      options
    )};

useGetUserByEmailQuery.document = GetUserByEmailDocument;

useGetUserByEmailQuery.getKey = (variables: IGetUserByEmailQueryVariables) => ['GetUserByEmail', variables];


useGetUserByEmailQuery.fetcher = (variables: IGetUserByEmailQueryVariables, options?: RequestInit['headers']) => customFetcher<IGetUserByEmailQuery, IGetUserByEmailQueryVariables>(GetUserByEmailDocument, variables, options);

export const GetUserByIdDocument = `
    query GetUserById($id: String!) {
  getUserById(id: $id) {
    id
    email
    firstName
    lastName
  }
}
    `;

export const useGetUserByIdQuery = <
      TData = IGetUserByIdQuery,
      TError = unknown
    >(
      variables: IGetUserByIdQueryVariables,
      options?: UseQueryOptions<IGetUserByIdQuery, TError, TData>
    ) => {
    
    return useQuery<IGetUserByIdQuery, TError, TData>(
      ['GetUserById', variables],
      customFetcher<IGetUserByIdQuery, IGetUserByIdQueryVariables>(GetUserByIdDocument, variables),
      options
    )};

useGetUserByIdQuery.document = GetUserByIdDocument;

useGetUserByIdQuery.getKey = (variables: IGetUserByIdQueryVariables) => ['GetUserById', variables];


useGetUserByIdQuery.fetcher = (variables: IGetUserByIdQueryVariables, options?: RequestInit['headers']) => customFetcher<IGetUserByIdQuery, IGetUserByIdQueryVariables>(GetUserByIdDocument, variables, options);
