// Make a terminal script that will create a journal with a short-term memory. Weird, I know.
// Prompt a user for any content. What they did yesterday, what their favourite colour is, whatever. Store the user input in an array.
// Print out all entries in the array.
// Loop back and prompt the user for the next journal entry.
// The journal can only contain a maximum of 5 entries, but can loop forever.


let proceed = "";
let journal = [];
do {
  journal.push(prompt("Enter journal entry."));
  if (journal.length > 5) {
    journal.shift();
  }
  console.log(journal);
  proceed = prompt("Do you want to add another entry? (Y/N)");
} while (proceed.toLowerCase() === "y");