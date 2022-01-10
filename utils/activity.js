import {
  gql,
  useQuery,
} from "@apollo/client";

/** Retrieve activities list from Atlas using GraphQL */
const activities = () => {
  const { loading, error, data } = useQuery(gql`
    query {
      activities {
        name
      }
    }
  `);
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

export default activities;
