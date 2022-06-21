import { Component } from "react";
import axios from "axios";

class DeckOfCards extends Component {
  constructor() {
    super();
    this.getCards = this.getCards.bind(this);
    this.giveMeCard = this.giveMeCard.bind(this);
    this.state = {
      deck_id: "",
      imagesArray: [],
      remaining: "",
    };
  }
  getCards() {
    axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/").then((data) =>
      this.setState({
        deck_id: data.data.deck_id,
        remaining: data.data.remaining,
      })
    );
  }
  componentDidMount() {
    this.getCards();
  }
  giveMeCard() {
    axios
      .get(`https://deckofcardsapi.com/api/deck/${this.state.deck_id}/draw/`)
      .then((data) =>
        this.setState({
          imagesArray: [...this.state.imagesArray, data.data.cards[0].image],
          remaining: data.data.remaining,
        })
      );
  }
  render() {
    return (
      <div className="deck-board">
        {this.state.remaining ? (
          <button onClick={this.giveMeCard}>Give me a card</button>
        ) : (
          ""
        )}
        <div className="card-list">
          {this.state.imagesArray.map((card, index) => {
            return (
              <img src={card} alt={card} key={index} className="card-image" />
            );
          })}
        </div>
      </div>
    );
  }
}

export default DeckOfCards;
