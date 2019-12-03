/**
 * @param {ItemSource[]} items
 *
 * @return {ItemTarget[]}
 */
export function testForEachKeyValueObject(items) {
  const resultObject = {};
  items.forEach((item) => {
    if (!resultObject[item.id]) {
      resultObject[item.id] = {
        id: item.id,
        name: `${item.firstName} ${item.lastName}`,
        count: item.foo + item.bar,
      };
    }
  });
  return Object.values(resultObject);
}

/**
 * @param {ItemSource[]} items
 *
 * @return {ItemTarget[]}
 */
export function testForKeyValueObject(items) {
  const itemsOriginLength = items.length;
  const resultObject = {};
  for (let i = 0; i < itemsOriginLength; i++) {
    if (!resultObject[items[i].id]) {
      resultObject[items[i].id] = {
        id: items[i].id,
        name: `${items[i].firstName} ${items[i].lastName}`,
        count: items[i].foo + items[i].bar,
      };
    }
  }
  return Object.values(resultObject);
}

/**
 * @param {ItemSource[]} items
 *
 * @return {ItemTarget[]}
 */
export function testForOfKeyValueObject(items) {
  const resultObject = {};
  let item;
  for (item of items) {
    if (!resultObject[item.id]) {
      resultObject[item.id] = {
        id: item.id,
        name: `${item.firstName} ${item.lastName}`,
        count: item.foo + item.bar,
      };
    }
  }
  return Object.values(resultObject);
}

/**
 * @param {ItemSource[]} items
 *
 * @return {ItemTarget[]}
 */
export function testWhileKeyValueObject(items) {
  const resultObject = {};
  let i = 0;
  while (items[i]) {
    if (!resultObject[items[i].id]) {
      resultObject[items[i].id] = {
        id: items[i].id,
        name: `${items[i].firstName} ${items[i].lastName}`,
        count: items[i].foo + items[i].bar,
      };
    }
    i++;
  }
  return Object.values(resultObject);
}
