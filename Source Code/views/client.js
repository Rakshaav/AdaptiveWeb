 // console.log('Client-side code running');
//
// const button = document.getElementById('question');
// button.addEventListener('click', function(e) {
//   console.log('button was clicked');
// });
//
// const mouseover = document.getElementById('question');
// button.addEventListener('mouseover', function(e) {
//   console.log('mouseover');
// });

console.log('Client-side code running');


const button = document.body;
button.addEventListener('click', function(e) {
  console.log('button was clicked');
  //console.log(button);
  fetch('/clicked', {method: 'POST'})
    .then(function(response) {
      if(response.ok) {
        console.log('click was recorded');
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });

});

const button1 = document.getElementById('questions');
button1.addEventListener('click', function(e) {
  console.log('Ask');
      e.preventDefault();
  fetch('/clicked1', {method: 'POST'})
    .then(function(response) {
      if(response.ok) {
        console.log('Ask Question was recorded');
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });

});


const button2 = document.body;
button2.addEventListener('copy', function(e) {
  console.log('keydown');
  fetch('/clicked2', {method: 'POST'})
    .then(function(response) {
      if(response.ok) {
        console.log('Select was recorded');
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });

});


const button3 = document.getElementById('Vote');
button3.addEventListener('click', function(e) {
  console.log('scroll');
      e.preventDefault();
  fetch('/clicked3', {method: 'POST'})
    .then(function(response) {
      if(response.ok) {
        console.log('Vote was recorded');
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });

});

window.addEventListener('scroll', function(e) {
  console.log('scroll');
  fetch('/clicked4', {method: 'POST'})
    .then(function(response) {
      if(response.ok) {
        console.log('scroll1 was recorded');
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });

});
