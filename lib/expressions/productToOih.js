/* eslint "max-len":  ["error", { "code": 170 }] */

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

	//Map Data to Oih from SilvERP
	const expression = {
		meta: {
			operation: "",
			domainId: '123456',
			schemaUri: 'article',
			oihUid: msg.body.meta.oihUid ? msg.body.meta.oihUid : undefined,
			applicationUid: msg.body.meta.applicationUid ? msg.body.meta.applicationUid : undefined,
			iamToken: msg.body.meta.iamToken ? msg.body.meta.iamToken : undefined,
			recordUid: msg.body.meta.recordUid ? msg.body.meta.recordUid : undefined
		},
		data: {
			recordUid: msg.body.meta.recordUid ? msg.body.meta.recordUid : undefined,
			articleNo: msg.body.data.articleNo,
			description: msg.body.data.description,
			extraDescription: msg.body.data.extraDescription,
			matchcode: msg.body.data.matchcode,
			gtin: msg.body.data.gtin,
			costCalc: msg.body.data.costCalc,
			costAvg: msg.body.data.costAvg,
			costList: msg.body.data.costList,
			costInventory: msg.body.data.costInventory,
			dtCostLast: msg.body.data.dtCostLast,
			statusFlag: msg.body.data.status,
			version: msg.body.data.version,
			dinStandard: msg.body.data.dinStandard,
			netWeight: msg.body.data.netWeight,
			grossWeight: msg.body.data.grossWeight,
			density: msg.body.data.density,
			length: msg.body.data.length,
			width: msg.body.data.width,
			strength: msg.body.data.strength,
			innerDiameter: msg.body.data.innerDiameter,
			outerDiameter: msg.body.data.outerDiameter,
			volume: msg.body.data.volume,
			replacementTime: msg.body.data.replacementTime,
			systemUnit: msg.body.data.systemUnit,
			articleGroup: msg.body.data.articleGroup,
			country: msg.body.data.country,
		},
	};
	return expression;
};
