exports.config={
    runner:'local',    
    specs: [
        //'./test/feature-file/**/*.feature'
		'./test/feature-file/**/Mobile.feature'
    ],
    capabilities: [{
        browserName: 'chrome',
		'goog:chromeOptions': {
            mobileEmulation: { deviceName: 'Galaxy S5' },
        },
    }],    
    framework: 'cucumber', 
    cucumberOpts: {        
        require: [
			//'./test/step-definition/*.ts'
			'./test/step-definition/Step-Mobile.ts'
		],
		timeout: 60000,
    },
    reporter:'dot',
    services:['chromedriver'],
    autoCompileOpts: {
        autoCompile: true, 
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json'            
        }
    }
}