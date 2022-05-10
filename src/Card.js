class Cards {
  constructor(id, question, answers, correctAnswer) {
    this.id = id
    this.question = question
    this.answers = answers; 
    console.log(this.answers);
    this.correctAnswer = correctAnswer
  }
}

module.exports = Cards