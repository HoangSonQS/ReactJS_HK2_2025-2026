const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const input = prompt(
      `${this.question}\n${this.options.join('\n')}\n(Write option number)`
    );

    const answer = Number(input);

    if (
      Number.isInteger(answer) &&
      answer >= 0 &&
      answer < this.answers.length
    ) {
      this.answers[answer]++;
    } else {
      alert('Invalid input!');
    }

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type: 'array' | 'string' = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.poll');

  if (!btn) {
    console.error('❌ Button .poll not found');
    return;
  }

  console.log('✅ Button found, event attached');

  btn.addEventListener('click', poll.registerNewAnswer.bind(poll));
});


poll.displayResults.call({ answers: [5, 2, 3] }, 'array');
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'array');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

