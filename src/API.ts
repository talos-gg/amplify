/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateEventFilterTriggerInput = {
  address: string,
  id?: string | null,
  filterTopics?: string | null,
  eventAbi?: string | null,
};

export type ModelEventFilterTriggerConditionInput = {
  filterTopics?: ModelStringInput | null,
  eventAbi?: ModelStringInput | null,
  and?: Array< ModelEventFilterTriggerConditionInput | null > | null,
  or?: Array< ModelEventFilterTriggerConditionInput | null > | null,
  not?: ModelEventFilterTriggerConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type EventFilterTrigger = {
  __typename: "EventFilterTrigger",
  address: string,
  id: string,
  filterTopics?: string | null,
  eventAbi?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateEventFilterTriggerInput = {
  address: string,
  id: string,
  filterTopics?: string | null,
  eventAbi?: string | null,
};

export type DeleteEventFilterTriggerInput = {
  address: string,
  id: string,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelEventFilterTriggerFilterInput = {
  address?: ModelStringInput | null,
  id?: ModelStringInput | null,
  filterTopics?: ModelStringInput | null,
  eventAbi?: ModelStringInput | null,
  and?: Array< ModelEventFilterTriggerFilterInput | null > | null,
  or?: Array< ModelEventFilterTriggerFilterInput | null > | null,
  not?: ModelEventFilterTriggerFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelEventFilterTriggerConnection = {
  __typename: "ModelEventFilterTriggerConnection",
  items:  Array<EventFilterTrigger | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionEventFilterTriggerFilterInput = {
  address?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionStringInput | null,
  filterTopics?: ModelSubscriptionStringInput | null,
  eventAbi?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEventFilterTriggerFilterInput | null > | null,
  or?: Array< ModelSubscriptionEventFilterTriggerFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateEventFilterTriggerMutationVariables = {
  input: CreateEventFilterTriggerInput,
  condition?: ModelEventFilterTriggerConditionInput | null,
};

export type CreateEventFilterTriggerMutation = {
  createEventFilterTrigger?:  {
    __typename: "EventFilterTrigger",
    address: string,
    id: string,
    filterTopics?: string | null,
    eventAbi?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEventFilterTriggerMutationVariables = {
  input: UpdateEventFilterTriggerInput,
  condition?: ModelEventFilterTriggerConditionInput | null,
};

export type UpdateEventFilterTriggerMutation = {
  updateEventFilterTrigger?:  {
    __typename: "EventFilterTrigger",
    address: string,
    id: string,
    filterTopics?: string | null,
    eventAbi?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEventFilterTriggerMutationVariables = {
  input: DeleteEventFilterTriggerInput,
  condition?: ModelEventFilterTriggerConditionInput | null,
};

export type DeleteEventFilterTriggerMutation = {
  deleteEventFilterTrigger?:  {
    __typename: "EventFilterTrigger",
    address: string,
    id: string,
    filterTopics?: string | null,
    eventAbi?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetEventFilterTriggerQueryVariables = {
  address: string,
  id: string,
};

export type GetEventFilterTriggerQuery = {
  getEventFilterTrigger?:  {
    __typename: "EventFilterTrigger",
    address: string,
    id: string,
    filterTopics?: string | null,
    eventAbi?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEventFilterTriggersQueryVariables = {
  address?: string | null,
  id?: ModelStringKeyConditionInput | null,
  filter?: ModelEventFilterTriggerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListEventFilterTriggersQuery = {
  listEventFilterTriggers?:  {
    __typename: "ModelEventFilterTriggerConnection",
    items:  Array< {
      __typename: "EventFilterTrigger",
      address: string,
      id: string,
      filterTopics?: string | null,
      eventAbi?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateEventFilterTriggerSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterTriggerFilterInput | null,
};

export type OnCreateEventFilterTriggerSubscription = {
  onCreateEventFilterTrigger?:  {
    __typename: "EventFilterTrigger",
    address: string,
    id: string,
    filterTopics?: string | null,
    eventAbi?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEventFilterTriggerSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterTriggerFilterInput | null,
};

export type OnUpdateEventFilterTriggerSubscription = {
  onUpdateEventFilterTrigger?:  {
    __typename: "EventFilterTrigger",
    address: string,
    id: string,
    filterTopics?: string | null,
    eventAbi?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEventFilterTriggerSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterTriggerFilterInput | null,
};

export type OnDeleteEventFilterTriggerSubscription = {
  onDeleteEventFilterTrigger?:  {
    __typename: "EventFilterTrigger",
    address: string,
    id: string,
    filterTopics?: string | null,
    eventAbi?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
