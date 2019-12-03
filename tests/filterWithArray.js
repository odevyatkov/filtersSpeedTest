/**
 * @param {ItemSource[]} items
 *
 * @return {ItemTarget[]}
 */
export function testMapFilterArray(items) {
  const existIds = [];
  const result = items.map((item) => {
    if (!existIds.includes(item.id)) {
      existIds.push(item.id);
      return {
        id: item.id,
        name: `${item.firstName} ${item.lastName}`,
        count: item.foo + item.bar,
      };
    }
    return null;
  }).filter((data) => data !== null);

  return result;
}

/**
 * @param {ItemSource[]} items
 *
 * @return {ItemTarget[]}
 */
export function testForEachArray(items) {
  const existIds = [];
  const result = [];
  items.forEach((item) => {
    if (!existIds.includes(item.id)) {
      existIds.push(item.id);
      result.push({
        id: item.id,
        name: `${item.firstName} ${item.lastName}`,
        count: item.foo + item.bar,
      });
    }
  });
  return result;
}

/**
 * @param {ItemSource[]} items
 *
 * @return {ItemTarget[]}
 */
export function testForArray(items) {
  const itemsOriginLength = items.length;
  const existIds = [];
  const result = [];
  for (let i = 0; i < itemsOriginLength; i++) {
    if (!existIds.includes(items[i].id)) {
      existIds.push(items[i].id);
      result.push({
        id: items[i].id,
        name: `${items[i].firstName} ${items[i].lastName}`,
        count: items[i].foo + items[i].bar,
      });
    }
  }
  return result;
}

/**
 * @param {ItemSource[]} items
 *
 * @return {ItemTarget[]}
 */
export function testForOfArray(items) {
  const existIds = [];
  const result = [];
  let item;
  for (item of items) {
    if (!existIds.includes(item.id)) {
      existIds.push(item.id);
      result.push({
        id: item.id,
        name: `${item.firstName} ${item.lastName}`,
        count: item.foo + item.bar,
      });
    }
  }
  return result;
}

/**
 * @param {ItemSource[]} items
 *
 * @return {ItemTarget[]}
 */
export function testWhileArray(items) {
  const existIds = [];
  const result = [];
  let i = 0;
  while (items[i]) {
    if (!existIds.includes(items[i].id)) {
      existIds.push(items[i].id);
      result.push({
        id: items[i].id,
        name: `${items[i].firstName} ${items[i].lastName}`,
        count: items[i].foo + items[i].bar,
      });
    }
    i++;
  }
  return result;
}
