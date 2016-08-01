require("../../css/ace_editor.css") 

var editor=require("exports?SurveyEditor!../../js/surveyeditor.js")
var editorHTML=require("../../src/tpl/editor.html");

var edit=new editor.SurveyEditor("surveyjseditor",{
	editorHTML:editorHTML
})

