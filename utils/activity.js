import {
  gql,
  useQuery,
  useMutation,
} from "@apollo/client";

const createActivity = () => {
  const INSERT_ONE_ACTIVITY = gql`
    mutation InsertOneActivity() {
      insertOneActivity(data: {
        name: "graphql test"
        _partition: "LOL"
      }) {
        name
        _partition
      }
    }
  `;
  const { loading, error, data } = useMutation(INSERT_ONE_ACTIVITY);
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
    JSON.stringify(data.insertOneActivity)
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
    JSON.stringify(data.activities)
  );
};

export { createActivity, getActivities };
