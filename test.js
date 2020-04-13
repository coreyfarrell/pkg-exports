'use strict';

function testit(pkg) {
	try {
		console.log(require(pkg));
	} catch (error) {
		console.error(error);
	}
}

testit('pkg1/lib/');
testit('pkg1/not-lib/');
testit('pkg1/lib/helpers/');
