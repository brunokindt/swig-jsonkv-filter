/**
 * Return a string key value representation of an JavaScript object.
 *
 * @example
 * // val = { a: 'a' }
 * {{ val|jsonkv }}
 * // => a="a"
 *
 * @example
 * // val = {type:"text", class:"form-control", placeholder:"Username" }
 * // <input {{ val|jsonkv|safe }} >
 * // => <input type="text" class="form-control" placeholder="Username" >
 * //
 * @example
 * // val = { a: 'a', b: 'b' }
 * {{ val|jsonkv('a') }}
 * // => b="b"
 *
 * @param  {*}        input
 * @param  {array}    keys to ignore
 * @return {string}   A string represention of an JavaScript object.
 */

module.exports = function (input, ignore) {

  if (typeof input !== 'object') {
    return input;
  }

  var o = [];
      hasIgnore = Array.isArray(ignore);

  Object.keys(input).forEach(function(key) {
    if (!hasIgnore || ignore.indexOf(key) === -1) {
      o.push(key + '="' + input[key] + '"');
    }
  });

  return o.join(' ');
};

