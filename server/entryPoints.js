'use strict';

/* Server side helper */
function uniqAndNotNull(a) {
  var prims = {'boolean':{}, 'number':{}, 'string':{}}, objs = [];

  return a.filter(function(item) {
    if (!item) {
      return false;
    } else {
      var type = typeof item;
      if(type in prims) {
        return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true);
      } else {
        return objs.indexOf(item) >= 0 ? false : objs.push(item);
      }
    }
  });
}

/* Exports */
import Website from '../app/views/Website/Website';
import NotFound from '../app/views/NotFound/NotFound';
import Page1 from '../app/views/Website/Page1/Page1';
import Page2 from '../app/views/Website/Page2/Page2';

export {Website, NotFound, Page1, Page2};

export default function(components){
  let entryPoints = components.map((value) => {
    if (value.entryPoint) {
      return value.entryPoint();
    }
    return null;
  });
  entryPoints = uniqAndNotNull(entryPoints);
  return entryPoints;
}
