 import {FrontendDataSet} from '@liferay/frontend-data-set-web';
 import {render} from '@liferay/frontend-js-react-web';
 import React from 'react';
  
 const datasetDisplayLauncher = (...data) => render(FrontendDataSet, ...data);
 
 const emailsDataSetProps = {
	 activeViewSettings: {},
	 apiURL: '/dataset-display-email-data',
	 creationMenuItems: [
		 {
			 href: '/standard/edit',
			 label: 'Add',
		 },
		 {
			 href: 'modal/url',
			 label: 'Add via modal',
			 target: 'modal',
		 },
	 ],
	 id: 'emailsDatasetDIsplay',
	 pageSize: 5,
	 pagination: {
		 deltas: [
			 {
				 label: 5,
			 },
			 {
				 label: 10,
			 },
			 {
				 label: 20,
			 },
			 {
				 label: 30,
			 },
			 {
				 label: 50,
			 },
			 {
				 href:
					 'http://localhost:8080/group/test-1/pending-orders?p_p_id=com_liferay_commerce_order_content_web_internal_portlet_CommerceOpenOrderContentPortlet&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&_com_liferay_commerce_order_content_web_internal_portlet_CommerceOpenOrderContentPortlet_delta=75',
				 label: 75,
			 },
		 ],
		 initialDelta: 10,
	 },
	 showPagination: true,
	 style: 'stacked',
	 views: [
		 {
			 contentRenderer: 'emailsList',
			 label: 'Email',
			 thumbnail: 'email',
		 },
	 ],
 };
 
 datasetDisplayLauncher(
	 emailsDataSetProps,
	 document.getElementById('emails-dataset-display-root')
 );
 
