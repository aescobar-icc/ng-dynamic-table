/**
 * author: aescobar
 * github: https://github.com/aescobar-icc/
 */

(function($){
	
		/**
		 * get nested field
		 */
		$.fn.getField = function(item,fieldName,indexData){
			if(!item || !fieldName || fieldName === '')
				return null;
				//throw new Error('[NestedField] Invalid values for getField, you must to enter a valid item and valid fieldName');
			var path = fieldName.split(".")
			var value = item;
			for(var p in path){
				
				if(!value)
					return value;
				
				var index = null;
				if(path[p].indexOf('[')>0 && path[p].indexOf(']')>2){
					index	= path[p].substring(path[p].indexOf('[')+1,path[p].indexOf(']'));
					path[p]	= path[p].substring(0,path[p].indexOf('['));
				}
				if(typeof value[path[p]] === 'undefined')
					return value[path[p]];
				if(index != null){
					// if index is defined on indexData
					if(indexData && indexData[index] != null && typeof indexData[index] !== 'undefined')
						index = indexData[index];
					// if index is not a valid attribute, use 0 by default
					else if(typeof value[path[p]][index] === 'undefined'){
						console.log('[NestedField][getField] WARNING index:'+index+ ' for field: '+fieldName+'\t is not defined, using 0 by default');
						index = 0;
					}

					value = value[path[p]][index];
				}else
					value = value[path[p]];
			}
			return value;
		}
		$.getField = $.fn.getField;
		
		/**
		 * set nested field
		 */
		$.fn.setField = function(item,fieldName,value,indexData){
			if(!item || !fieldName || fieldName === '')
				return;
				//throw new Error('[NestedField] Invalid values for getField, you must to enter a valid item and valid fieldName');
			var path = fieldName.split(".");
			for(var p in path){
				var index = null;
				if(path[p].indexOf('[')>0 && path[p].indexOf(']')>2){
					index	= path[p].substring(path[p].indexOf('[')+1,path[p].indexOf(']'));
					path[p]	= path[p].substring(0,path[p].indexOf('['));
				}
				if(index != null){

					// if index is defined on indexData
					if( indexData && indexData[index] != null && typeof indexData[index] !== 'undefined')
						index = indexData[index];
					else{
						console.log('[NestedField][setField] WARNING index:'+index+ ' for field: '+fieldName+'\t is not defined, using 0 by default');
						index = 0;
					}
				}
				
				if(parseInt(p) < path.length - 1){// find item of path and if some part of it does not exists, it's created
					if(index != null){//item[path[p]]  is array
						if(typeof item[path[p]] === 'undefined')
							item[path[p]] = [];
						if(typeof item[path[p]][index] === 'undefined'){
							if(item[path[p]].length >= index)
								item[path[p]].splice(index, 1, {}); // agrega al final o reemplaza el valor en el indice
							else
								throw new Error('[NestedField][setField] Error array index:'+index+' out of bounds, of '+path[p]);
						}
						
						item = item[path[p]][index];
					}else{
						if(typeof item[path[p]] === 'undefined' || item[path[p]] == null)
							item[path[p]] = {};
						item = item[path[p]];
					}
				}else{// when target item is found
					if(index != null){//item[path[p]]  is array
						if(Object.prototype.toString.call(item[path[p]]) !== '[object Array]'){
							console.log(path[p]+ ' is not array, fixing...')
							item[path[p]] = [];
						}
						if(item[path[p]].length >= index)
							item[path[p]].splice(index, 1, value); // agrega al final o reemplaza el valor en el indice
						else
							throw new Error('[NestedField][setField] Error array index:'+index+' out of bounds, of '+path[p]);
					}else
						item[path[p]] = value;
				}
			}
		}
		$.setField = $.fn.setField;
		
}(jQuery));
//# sourceURL=https://github.com/aescobar-icc/jquery.beauty.nestedfield.js