import { describe, expect, it } from 'vitest';

import { useToString } from './index';

describe('useToString', () => {
	it('测试 useToString 处理对象', async () => {
		const obj = { a: 1 };
		expect(useToString(obj)).toEqual(JSON.stringify(obj));
	});

	it('测试 useToString 处理数组', async () => {
		const obj = { a: [1] };
		expect(useToString(obj)).toEqual(JSON.stringify(obj));
	});

	it('测试 useToString 处理含有 Symbol属性的 对象', async () => {
		const obj = { [Symbol(1)]: 1 };
		expect(useToString(obj)).toEqual('{"Symbol(1)":1}');
	});

	it('测试 useToString 处理含有 Symbol属性值的 对象', async () => {
		const obj = { [Symbol(1)]: Symbol(2) };
		expect(useToString(obj)).toEqual('{"Symbol(1)":"Symbol(2)"}');
	});
});
