/**
 * Copyright 2018 Wice GmbH

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

module.exports.getExpression = (msg) => {
	if (Object.keys(msg.body).length === 0 && msg.body.constructor === Object) {
		return msg.body;
	}

	//Map Data from Oih to SilvERP
	//TODO: Modify to Fit SilvERP 
	const expression = {
		meta: {
			idRecord: msg.body.meta.idRecord,
			oihUid: msg.body.meta.oihUid ? msg.body.meta.oihUid : 'not set yet',
			applicationUid: msg.body.meta.applicationUid ? msg.body.meta.applicationUid : 'not set yet',
			iamToken: msg.body.meta.iamToken ? msg.body.meta.iamToken : 'not set yet',
			domainId: '123456',
			schemaUri: 'country',
		},
		data: {
			articleNo: msg.body.data.articleNo,
			description: msg.body.data.description,
			extraDescription: msg.body.data.extraDescription,
			matchcode: msg.body.data.matchcode
		},
	};
	return expression;
};
