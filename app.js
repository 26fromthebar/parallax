const parallax = document.querySelector('.parallax');

window.addEventListener('scroll', () => {
  let offset = window.scrollY;
  // Make the parallax move at a different pace than the other page
  // In place of 0.25 we can put whatever value we want, ranging between 0 and 1
  // (0 moves at same speed with page, while 1 stays completely fixed).
  // If we go more than 1 the parallax moves to the other direction with similar
  // changes in relative speed.
  parallax.style.backgroundPositionY = `${offset * 0.65}px`;
});

// Applying parallax to more than one sections ( doesn't work properly)
// const parallax = document.querySelectorAll('.parallax');
// window.addEventListener('scroll', function () {

//   let offset = window.scrollY;
//   parallax.forEach(function (prllx, i) {
//     console.log(`Parallax${i} ${offset}   ${prllx.offsetTop}`);
//     prllx.style.backgroundPositionY = `${(offset - prllx.offsetTop) * 0.7}px`;
//   });
// });
