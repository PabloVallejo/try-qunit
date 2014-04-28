/**
* Calculator tests
*/
$( document ).ready( function() {

	// Assign calculator
	var calc = window.Calculator;

	// Test `sum` method
	test( 'Test calculator.sum', 2, function() {
		equal( calc.sum( 1, 2 ), 3 );
		equal( calc.sum( 5, 5 ), 10 );
	});

	// Test `subtract` method
	test( 'Test calculator.subtract', 3, function() {
		equal( calc.subtract( 5, 5 ), 0 );
		equal( calc.subtract( 10, 1 ), 9 );
		ok( calc.subtract( 10000, 0 ) );
	});

	// Test `divide` method
	test( 'Test calculator.divide', 2, function() {
		equal( calc.divide( 10, 2 ), 5 );
		equal( calc.divide( 5, 5 ), 1 );
	});

	// Test `multiply` method
	test( 'Test calculator.multiply', 3, function() {
		equal( calc.multiply( 2, 2 ), 4 );
		equal( calc.multiply( 4, 4 ), 16 );
		notEqual( calc.multiply( 9, 9 ), 60 );
	});

});