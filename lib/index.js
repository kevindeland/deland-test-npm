/**
 * replace word cloud with word butt 
 */

module.exports = {
    cloudToButt: function(html) {
	return String(html)
	    .replace(/the cloud/g, 'my butt')
	    .replace(/cloud/g, 'butt');
    }
};
