/**
 * System configuration for Angular2 samples
 * Ad just as necessary for your application needs.
 */
(function (global) {

    // map tells the System loader where to look for things
    var map = {
        'app': 'js', // 'dist',
        'rxjs': 'node_modules/rxjs',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        '@angular': 'node_modules/@angular'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': {main: 'main.js', defaultExtension: 'js'},
        'rxjs': {defaultExtension: 'js'},
        'angular2-in-memory-web-api': {defaultExtension: 'js'},
    };

    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'router-deprecated',
        'upgrade',
    ];

    // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
    ngPackageNames.forEach(function (pkgName) {
        packages['@angular/' + pkgName] = {main: pkgName + '.umd.js',defaultExtension: 'js'};
    });

    var config = {
        map: map,
        packages: packages
    }

    // filterSystemConfig - index.html's chance to modify config before we register it.
    /*if (global.filterSystemConfig) {
        global.filterSystemConfig(config);
    }*/

    System.config(config);

})(this);

