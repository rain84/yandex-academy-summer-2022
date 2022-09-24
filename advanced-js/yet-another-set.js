//  Realization of ES6 Set

const storage = Symbol();

function YetAnotherSet(iterator = []) {
	if (!new.target) return new YetAnotherSet(iterator);

	this[storage] = [];
	const s = this[storage];
	[...iterator].forEach((item) => {
		if (!s.includes(item)) s.push(item);
	});
}

module.exports = YetAnotherSet;

YetAnotherSet.prototype.constructor = YetAnotherSet;

YetAnotherSet.prototype.toString = function () {
	return "[object ^_^]";
};

YetAnotherSet.prototype[Symbol.toStringTag] = "^_^";

YetAnotherSet.prototype[Symbol.iterator] = function* () {
	for (const item of this[storage]) yield item;
};

YetAnotherSet.prototype.has = function (value) {
	for (const item of this[storage]) {
		if (Object.is(item, value)) return true;
	}
	return false;
};

YetAnotherSet.prototype.add = function (value) {
	if (this.has(value)) return this;
	this[storage].push(value);
	return this;
};

YetAnotherSet.prototype.delete = function (value) {
	if (!this.has(value)) return false;
	this[storage] = this[storage].filter((val) => !Object.is(val, value));
	return true;
};

YetAnotherSet.prototype.clear = function () {
	this[storage].length = 0;
	return this;
};

YetAnotherSet.prototype.forEach = function (cb, ctx) {
	this[storage].forEach(cb, ctx);
	return this;
};

YetAnotherSet.prototype.keys = function () {
	return [...this[storage].keys()];
};

YetAnotherSet.prototype.values = function () {
	return [...this[storage].values()];
};

YetAnotherSet.prototype.entries = function () {
	return [...this[storage].entries()];
};

Object.defineProperties(YetAnotherSet.prototype, {
	size: {
		get: function () {
			return this[storage].length;
		},
		enumerable: false,
	},
});
