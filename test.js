const test = require("ava")
const findLastIndex = require(".")

test("main", t => {
	t.is(findLastIndex(["a", "b", "bba", "cc", "d"], value => value.includes("a")), 2)
	t.is(findLastIndex([], () => {}), -1)
})
