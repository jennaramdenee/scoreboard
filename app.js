//import react and react-dom libraries that power the app
import React from 'react';
import ReactDOM from 'react-dom';

var PLAYERS = [
  {
    name: "Jenna",
    score: 33,
  },
  {
    name: "Calum",
    score: 24,
  },
  {
    name: "Amber",
    score: 46,
  }
]

function Header(props){
  return (
    <div className="header">
      <h1> { props.title } </h1>
    </div>
  )
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired
}

function Player(props) {
  return (
    <div className="player">
      <div className="player-name">
        {props.name}
      </div>
      <div className="player-score">
        <Counter score={props.score} />
      </div>
    </div>
  )
}

Player.PropTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired
}

function Counter(props) {
  return (
    <div className="counter">
    <button className="counter-action decrement"> - </button>
    <div className="counter-score"> {props.score} </div>
    <button className="counter-action increment"> + </button>
    </div>
  )
}

Counter.PropTypes = {
  score: React.PropTypes.number.isRequired
}

function Application(props){
  return (
    <div className="scoreboard">
      <Header title={props.title} />
      <div className="players">
        <Player name:"Jenna" score:{31} />
        <Player name:"Calum" score:{24} />
      </div>
    </div>
  );
}

Application.propTypes = {
  title: React.PropTypes.string,
  players: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
  })).isRequired
}

Application.defaultTypes = {
  title: "Scoreboard"
}


ReactDOM.render(<Application title="Scoreboard" players={PLAYERS}/>, document.getElementById("container"))
