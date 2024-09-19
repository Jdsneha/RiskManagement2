sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'riskmanagement.risks',
            componentId: 'MitigationsObjectPage',
            contextPath: '/Risks/risks'
        },
        CustomPageDefinitions
    );
});