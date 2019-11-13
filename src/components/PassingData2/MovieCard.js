import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import UserList from "./UserList";

const MovieCardWrapper = styled.div`
  border: 2px black;
  border-radius: 10px;
  background-color: pink;
  width: 40%;
  margin: 10px auto;
  padding: 5px;
`;

class MovieCard extends Component {
  render() {
    const { movie, users, usersIdsWhoLikedMovie } = this.props;

    return (
      <MovieCardWrapper>
        <h1>{movie.name}</h1>
        <UserList users={users} usersIdsWhoLikedMovie={usersIdsWhoLikedMovie} />
      </MovieCardWrapper>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  usersIdsWhoLikedMovie: PropTypes.array.isRequired,
  users: PropTypes.object.isRequired
};

export default MovieCard;
