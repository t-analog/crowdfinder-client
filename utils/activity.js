import {
  gql,
  useQuery,
  useMutation,
} from "@apollo/client";

const createActivity = () => {
  const INSERT_ONE_ACTIVITY = gql`
    mutation {
      insertOneActivity(data: {
        name: "graphql test"
        _partition: "LOL"
      }) {
        name
        _partition
      }
    }
  `;
  const [ insertOneActivity, { loading, error, data } ] = useMutation(INSERT_ONE_ACTIVITY);
  insertOneActivity();
  if (loading) {
    return (
      `Loading`
    );
  }
  if (error) {
    console.log(error);
    return (
      `Error`
    );
  }
  return (
    JSON.stringify(data)
  );
};

/** Retrieve activities list from Atlas using GraphQL */
const getActivities = () => {
  const GET_ACTIVITIES = gql`
    query {
      activities {
        name
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_ACTIVITIES);
  if (loading) {
    return (
      `Loading`
    );
  }
  if (error) {
    console.log(error);
    return (
      `Error`
    );
  }
  return (
    JSON.stringify(data)
  );
};

export { createActivity, getActivities };
