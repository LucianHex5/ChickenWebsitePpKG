/* 
 * Created on: 28-Jul-2016 18:14:22
 * Author(s): Lucian I. Last
 */

/** Modal Class */
var DataModal = function() {
	this.kg;
	this.persons;
	this.modifer = 0.7;
	this.trueKg = [2,3,4,5,6,7,8,9,10,11,12,13,14,15];
};

DataModal.prototype.setKgFromPersons = function(persons) {
	var rtn =  persons * DataModal.modifer;
	DataModal.kg = rtn;
};
DataModal.prototype.setKgFromPersons = function(kg) {
	var rtn =  kg / DataModal.modifer;
	DataModal.persons = rtn;
};

DataModal.prototype.getKg = function() {
	return DataModal.kg;
};
DataModal.prototype.getPersons = function() {
	return DataModal.persons;
};

//end DataModal

/** Controller Class */
var KgPersonsController = function() {
	
	this.
};
//end kgPersonsController

/** Modal Class */
var DataPurifyModal = function() {
	this.kg = {
		in:NULL, out:NULL
	};
	this.persons = {
		in:NULL, out:NULL
	};
};