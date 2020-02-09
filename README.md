# Phylite-EventEmitter

 * EventEmitter is very simple, simply call addEventListener passing in an event name and a callback.
 
 * To emit an event simply call emit passing in an event name.
 
 * Removing events is as simple as removeEventListener(event-name) or to remove all removeAllEvents();
 
 * EventEmitter can be used directly (``new EventEmitter``) or or inherited from (``class Player extends EventEmitter``)
 
 * Note EventEmitter does not work in the same way as nodejs events and is not intended to,
 EventEmitter is extraordinarily simple and may have bugs or unforeseen problems is large scale usage.
 
 ## Installing
 
 ```npm install ```
 
  ## Example
  
  [Player class example](examples/Player.js)
  
  ## License
  
  [ISC](LICENSE.txt)