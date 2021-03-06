/**
   * 深度克隆
   * @param {Object} obj 对象
  */
export function deepClone (obj) {
  if(typeof obj !== "object" && typeof obj !== 'function') {
	//原始类型直接返回
      return obj;
  }
  var o = isArray(obj) ? [] : {};
  for(let i in obj) {
      if(obj.hasOwnProperty(i)){
          o[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
      }
  }
  return o;
}

/**
 * 数组查找符合条件元素并返回下标
 * @param {Array} arr 传入数组
 * @param {String} value 条件元素
 * @param {String} query 对比key值
*/
export function indexOf (arr, query, value ) {
	let len = arr.length;
	for ( let i = 0; i < len; i++ ) {
		if ( arr[i][query] == value ) {
			return parseInt(i);
		}
	}
	return -1;
}

/**
 * 数组查找指定元素并返回个数
 * @param {Array} arr 传入数组
 * @param {String} value 条件元素值
*/
export function countOf (arr, value ) {
	let len = arr.length;
	let count = 0;
	for ( let i = 0; i < len; i++ ) {
		if ( arr[i] == value ) {
			count++
		}
	}
	return count;
}

/**
 * 数组查找指定元素并返回全部下标
 * @param {Array} arr 传入数组
 * @param {String} value 条件元素值
*/
export function indexAllOf (arr, value) {
	let len = arr.length;
	let index = [];
	for ( let i = 0; i < len; i++ ) {
		if ( arr[i] == value ) {
			index.push(i)
		}
	}
	return index;
}

// 判断arr是否为一个数组，返回一个bool值
function isArray (arr) {
    return Object.prototype.toString.call(arr) === '[object Array]';
}