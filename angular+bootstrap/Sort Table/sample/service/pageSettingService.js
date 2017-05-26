productModule.service('pageSettingService', function($http) {
/*
*this function make a ajax call(it may be GET/POST/DELETE/PUT) to get JSON data from webservice
*/
//following is the ideal service call example.
//but we used mock data, see lower this page.
	// this.getData = function(backToController) {  
					 // var responsePromise = $http.get("http://localhost:8080/somerestfullwebserviceendpoint");
					 // responsePromise.success(function(data, status, headers, config) {
						// backToController(data);
					 // });
					 // responsePromise.error(function(data, status, headers, config) {
						 // alert("AJAX failed! because no webservice is attached yet");      					 
					 // });
	// };
	
	//7 rows of mock data :
	var data =[{PartNo:"945E000-184364800-0000-AA0",CCAnalyst:200,FUAnalyst:"OBC",CCode:"ab091",Wcenter:"wc011",LCycleDate:"12-4-05",RegCountDate:"12-4-05",CLoTs:"Y",includeNCP:"Y",FClass:"A",PartStatus:"N",PartType:"PP",RecountInd:"noidea",SCode:1,CFreqncy:"30Hz"},
	{PartNo:"945E000-184364800-0000-AB0",CCAnalyst:200,FUAnalyst:"ABC",CCode:"ab091",Wcenter:"wc011",LCycleDate:"12-4-05",RegCountDate:"12-4-05",CLoTs:"Y",includeNCP:"Y",FClass:"A",PartStatus:"N",PartType:"PP",RecountInd:"noidea",SCode:2,CFreqncy:"30Hz"},
	{PartNo:"945E000-184364800-0000-BB0",CCAnalyst:200,FUAnalyst:"ABC",CCode:"ab091",Wcenter:"wc011",LCycleDate:"12-4-05",RegCountDate:"12-4-05",CLoTs:"Y",includeNCP:"Y",FClass:"A",PartStatus:"N",PartType:"PP",RecountInd:"noidea",SCode:3,CFreqncy:"30Hz"},
	{PartNo:"945E000-184364800-0000-BBC",CCAnalyst:200,FUAnalyst:"ABC",CCode:"ab091",Wcenter:"wc011",LCycleDate:"12-4-05",RegCountDate:"12-4-05",CLoTs:"Y",includeNCP:"Y",FClass:"A",PartStatus:"N",PartType:"PP",RecountInd:"noidea",SCode:4,CFreqncy:"30Hz"},
	{PartNo:"945E000-184364800-0000-ABD",CCAnalyst:200,FUAnalyst:"ABC",CCode:"ab091",Wcenter:"wc011",LCycleDate:"12-4-05",RegCountDate:"12-4-05",CLoTs:"Y",includeNCP:"Y",FClass:"A",PartStatus:"N",PartType:"PP",RecountInd:"noidea",SCode:5,CFreqncy:"30Hz"},
	{PartNo:"945E000-184364800-0000-ABM",CCAnalyst:200,FUAnalyst:"ABC",CCode:"ab091",Wcenter:"wc011",LCycleDate:"12-4-05",RegCountDate:"12-4-05",CLoTs:"Y",includeNCP:"Y",FClass:"A",PartStatus:"N",PartType:"PP",RecountInd:"noidea",SCode:6,CFreqncy:"30Hz"},
	{PartNo:"945E000-184364800-0000-ABK",CCAnalyst:200,FUAnalyst:"ABC",CCode:"ab091",Wcenter:"wc011",LCycleDate:"12-4-05",RegCountDate:"12-4-05",CLoTs:"Y",includeNCP:"Y",FClass:"A",PartStatus:"N",PartType:"PP",RecountInd:"noidea",SCode:7,CFreqncy:"30Hz"}
	];
	this.getData = function(backToController) {  
	backToController(data);
	};
});