/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEventFilterTrigger = /* GraphQL */ `
  query GetEventFilterTrigger($address: String!, $id: String!) {
    getEventFilterTrigger(address: $address, id: $id) {
      address
      id
      filterTopics
      eventAbi
      createdAt
      updatedAt
    }
  }
`;
export const listEventFilterTriggers = /* GraphQL */ `
  query ListEventFilterTriggers(
    $address: String
    $id: ModelStringKeyConditionInput
    $filter: ModelEventFilterTriggerFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listEventFilterTriggers(
      address: $address
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        address
        id
        filterTopics
        eventAbi
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
