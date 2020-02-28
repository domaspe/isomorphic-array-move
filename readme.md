## Install

```
$ npm install isomorphic-array-move
```

## Usage

```js
import arrayMove from 'isomorphic-array-move';

const arr = ['a', 'b', 'c'];

arrayMove(arr, 1, 2);
//=> ['a', 'c', 'b']

arrayMove(arr, -1, 0);
//=> ['c', 'a', 'b']

arrayMove(arr, -2, -3);
//=> ['b', 'a', 'c']
```
