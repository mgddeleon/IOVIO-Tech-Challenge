exports.config={
    runner:'local',    
    specs: [
        //'./test/feature-file/**/*.feature'
		'./test/feature-file/**/Desktop.feature'
    ],
    capabilities: [{
        browserName: 'chrome',
    }],    
    framework: 'cucumber', 
    cucumberOpts: {        
        require: [
			//'./test/step-definition/*.ts'
			'./test/step-definition/Step-Desktop.ts'
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