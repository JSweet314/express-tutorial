const $button = $('#button');
const $pressedDisplay = $('#pressed');

$button.on('click', () => {
  $pressedDisplay.append(`<h2>You Did It!</h2>`);
});

