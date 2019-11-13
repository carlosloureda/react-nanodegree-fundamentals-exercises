import React from "react";
import PropTypes from "prop-types";

const UserList = ({ usersIdsWhoLikedMovie, users }) => {
  if (!usersIdsWhoLikedMovie || usersIdsWhoLikedMovie.length === 0) {
    return (
      <p>
        <strong>No one liked the movie yet </strong>
        <span role="img" aria-label="sad-jitten-emoji">
          😿
        </span>
      </p>
    );
  }
  return (
    <>
      <h3>Liked by: </h3>
      <div>
        {usersIdsWhoLikedMovie.map(id => (
          <p key={id}>{users[id].name}</p>
        ))}
      </div>
    </>
  );
};

UserList.propTypes = {
  usersIdsWhoLikedMovie: PropTypes.array.isRequired,
  users: PropTypes.object.isRequired
};
export default UserList;
