export function importAll(r) {
  const cache = {};
  const componentList=[]
  r.keys().forEach((key) => (cache[convertPathToName(key)] = r(key).default, componentList.push(convertPathToName(key)))); return { cache, componentList }
}

function convertPathToName(pathString) {
  return pathString.substring(2).slice(0,-4)
}
