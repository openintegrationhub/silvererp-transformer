
/**
 * Executes the verification logic by sending a simple to the Petstore API using the provided apiKey.
 * If the request succeeds, we can assume that the apiKey is valid. Otherwise it is not valid.
 *
 * @param credentials object to retrieve apiKey from
 *
 * @returns boolean of whether or not the request was successful
 */

const { getToken } = require('./lib/utils/silvererp');


module.exports = async function verify(credentials) {
	const { apiKey } = credentials;

	if (!apiKey) throw new Error('API key is missing');
	try {
		const token = await getToken(apikey);

		if (token !== null) {
			cb(null, { verified: true });
			console.log('Credentials verified successfully - Correct');
			return true;
		}
		return false;
	} catch (e) {
		return false;
	}
};
