document.addEventListener('DOMContentLoaded', function () {
  const generateNumberBtn = document.getElementById('generateNumberBtn');
  const resultParagraph = document.getElementById('result');

  generateNumberBtn.addEventListener('click', function () {
      const numPlayers = parseInt(document.getElementById('numPlayers').value);

      if (!isNaN(numPlayers) && numPlayers > 0) {
          const randomNumber = Math.floor(Math.random() * numPlayers) + 1;
          resultParagraph.textContent = `The random number is: ${randomNumber}`;
      } else {
          resultParagraph.textContent = 'Please enter a valid number of players.';
      }
  });
});


  const generateNumberBtnLotto = document.getElementById('generateNumberBtnLotto');
  const lottoNumberParagraph = document.getElementById('lottoNumber');

  generateNumberBtnLotto.addEventListener('click', function () {
      const lottoNumber = generateLottoNumber();
      lottoNumberParagraph.textContent = `Lotto Number: ${lottoNumber}`;
  });

  function generateLottoNumber() {
      let lottoNumber = '';
      for (let i = 0; i < 4; i++) {
          lottoNumber += Math.floor(Math.random() * 10); // Generate a random digit (0-9)
      }
      return lottoNumber;
  };

