import updateItemInArray from './index';

describe('Helper functions', () => {
  const array = [
    { id: 1, text: 'test', complete: false },
    { id: 2, text: 'test', complete: true },
    { id: 3, text: 'test', complete: true }
  ];
  const item = { id: 2, text: 'test new', complete: false };
  it('updateItemInArray() update an existing item in an existing array', () => {
    const newArray = updateItemInArray(item, array);
    array[2] = { id: 2, text: 'test new', complete: false };
    expect(newArray).toEqual(array);
  });
});
