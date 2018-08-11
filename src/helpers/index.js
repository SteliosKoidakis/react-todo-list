const updateItemInArray = (item, array) => {
  const foundIndex = array.findIndex(x => x.id === item.id);
  const newArray = array;
  newArray[foundIndex] = item;
  return newArray;
};

export default updateItemInArray;
