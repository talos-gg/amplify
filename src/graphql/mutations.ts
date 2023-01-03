/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEventFilterTrigger = /* GraphQL */ `
  mutation CreateEventFilterTrigger(
    $input: CreateEventFilterTriggerInput!
    $condition: ModelEventFilterTriggerConditionInput
  ) {
    createEventFilterTrigger(input: $input, condition: $condition) {
      address
      id
      filterTopics
      eventAbi
      createdAt
      updatedAt
    }
  }
`;
export const updateEventFilterTrigger = /* GraphQL */ `
  mutation UpdateEventFilterTrigger(
    $input: UpdateEventFilterTriggerInput!
    $condition: ModelEventFilterTriggerConditionInput
  ) {
    updateEventFilterTrigger(input: $input, condition: $condition) {
      address
      id
      filterTopics
      eventAbi
      createdAt
      updatedAt
    }
  }
`;
export const deleteEventFilterTrigger = /* GraphQL */ `
  mutation DeleteEventFilterTrigger(
    $input: DeleteEventFilterTriggerInput!
    $condition: ModelEventFilterTriggerConditionInput
  ) {
    deleteEventFilterTrigger(input: $input, condition: $condition) {
      address
      id
      filterTopics
      eventAbi
      createdAt
      updatedAt
    }
  }
`;
