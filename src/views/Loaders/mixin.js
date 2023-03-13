const req = require.context('@/components/Loader-demo', false, /\.vue$/);
const cache = {};
const componentList=[]
function importAll(r) { r.keys().forEach((key) => (cache[convertPathToName(key)] = r(key).default,componentList.push(convertPathToName(key)))); }
function convertPathToName(pathString) {
  return pathString.substring(2).slice(0,-4)
}
importAll(req);
export default {
  components: cache,
  data () {
    return {
      componentList
    }
  },
}


