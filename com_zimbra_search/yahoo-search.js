/*
 * ***** BEGIN LICENSE BLOCK *****
 * Zimbra Collaboration Suite Zimlets
 * Copyright (C) 2007, 2008, 2009, 2010, 2013, 2014 Zimbra, Inc.
 * 
 * The contents of this file are subject to the Common Public Attribution License Version 1.0 (the "License");
 * you may not use this file except in compliance with the License. 
 * You may obtain a copy of the License at: http://www.zimbra.com/license
 * The License is based on the Mozilla Public License Version 1.1 but Sections 14 and 15 
 * have been added to cover use of software over a computer network and provide for limited attribution 
 * for the Original Developer. In addition, Exhibit A has been modified to be consistent with Exhibit B. 
 * 
 * Software distributed under the License is distributed on an "AS IS" basis, 
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. 
 * See the License for the specific language governing rights and limitations under the License. 
 * The Original Code is Zimbra Open Source Web Client. 
 * The Initial Developer of the Original Code is Zimbra, Inc. 
 * All portions of the code are Copyright (C) 2007, 2008, 2009, 2010, 2013, 2014 Zimbra, Inc. All Rights Reserved. 
 * ***** END LICENSE BLOCK *****
 */

function Com_Zimbra_Search_Yahoo(zimlet) {
	this.zimlet = zimlet;
	this.icon = "Yahoo-Icon";
	this.label = this.zimlet.getMessage("com_zimbra_search_yahoo");
};

Com_Zimbra_Search_Yahoo.prototype.getSearchFormHTML =
function(query) {
	var zimlet = this.zimlet;
	var props = {
		query : query
	};
	var code = zimlet.getConfig("yahoo-search-code");
	code = zimlet.xmlObj().replaceObj(ZmZimletContext.RE_SCAN_PROP, code, props);
	return code;
};

Com_Zimbra_Search.registerHandler(Com_Zimbra_Search_Yahoo);