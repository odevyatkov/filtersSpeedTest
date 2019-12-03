/**
 * @param {ItemSource[]} items
 *
 * @return {ItemTarget[]}
 */
export function testMapFilterSet(items) {
  const existIds = new Set();
  return items.map((item) => {
    if (!existIds.has(item.id)) {
      existIds.add(item.id);
      return {
        id: item.id,
        name: `${item.firstName} ${item.lastName}`,
        count: item.foo + item.bar,
      };
    }
    return null;
  }).filter((data) => data !== null);
}

/**
 * @param {ItemSource[]} items
 *
 * @return {ItemTarget[]}
 */
export function testForEachSet(items) {
  const existIds = new Set();
  const result = [];
  items.forEach((item) => {
    if (!existIds.has(item.id)) {
      existIds.add(item.id);
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
export function testForSet(items) {
  const itemsOriginLength = items.length;
  const existIds = new Set();
  const result = [];
  for (let i = 0; i < itemsOriginLength; i++) {
    if (!existIds.has(items[i].id)) {
      existIds.add(items[i].id);
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
export function testForOfSet(items) {
  const existIds = new Set();
  const result = [];
  let item;
  for (item of items) {
    if (!existIds.has(item.id)) {
      existIds.add(item.id);
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
export function testWhileSet(items) {
  const existIds = new Set();
  const result = [];
  let i = 0;
  while (items[i]) {
    if (!existIds.has(items[i].id)) {
      existIds.add(items[i].id);
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
