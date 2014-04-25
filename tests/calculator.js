/**
 * Calculator methods
 */
(function( window ) {


	// Calculator object
	var calculator = {

			// Sums two numbers
			sum: function( a, b ) {
				return a + b;
			}

			// Substract `b` to `a`
		,	substract: function( a, b ) {
				return a - b;
			}

			// Divide `a` by `b`
		,	divide: function( a, b ) {
				return a / b;
			}

			// Multiply `a` by `b`
		,	multiply: function( a, b ) {
				return a * b;
			}
	};

	// Globalize calculator so that it can be 
	// used in other methods.
	window.Calculator = calculator;

})( this );