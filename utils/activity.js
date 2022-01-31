import {
  gql,
  request,
} from 'graphql-request';
import {
  useQuery,
  useMutation,
} from "react-query";

import {
  client,
  graphqlUri,
} from '../utils/graphql';
import { app } from '../utils/realm';

/**
 * @typedef {Object} Activity
 * @property {String} _id Activity id
 * @property {String} name Activity name
 * @property {String} _partition Activity partition
 * @property {String} description Activity description
 * @property {String} creator Activity creator
 * @property {Number} capacity Activity capacity
 * @property {String[]} categories Activity categories
 * @property {String[]}  participants Activity participants list
 * @property {{latitude: String, longitude: String}} location Activity location, in latitude and longitude
 * */

const createActivity = (
  // name,
  // description,
  // capacity,
  // categories,
  // location
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
      insertOneActivity(
        data: {
          name: $name
          _partition: $partition
          description: $description
          creator: $creator
          capacity: $capacity
          categories: $categories
          participants: $participants
          location: $location
        }
      ) {
        _id
        name
        _partition
        capacity
        creator
        description
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
    // "name": name,
    // "partition": `activity=${app.currentUser.id}`,
    // "description": description,
    // "creator": app.currentUser.customData.name,
    // "capacity": capacity,
    // "categories": categories,
    // "participants": [],
    // "location": location
    "name": "test name",
    "partition": `activity=${app.currentUser.id}`,
    "description": "test desc",
    "creator": app.currentUser.customData.name,
    "capacity": 727,
    "categories": ["foo", "bar", "baz"],
    "participants": [],
    "location": { latitude: 1.2, longitude: 3.4 }
  };
  // return await client.request(createActivityQuery, vars);
  return useMutation(async () => {
    const data = await client.request(createActivityQuery, vars);
    return data;
  });
};

/**
 * @param {Number} id Activity id to be fetched
 *
 * @returns {Activity} `Activity` object
 * */
const getActivity = (
  id
) => {
  const getActivityQuery = gql`
    query GetActivity($id: ObjectId) {
      activity(
        query: {
        _id: $id
        }
      ) {
        _id
        name
        _partition
        capacity
        creator
        description
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
    "id": id
  };
  // return await client.request(getActivityQuery, vars);
  return useQuery("activity", async () => {
    const data = await client.request(getActivityQuery, vars);
    // console.log(`${JSON.stringify(data)}`);
    return data;
  });
};

const getActivities = () => {
  const getActivitiesQuery = gql`
    query {
      activities {
        _id
        name
        _partition
        capacity
        creator
        description
        categories
        participants
        location {
          latitude
          longitude
        }
      }
    }
  `;
  // return await client.request(getActivitiesQuery);
  return useQuery("activites", async () => {
    const data = await client.request(getActivitiesQuery);
    // console.log(`${JSON.stringify(data)}`);
    return data;
  });
};

/**
 * @param {String} id Activity id
 * @param {String} name Activity name
 * @param {String} description Activity description
 * @param {Number} capacity Activity capacity
 * @param {String[]} categories Activity categories
 * @param {{latitude: String, longitude: String}} location Activity location, in latitude and longitude
 *
 * @returns {Activity} `Activity` object
 * */
const updateActivity = async (
  id,
  name,
  description,
  capacity,
  categories,
  location
) => {
  const updateActivityQuery = gql`
    mutation UpdateActivity(
      $id: ObjectId
      $name: String,
      $description: String,
      $capacity: Int,
      $categories: [String],
      $location: ActivityLocationInsertInput
    ) {
      updateOneActivity(
        query: {
          _id: $id
        }
        set: {
          name: $name
          description: $description
          capacity: $capacity
          categories: $categories
          location: $location
        }
      ) {
        _id
        name
        _partition
        capacity
        creator
        description
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
    "id": id,
    "name": name,
    "description": description,
    "capacity": capacity,
    "categories": categories,
    "location": location
  };
  return await client.request(updateActivityQuery, vars);
};

/**
 * @param {Number} id Activity id to be deleted
 *
 * @returns {Activity} `Activity` object
 * */
const deleteActivity = async (
  id
) => {
  const deleteActivityQuery = gql`
    mutation DeleteActivity($id: ObjectId) {
      deleteOneActivity(
        query: {
          _id: $id
        }
      ) {
        _id
        name
        _partition
        capacity
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
  const vars = {
    "id": id
  };
  return await client.request(deleteActivityQuery, vars);
};

// const useActivities = () => (
//   useQuery("activities", async () => {
//     const { activities: { activity }, } = await request(

//     )
//   })
// );

export {
  createActivity,
  getActivity,
  getActivities,
  updateActivity,
  deleteActivity
};
