import {
  gql,
} from 'graphql-request';
import client from '../utils/graphql';
import { app } from '../utils/realm';

/**
 * @param {String} name Name of the activity
 * @param {String} description Description of the activity
 * @param {String} creator Creator of the activity
 * @param {Number} capacity Capacity of the activity
 * @param {String[]} categories Categories of the activity
 * @param {{latitude: String, longitude: String}} location Location of the activity
 * */
const createActivity = async (
  name,
  description,
  capacity,
  categories,
  location
) => {
  const createActivityQuery = gql`
    mutation InsertOneActivity(
      $name: String,
      $partition: String!,
      $description: String,
      $creator: String,
      $capacity: Int,
      $categories: [String],
      $participants: [String],
      $location: ActivityLocationInsertInput
    ) {
      insertOneActivity(data: {
        name: $name
        _partition: $partition
        description: $description
        creator: $creator
        capacity: $capacity
        categories: $categories
        participants: $participants
        location: $location
      }) {
        name
        _partition
        description
        creator
        creator
        capacity
        categories
        participants
        location {
          latitude
          longitude
        }
      }
    }
  `;
  const vars = {
    "name": name,
    "partition": `activity=${app.currentUser.id}`,
    "description": description,
    "creator": app.currentUser.customData.name,
    "capacity": capacity,
    "categories": categories,
    "participants": [],
    "location": location
  };
  return await client.request(createActivityQuery, vars);
};

const getActivity = async () => {
  const getActivityQuery = gql`
    query GetActivity($id: ObjectId) {
      activity(query: {
        _id: $id
      }) {
        name
        _partition
        description
        creator
        categories
        participants
        location {
          latitude
          longitude
        }
      }
    }
  `;
  return await client.request(getActivityQuery);
};

/** Retrieve activities list from Atlas using GraphQL */
const getActivities = async () => {
  const getActivitiesQuery = gql`
    query {
      activities {
        name
        _partition
        description
        creator
        categories
        participants
        location {
          latitude
          longitude
        }
      }
    }
  `;
  return await client.request(getActivitiesQuery);
};

const updateActivity = async () => {
  const updateActivityQuery = gql`
    mutation UpdateActivity(
      $id: ObjectId
      $name: String,
      $description: String,
      $creator: String,
      $capacity: Int,
      $categories: [String],
      $participants: [String],
      $location: ActivityLocationInsertInput
    ) {
      updateOneActivity(query: {
        _id: $id
      }, set: {
        name: $name
        description: $description
        creator: $creator
        capacity: $capacity
        categories: $categories
        participants: $participants
        location: $location
      }) {
        name
        _partition
        description
        creator
        categories
        participants
        location {
          latitude
          longitude
        }
      }
    }
  `;
  return await client.request(updateActivityQuery);
};

const deleteActivity = async () => {
  const deleteActivityQuery = gql`
    mutation DeleteActivity($id: ObjectId) {
      deleteOneActivity(query: {
        _id: $id
      }) {
        name
        _partition
        description
        creator
        categories
        participants
        location {
          latitude
          longitude
        }
      }
    }
  `;
  return await client.request(deleteActivityQuery);
};

export {
  createActivity,
  getActivity,
  getActivities,
  deleteActivity
};
