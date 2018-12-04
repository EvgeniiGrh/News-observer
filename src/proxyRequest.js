import requestFactory from './requestFactory.js';

const target = {
  type: '',
  body: '',
};

const handler = {
  construct(target, args) {

    return target;
  },
  get: function(target, prop) {
    debugger
    target = requestFactory(prop);
    debugger
    
    return target;
  },
};

const proxy = new Proxy(target, handler);

export default proxy;
