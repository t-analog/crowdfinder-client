import {
  gql,
} from 'graphql-request';
import {
  useQuery,
  useMutation,
} from "react-query";

import {
  client,
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

const createActivity = () => {
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
  return useMutation(async ({
    name,
    description,
    capacity,
    categories,
    location: {
      latitude,
      longitude,
    },
  }) => {
    const vars = {
      "name": name,
      "partition": `activity=${app.currentUser.id}`,
      "description": description,
      "creator": app.currentUser.customData.name,
      "capacity": parseInt(capacity),
      "categories": categories.split(' '),
      "participants": [],
      "location": {
        "latitude": latitude,
        "longitude": longitude,
      },
    };
    try {
      const data = await client.request(createActivityQuery, vars);
      return data;
    } catch (err) {
      console.log(err);
    }
  });
};

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
  return useQuery("activity", async () => {
    try {
      const data = await client.request(getActivityQuery, vars);
      return data;
    } catch (err) {
      console.log(err);
    }
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
  return useQuery("activites", async () => {
    try {
      const data = await client.request(getActivitiesQuery);
      // console.log(`${JSON.stringify(data)}`);
      return data;
    } catch (err) {
      console.error(err);
    }
  });
};

const updateActivity = async () => {
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
  return useMutation(async ({
    id,
    name,
    description,
    capacity,
    categories,
    location,
  }) => {
    const locationSplit = location.split(' ');
    const vars = {
      "id": id,
      "name": name,
      "description": description,
      "capacity": parseInt(capacity),
      "categories": categories.split(' '),
      "location": {
        "latitude": parseFloat(locationSplit[0]),
        "longitude": parseFloat(locationSplit[1]),
      },
    };
    try {
      const data = await client.request(updateActivityQuery, vars);
      return data;
    } catch (err) {
      console.log(err);
    }
  });
};

const deleteActivity = async () => {
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
  return useMutation(async ({
    id,
  }) => {
    const vars = {
      "id": id,
    };
    try {
      const data = await client.request(deleteActivityQuery, vars);
      return data;
    } catch (err) {
      console.log(err);
    }
  });
};

export {
  createActivity,
  getActivity,
  getActivities,
  updateActivity,
  deleteActivity
};
