const formatDecimal = require('./../../../../lib/utilities/format/decimal');

describe('when formatting invalid values', () => {
	it('formats a null value as a zero-length string', () => {
		expect(formatDecimal(null, 0, ',')).toEqual('');
	});

	it('formats an undefined value as a zero-length string', () => {
		expect(formatDecimal(undefined, 0, ',')).toEqual('');
	});

	it('formats Number.NaN as a zero-length string', () => {
		expect(formatDecimal(Number.NaN, 0, ',')).toEqual('');
	});
});

describe('when formatting decimal values with zero decimals and thousands separator', () => {
	it('formats 0 as "0"', () => {
		expect(formatDecimal(0, 0, ',')).toEqual('0');
	});

	it('formats 0.1 as "0"', () => {
		expect(formatDecimal(0.1, 0, ',')).toEqual('0');
	});

	it('formats 0.9 as "0"', () => {
		expect(formatDecimal(0.9, 0, ',')).toEqual('1');
	});

	it('formats 377 as "377"', () => {
		expect(formatDecimal(377, 0, ',')).toEqual('377');
	});

	it('formats -377 as "-377"', () => {
		expect(formatDecimal(-377, 0, ',')).toEqual('-377');
	});

	it('formats 377.99 as "378"', () => {
		expect(formatDecimal(377.99, 0, ',')).toEqual('378');
	});

	it('formats -377.99 as "-378"', () => {
		expect(formatDecimal(-377.99, 0, ',')).toEqual('-378');
	});

	it('formats 377.49 as "377"', () => {
		expect(formatDecimal(377.49, 0, ',')).toEqual('377');
	});

	it('formats -377.49 as "-377"', () => {
		expect(formatDecimal(-377.49, 0, ',')).toEqual('-377');
	});

	it('formats 377377 as "377,377"', () => {
		expect(formatDecimal(377377, 0, ',')).toEqual('377,377');
	});

	it('formats -377377 as "-377,377"', () => {
		expect(formatDecimal(-377377, 0, ',')).toEqual('-377,377');
	});

	it('formats 377377.49 as "377,377"', () => {
		expect(formatDecimal(377377.49, 0, ',')).toEqual('377,377');
	});

	it('formats -377377.49 as "-377,377"', () => {
		expect(formatDecimal(-377377.49, 0, ',')).toEqual('-377,377');
	});

	it('formats 377377.99 as "377,378"', () => {
		expect(formatDecimal(377377.99, 0, ',')).toEqual('377,378');
	});

	it('formats -377377.99 as "-377,378"', () => {
		expect(formatDecimal(-377377.99, 0, ',')).toEqual('-377,378');
	});
});

describe('when formatting decimal values with two decimals and thousands separator', () => {
	it('formats 0 as "0.00"', () => {
		expect(formatDecimal(0, 2, ',')).toEqual('0.00');
	});

	it('formats 0.001 as "0.00"', () => {
		expect(formatDecimal(0.001, 2, ',')).toEqual('0.00');
	});

	it('formats 0.009 as "0.01"', () => {
		expect(formatDecimal(0.009, 2, ',')).toEqual('0.01');
	});

	it('formats 123.45 as "123.45"', () => {
		expect(formatDecimal(123.45, 2, ',')).toEqual('123.45');
	});

	it('formats -123.45 as "-123.45"', () => {
		expect(formatDecimal(-123.45, 2, ',')).toEqual('-123.45');
	});

	it('formats 1234.5 as "1234.50"', () => {
		expect(formatDecimal(1234.5, 2, ',')).toEqual('1,234.50');
	});

	it('formats -1234.5 as "-1234.50"', () => {
		expect(formatDecimal(-1234.5, 2, ',')).toEqual('-1,234.50');
	});

	it('formats 123456.789 as "123,456.79"', () => {
		expect(formatDecimal(123456.789, 2, ',')).toEqual('123,456.79');
	});

	it('formats -123456.789 as "-123,456.79"', () => {
		expect(formatDecimal(-123456.789, 2, ',')).toEqual('-123,456.79');
	});
});

describe('when formatting decimal values with four decimals and thousands separator', () => {
	it('formats 1234.56789 as "1,234.5679"', function () {
		expect(formatDecimal(1234.56789, 4, ',')).toEqual('1,234.5679');
	});

	it('formats -1234.56789 as "-1,234.5679"', function () {
		expect(formatDecimal(-1234.56789, 4, ',')).toEqual('-1,234.5679');
	});
});

describe('when formatting decimal values to format negative numbers with a thousands separator', () => {
	it('formats -123.456789 as "-123.45"', function () {
		expect(formatDecimal(-123.456789, 2, ',')).toEqual('-123.46');
	});

	it('formats -123456.789 as "-123,456.79', function () {
		expect(formatDecimal(-123456.789 , 2, ',')).toEqual('-123,456.79');
	});
});

describe('when formatting decimal values to format with parenthesis and a thousands separator', () => {
	it('formats 123.456789 as "-23.45"', function () {
		expect(formatDecimal(123.456789, 2, ',', true)).toEqual('123.46');
	});

	it('formats -123.456789 as "-123.45"', function () {
		expect(formatDecimal(-123.456789, 2, ',', true)).toEqual('(123.46)');
	});

	it('formats 123456.789 as "-123,456.79', function () {
		expect(formatDecimal(123456.789 , 2, ',', true)).toEqual('123,456.79');
	});

	it('formats -123456.789 as "-123,456.79', function () {
		expect(formatDecimal(-123456.789 , 2, ',', true)).toEqual('(123,456.79)');
	});

	it('formats -3770.75, to three decimal places, as "(3,770.750)', function () {
		expect(formatDecimal(-3770.75 , 3, ',', true)).toEqual('(3,770.750)');
	});
});

describe('when formatting decimal values to format with parenthesis and no thousands separator', () => {
	it('formats 123.456789 as "-23.45"', function () {
		expect(formatDecimal(123.456789, 2, '', true)).toEqual('123.46');
	});

	it('formats -123.456789 as "-123.45"', function () {
		expect(formatDecimal(-123.456789, 2, '', true)).toEqual('(123.46)');
	});

	it('formats 123456.789 as "-123,456.79', function () {
		expect(formatDecimal(123456.789 , 2, '', true)).toEqual('123456.79');
	});

	it('formats -123456.789 as "-123,456.79', function () {
		expect(formatDecimal(-123456.789 , 2, '', true)).toEqual('(123456.79)');
	});
});

