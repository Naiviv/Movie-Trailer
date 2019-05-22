// https://cdn.plyr.io/3.3.12/plyr.js

//const name = variable (Option 1, {Option2});

// all the good stuff sits inside the curly brace!!

// array=collection of variables

const player = new Plyr('#player', 
   {
    controls : ['play-large', 'progress', 'current-time', 'mute', 'volume', 'captions', 'fullscreen'], 
  muted: true,
  
});