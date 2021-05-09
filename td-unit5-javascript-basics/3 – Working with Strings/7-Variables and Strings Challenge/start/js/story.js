// 1. Declare variables and capture input.

alert('We\'re going to tell a funny story together, follow the prompts to play along.');
const adjective = prompt('Please choose an adjective.');
const verb = prompt('Please choose a verb.');
const noun = prompt('Please choose a noun.');

// 2. Combine the input with other words to create a story.

const story = `<p>There once was a ${adjective} programmer who wanted to use JavaScript to ${verb} the ${noun}.</p>`;

// 3. Display the story as a <p> inside the <main> element.

document.querySelector('main').innerHTML = story;
