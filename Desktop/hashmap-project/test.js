import HashMap from "./HashMap.js";

const test = new HashMap();

// Populate initial 12 values
test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

console.log("Initial length:", test.length());
console.log("Initial capacity:", test.capacity);

// Overwrite a few
test.set('apple', 'dark red');
test.set('banana', 'bright yellow');

// Should NOT increase size
console.log("Length after overwriting:", test.length());

// Trigger resize
test.set('moon', 'silver');

console.log("Capacity after resize:", test.capacity);
console.log("Length after resize:", test.length());

// Test getters
console.log("Get grape:", test.get('grape'));
console.log("Has frog?", test.has('frog'));

// Remove item
console.log("Remove lion:", test.remove('lion'));
console.log("Length after remove:", test.length());

// Keys, values, entries
console.log("Keys:", test.keys());
console.log("Values:", test.values());
console.log("Entries:", test.entries());
