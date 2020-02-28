import arrayMove from './index';

const arr = [1, 2, 3, 4, 5];

describe('arrayMove', () => {
  it('should move array items', () => {
    console.log('arrayMove(arr, 3, 0)', arrayMove(arr, 3, 0));

    expect(arrayMove(arr, 3, 0)).toEqual([4, 1, 2, 3, 5]);
    expect(arrayMove(arr, -1, 0)).toEqual([5, 1, 2, 3, 4]);
    expect(arrayMove(arr, 1, -2)).toEqual([1, 3, 4, 2, 5]);
    expect(arrayMove(arr, -3, -4)).toEqual([1, 3, 2, 4, 5]);
  });
});
