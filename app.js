//import react and react-dom libraries that power the app
import React from 'react';
import ReactDOM from 'react-dom';

function Application(props){
  return (
    <div className="scoreboard">
    <div className="header">
      <h1> { props.title } </h1>
    </div>
      <div className="players">

        <div className="player">
          <div className="player-name">
            Jenna
          </div>
          <div className="player-score">
          </div>
          <div className="counter">
            <button className="counter-action decrement"> - </button>
            <div className="counter-score"> 30 </div>
            <button className="counter-action increment"> + </button>
          </div>
        </div>

        <div className="player">
          <div className="player-name">
            Calum
          </div>
          <div className="player-score">
          </div>
          <div className="counter">
            <button className="counter-action decrement"> - </button>
            <div className="counter-score"> 24 </div>
            <button className="counter-action increment"> + </button>
          </div>
        </div>


      </div>
    </div>
  );
}

Application.propTypes = {
  title: React.PropTypes.string
}

Application.defaultTypes = {
  title: "Scoreboard"
}


ReactDOM.render(<Application title="Scoreboard"/>, document.getElementById("container"))
