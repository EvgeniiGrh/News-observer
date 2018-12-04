import requestFactory from '../requestFactory.js';

export const handler = {
  get: function(target, prop) {
    target = requestFactory(prop);

    return target;
  },
};