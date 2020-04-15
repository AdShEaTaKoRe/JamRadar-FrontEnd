import React from "react";
import API from "../../API.js";
import { Checkbox } from "semantic-ui-react";

const UserGenresStage = ({ nextStage, previousStage, selectGenre, genres }) => (
  <div className="ui form">
    <h3> Please choose the genres you play</h3>
    <div className="ui fluid card">
      {API.getGenres().map((genre) => (
        <div key={genre.id}>
          <Checkbox
            toggle
            type="checkbox"
            value={genre.name}
            checked={genres.includes(genre.id)}
            onChange={() => selectGenre("genres", genre.id)}
          />
          {genre.name}
        </div>
      ))}
    </div>
    <br></br>
    <br />
    <button className="ui left floated button" onClick={previousStage}>
      Back
    </button>
    <button className="ui right floated button" onClick={nextStage}>
      Next
    </button>
  </div>
);

export { UserGenresStage };
