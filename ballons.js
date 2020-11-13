// Transcrypt'ed from Python, 2020-11-13 13:44:11
var time = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as __module_time__ from './time.js';
__nest__ (time, '', __module_time__);
import {randint as rand} from './random.js';
var __name__ = '__main__';
export var count = 0;
export var remove = function (event) {
	var audio = document.createElement ('AUDIO');
	audio.src = 'b.mp3';
	audio.play ();
	document.body.removeChild (event.target);
	count += 1;
	document.getElementById ('placar_text').textContent = count;
};
export var add_ballon = function () {
	var x = rand (0, 100);
	var y = rand (0, 100);
	var elemento = document.createElement ('div');
	elemento.className = 'ballon';
	elemento.style.left = '{}%'.format (x);
	elemento.style.bottom = '{}%'.format (y);
	elemento.style.background = 'rgb({},{},{})'.format (rand (0, 255), rand (0, 255), rand (0, 255));
	document.body.appendChild (elemento);
	elemento.addEventListener ('click', remove);
	return elemento;
};
export var lista = [];
for (var i = 0; i < 100; i++) {
	lista.append (add_ballon ());
}

//# sourceMappingURL=ballons.map