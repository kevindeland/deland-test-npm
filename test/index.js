var should = require('chai').should(),
scapegoat = require('../index'),
cloudToButt = scapegoat.cloudToButt;


describe('#escape', function() {
    it('converts cloud into butt', function() {
	cloudToButt('cloud').should.equal('butt');
    });

    it('converts "in the cloud" into "in my butt"', function() {
	cloudToButt('in the cloud').should.equal('in my butt');
    });

});
