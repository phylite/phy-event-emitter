/**
 * EventEmitter is very simple, simply call addEventListener passing in an event name and a callback.
 * to emit an event simply call emit passing in an event name.
 *
 * Removing events is as simple as removeEventListener(event-name)
 * or to remove all removeAllEvents();
 *
 * EventEmitter can be used directly (new EventEmitter) or or inherited from (class Player extends EventEmitter)
 *
 * Note EventEmitter does not work in the same way as nodejs events and is not intended to
 * EventEmitter is extraordinarily simple and may have bugs or unforeseen problems is large scale usage.
 *
 * */

class EventEmitter {

    constructor(){
        this.events = {}; // event_name : Set( callback, callback, callback... )
    }

    addEventListener(event_name, callback){
        let eventSet = this.events[event_name] || new Set();
        this.events[event_name] = eventSet;
        eventSet.add(callback);
    }

    on(event_name, callback){
        this.addEventListener(event_name, callback);
    }

    removeEventListener(event_name, callback){
        let eventSet = this.events[event_name] || new Set();
        this.events[event_name] = eventSet;

        return eventSet.delete(callback);
    }

    removeAllEvents(){
        this.events = {};
    }

    emit(event_name, ...args) {
        let chain = this.events[event_name];
        if (typeof chain === 'undefined') return;

        // run events one at a time
        for(let callback of chain){
            callback(...args);
        }
    }

}

module.exports = EventEmitter;