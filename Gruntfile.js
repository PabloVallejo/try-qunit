/**
 * In `Gruntfile.js` we define tasks that we 
 * want to perform in the project. In this example 
 * we want to run tests for the `Calculator` object.
 */
module.exports = function( grunt ) {

    // Initial config
    grunt.initConfig({
        pkg: grunt.file.readJSON( 'package.json' ),

        // Run QUnit tests
        qunit: {
            files: [ 'tests/index.html' ]
        }
    });

    // Load tasks
    grunt.loadNpmTasks( 'grunt-contrib-qunit' );

    // Default task
    grunt.registerTask( 'default', [ 'qunit' ] );

}
