import requestFactory from '../requestFactory.js';

export const handler = {
  get: function(target, prop) {
    target = requestFactory(prop);
    
    const { method, body } = target;
    
    console.log(`Request was send by method - ${method}`);
    if (body) console.log(`Request was send with body - ${body}`)

    return target;
  },
};