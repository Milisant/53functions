test( "hello test", function() {
	var result = hello_world();
equal(result, "hello world!");
});
test( "hello Joe", function() {
	var result = hello_joe("Joe");
equal(result, "hello!");
});

test( "number list", function() {
	var result = number_list(10);
	equal(result.toString(), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].toString());
});

test( "sum numbers", function() {
	var result = sum_numbers(6);
equal(result, 21);
});

test( "hello uppercase", function() {
	var result = upperCase("Linkie");
equal(result, "hello" + "Linkie");
});

test( "Count words", function() {
	var result = Count_words("linkie is a fool");
equal(result, "linkie is a fool".split.length);
});

test( "high low", function() {
	var result = high_low(3, 10);
equal(result.toString(), [3, 4, 5, 6, 7, 8, 9, 10].toString());
});

test( "reverse", function() {
	var result = reverseName("orange");
equal(result, "egnaro");
});

test( "length", function() {
	var result = length("linkie");
equal(result, "linkie".length);
});

test( "upper", function() {
	var result = upper("linkie");
equal(result, "linkie".toUppercase);
});

test( "hello list", function() {
	var result = hello_list(5);
equal(result, "hello World");
});

test( "sum word len", function() {
        var sentence = ("I have a dream");
	var result = sum_word_len(sentence);
equal(result,14);
});
test("longest word", function() {
	var sentence = ("Nelisa want's to know what to buy in bulk");
	var longest = ("Nelisa");
	var result = longest_word(longest);
	equal(result, "Nelisa".length);
});

test("shortest word", function() {
	var sentence = ("Nelisa want's to know what to buy in bulk");
	var shortest = ("to");
	var result = longest_word(shortest);
	equal(result, "to".length);
});
test("word length", function() {
	var sentence = ("You are a pig dude");
	var average = Math.round(5,0);
	var result = word_length(average);
	equal(result, 5);
});

test("average", function() {
	var sentence = ("You are a pig dude");
	var average = Math.round(sentence * 10) / 5;
	var result = word_length(average);
	equal(result, 5);
});