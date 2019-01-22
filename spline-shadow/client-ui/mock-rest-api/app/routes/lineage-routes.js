/*
 * Copyright 2017 ABSA Group Limited
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = (app) => {
    const lineage = require('../controllers/lineage.controller.js')

    // Retrieves lineage with datasource and timestamp given in parameters
    app.get('/lineage/:datasourceId/:timestamp', lineage.findOne)

    // Retrieves lineage with datasource and timestamp with a focus on a node and a max depth given in parameters
    app.get('/lineage/:datasourceId/:timestamp/:nodeFocus/:depth', lineage.findOne)

    //Get the details of an operation
    app.get('/details/:operationId', lineage.details)
}
