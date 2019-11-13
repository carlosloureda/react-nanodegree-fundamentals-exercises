import React, { Component } from "react";
import MovieCard from "./MovieCard";
/*
Use React and the data below to display a list of users alongside their favorite movies.

For detailed instructions, refer to instructions.md.
*/

const profiles = [
  {
    id: 1,
    userID: "1",
    favoriteMovieID: "1"
  },
  {
    id: 2,
    userID: "2",
    favoriteMovieID: "1"
  },
  {
    id: 3,
    userID: "4",
    favoriteMovieID: "5"
  },
  {
    id: 4,
    userID: "5",
    favoriteMovieID: "2"
  },
  {
    id: 5,
    userID: "3",
    favoriteMovieID: "5"
  },
  {
    id: 6,
    userID: "6",
    favoriteMovieID: "4"
  }
];

const users = {
  1: {
    id: 1,
    name: "Jane Jones",
    userName: "coder"
  },
  2: {
    id: 2,
    name: "Matthew Johnson",
    userName: "mpage"
  },
  3: {
    id: 3,
    name: "Autumn Green",
    userName: "user123"
  },
  4: {
    id: 3,
    name: "John Doe",
    userName: "user123"
  },
  5: {
    id: 5,
    name: "Lauren Carlson",
    userName: "user123"
  },
  6: {
    id: 6,
    name: "Nicholas Lain",
    userName: "user123"
  }
};

const movies = {
  1: {
    id: 1,
    name: "Planet Earth"
  },
  2: {
    id: 2,
    name: "Selma"
  },
  3: {
    id: 3,
    name: "Million Dollar Baby"
  },
  4: {
    id: 4,
    name: "Forrest Gump"
  },
  5: {
    id: 5,
    name: "Get Out"
  },
  6: {
    id: 6,
    name: "Mad Max"
  }
};

class PassingData1Solution extends Component {
  constructor(props) {
    super(props);
    this.usersByMovie = {};

    /*
    We can map the users by the movie they liked.
    */
    profiles.forEach(profile => {
      const movieID = profile.favoriteMovieID;

      if (this.usersByMovie[movieID]) {
        this.usersByMovie[movieID].push(profile.userID);
      } else {
        this.usersByMovie[movieID] = [profile.userID];
      }
    });
    console.log("usersByMovie: ", this.usersByMovie);
  }
  render() {
    return (
      <div>
        <h2>How Popular is Your Favorite Movie?</h2>
        {/* {Object.entries(this.usersByMovie).map(([movieID, usersIDs]) => { */}
        <div>
          {Object.keys(movies).map(id => {
            return (
              <MovieCard
                key={id}
                users={users}
                movie={movies[id]}
                usersIdsWhoLikedMovie={this.usersByMovie[id]}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default PassingData1Solution;
