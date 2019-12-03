/**
 * @param {ItemSource[]} items
 *
 * @return {ItemTarget[]}
 */
export function testMap(items) {
  return items.map((item) => {
    return {
      id: item.id,
      name: `${item.firstName} ${item.lastName}`,
      count: item.foo + item.bar,
    };
  });
}

/**
 * @param {ItemSource[]} items
 *
 * @return {ItemTarget[]}
 */
export function testFor(items) {
  const itemsOriginLength = items.length;
  const result = [];
  for (let i = 0; i < itemsOriginLength; i++) {
    result.push({
      id: items[i].id,
      name: `${items[i].firstName} ${items[i].lastName}`,
      count: items[i].foo + items[i].bar,
    });
  }
  return result;
}

/**
 * @param {ItemSource[]} items
 *
 * @return {ItemTarget[]}
 */
export function testForOf(items) {
  const result = [];
  let item;
  for (item of items) {
    result.push({
      id: item.id,
      name: `${item.firstName} ${item.lastName}`,
      count: item.foo + item.bar,
    });
  }

  return result;
}

/**
 * @param {ItemSource[]} items
 *
 * @return {ItemTarget[]}
 */
export function testWhile(items) {
  const result = [];
  let i = 0;
  while (items[i]) {
    result.push({
      id: items[i].id,
      name: `${items[i].firstName} ${items[i].lastName}`,
      count: items[i].foo + items[i].bar,
    });
    i++;
  }
  return result;
}

/**
 * @param {ItemSource[]} items
 *
 * @return {ItemTarget[]}
 */
export function testForEach(items) {
  const result = [];
  items.forEach((item) => {
    result.push({
      id: item.id,
      name: `${item.firstName} ${item.lastName}`,
      count: item.foo + item.bar,
    });
  });
  return result;
}
