sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'riskmanagement/risks/test/integration/FirstJourney',
		'riskmanagement/risks/test/integration/pages/RisksList',
		'riskmanagement/risks/test/integration/pages/RisksObjectPage',
		'riskmanagement/risks/test/integration/pages/MitigationsObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage, MitigationsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('riskmanagement/risks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage,
					onTheMitigationsObjectPage: MitigationsObjectPage
                }
            },
            opaJourney.run
        );
    }
);