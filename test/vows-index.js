var vows = require('vows'),
    assert = require('assert'),
    scapegoat = require('../lib/index'),
    cloudToButt = scapegoat.cloudToButt;

vows.describe('Cloud to Butt').addBatch({
    'when converting cloud' : {
	topic: function() { return cloudToButt('cloud') },
	
	'we get \'butt\'': function(topic) {
	    assert.equal(topic, 'butt');
	}
    },

    'when converting \'the cloud\'' : {
	topic: function() { return cloudToButt('in the cloud') },
	
	'we get \'my butt\'': function(topic) {
	    assert.equal(topic, 'in my butt');
	}
    }
}).run();

