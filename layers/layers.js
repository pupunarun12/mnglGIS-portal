var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMap_1 = new ol.layer.Tile({
            'title': 'Google Map',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_GA_2 = new ol.format.GeoJSON();
var features_GA_2 = format_GA_2.readFeatures(json_GA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GA_2.addFeatures(features_GA_2);
var lyr_GA_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GA_2, 
                style: style_GA_2,
                interactive: true,
                title: '<img src="styles/legend/GA_2.png" /> GA'
            });
var format_CA_3 = new ol.format.GeoJSON();
var features_CA_3 = format_CA_3.readFeatures(json_CA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CA_3.addFeatures(features_CA_3);
var lyr_CA_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CA_3, 
                style: style_CA_3,
                interactive: true,
                title: '<img src="styles/legend/CA_3.png" /> CA'
            });
var format_MAIN_LINE_4 = new ol.format.GeoJSON();
var features_MAIN_LINE_4 = format_MAIN_LINE_4.readFeatures(json_MAIN_LINE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MAIN_LINE_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAIN_LINE_4.addFeatures(features_MAIN_LINE_4);
var lyr_MAIN_LINE_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MAIN_LINE_4, 
                style: style_MAIN_LINE_4,
                interactive: true,
                title: '<img src="styles/legend/MAIN_LINE_4.png" /> MAIN_LINE'
            });
var format_DISTRIBUTION_5 = new ol.format.GeoJSON();
var features_DISTRIBUTION_5 = format_DISTRIBUTION_5.readFeatures(json_DISTRIBUTION_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DISTRIBUTION_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DISTRIBUTION_5.addFeatures(features_DISTRIBUTION_5);
var lyr_DISTRIBUTION_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DISTRIBUTION_5, 
                style: style_DISTRIBUTION_5,
                interactive: true,
                title: '<img src="styles/legend/DISTRIBUTION_5.png" /> DISTRIBUTION'
            });
var format_DRS_6 = new ol.format.GeoJSON();
var features_DRS_6 = format_DRS_6.readFeatures(json_DRS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DRS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRS_6.addFeatures(features_DRS_6);
var lyr_DRS_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DRS_6, 
                style: style_DRS_6,
                interactive: true,
                title: '<img src="styles/legend/DRS_6.png" /> DRS'
            });
var format_DCS_7 = new ol.format.GeoJSON();
var features_DCS_7 = format_DCS_7.readFeatures(json_DCS_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DCS_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DCS_7.addFeatures(features_DCS_7);
var lyr_DCS_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DCS_7, 
                style: style_DCS_7,
                interactive: true,
                title: '<img src="styles/legend/DCS_7.png" />  DCS'
            });
var format_Industrial_Meter_8 = new ol.format.GeoJSON();
var features_Industrial_Meter_8 = format_Industrial_Meter_8.readFeatures(json_Industrial_Meter_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Industrial_Meter_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Industrial_Meter_8.addFeatures(features_Industrial_Meter_8);
var lyr_Industrial_Meter_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Industrial_Meter_8, 
                style: style_Industrial_Meter_8,
                interactive: true,
                title: '<img src="styles/legend/Industrial_Meter_8.png" /> Industrial_Meter'
            });
var format_Commercial_Meter_9 = new ol.format.GeoJSON();
var features_Commercial_Meter_9 = format_Commercial_Meter_9.readFeatures(json_Commercial_Meter_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Commercial_Meter_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Commercial_Meter_9.addFeatures(features_Commercial_Meter_9);
var lyr_Commercial_Meter_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Commercial_Meter_9, 
                style: style_Commercial_Meter_9,
                interactive: true,
                title: '<img src="styles/legend/Commercial_Meter_9.png" />  Commercial_Meter'
            });
var format_Proposed_CNG_Stations_10 = new ol.format.GeoJSON();
var features_Proposed_CNG_Stations_10 = format_Proposed_CNG_Stations_10.readFeatures(json_Proposed_CNG_Stations_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Proposed_CNG_Stations_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Proposed_CNG_Stations_10.addFeatures(features_Proposed_CNG_Stations_10);
var lyr_Proposed_CNG_Stations_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Proposed_CNG_Stations_10, 
                style: style_Proposed_CNG_Stations_10,
                interactive: true,
                title: '<img src="styles/legend/Proposed_CNG_Stations_10.png" />  Proposed_CNG_Stations'
            });
var format_CNG_Stations_11 = new ol.format.GeoJSON();
var features_CNG_Stations_11 = format_CNG_Stations_11.readFeatures(json_CNG_Stations_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CNG_Stations_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CNG_Stations_11.addFeatures(features_CNG_Stations_11);
var lyr_CNG_Stations_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CNG_Stations_11, 
                style: style_CNG_Stations_11,
                interactive: true,
                title: '<img src="styles/legend/CNG_Stations_11.png" /> CNG_Stations'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_GoogleMap_1.setVisible(true);lyr_GA_2.setVisible(true);lyr_CA_3.setVisible(true);lyr_MAIN_LINE_4.setVisible(true);lyr_DISTRIBUTION_5.setVisible(true);lyr_DRS_6.setVisible(true);lyr_DCS_7.setVisible(true);lyr_Industrial_Meter_8.setVisible(true);lyr_Commercial_Meter_9.setVisible(true);lyr_Proposed_CNG_Stations_10.setVisible(true);lyr_CNG_Stations_11.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_GoogleMap_1,lyr_GA_2,lyr_CA_3,lyr_MAIN_LINE_4,lyr_DISTRIBUTION_5,lyr_DRS_6,lyr_DCS_7,lyr_Industrial_Meter_8,lyr_Commercial_Meter_9,lyr_Proposed_CNG_Stations_10,lyr_CNG_Stations_11];
lyr_GA_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GA_ID': 'GA_ID', 'GA_NAME': 'GA_NAME', 'DISTRICT_NAME': 'DISTRICT_NAME', 'STATE_NAME': 'STATE_NAME', 'GA_AREA': 'GA_AREA', 'TOTAL_POPULATION': 'TOTAL_POPULATION', 'TOTAL_HOUSEHOLD': 'TOTAL_HOUSEHOLD', 'NO_OF_CA': 'NO_OF_CA', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_CA_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CA_ID': 'CA_ID', 'GA_ID': 'GA_ID', 'GA_NAME': 'GA_NAME', 'CA_NAME': 'CA_NAME', 'CA_AREA': 'CA_AREA', 'REMARKS': 'REMARKS', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_MAIN_LINE_4.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'Asset_ID': 'Asset_ID', 'Status': 'Status', 'Pipeline_T': 'Pipeline_T', 'Material': 'Material', 'Grade': 'Grade', 'Schedule': 'Schedule', 'Thickness': 'Thickness', 'Pipeline_S': 'Pipeline_S', 'Join_Metho': 'Join_Metho', 'Inserted': 'Inserted', 'Type_Of_Co': 'Type_Of_Co', 'Pressure_C': 'Pressure_C', 'Operating_': 'Operating_', 'Test_Press': 'Test_Press', 'Test_Pre_1': 'Test_Pre_1', 'Installed_': 'Installed_', 'Retired_Da': 'Retired_Da', 'SP_Gravity': 'SP_Gravity', 'Roughness': 'Roughness', 'Nominal_Di': 'Nominal_Di', 'Manufactur': 'Manufactur', 'Depth': 'Depth', 'Actual_Len': 'Actual_Len', 'Exposed': 'Exposed', 'Pipeline_N': 'Pipeline_N', 'Location': 'Location', 'Area': 'Area', 'Sub_Type': 'Sub_Type', 'Remark': 'Remark', 'SHAPE_Leng': 'SHAPE_Leng', 'PL_DIST_ID': 'PL_DIST_ID', 'SECTION_ID': 'SECTION_ID', 'SECTION_NAME': 'SECTION_NAME', 'Enabled': 'Enabled', 'GA_ID': 'GA_ID', 'GA_NAME': 'GA_NAME', 'CA_ID': 'CA_ID', 'CA_NAME': 'CA_NAME', 'PL_Length': 'PL_Length', 'Shape_Length': 'Shape_Length', });
lyr_DISTRIBUTION_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PL_DIST_ID': 'PL_DIST_ID', 'SECTION_ID': 'SECTION_ID', 'SECTION_NAME': 'SECTION_NAME', 'PL_TYPE': 'PL_TYPE', 'SURFACE_TYPE': 'SURFACE_TYPE', 'INSTALLATION_DATE': 'INSTALLATION_DATE', 'INSTALLATION_METHOD': 'INSTALLATION_METHOD', 'DRAWING_NO': 'DRAWING_NO', 'CONTRACTOR_NAME': 'CONTRACTOR_NAME', 'SOR_NO': 'SOR_NO', 'COMMISSIONING_DATE': 'COMMISSIONING_DATE', 'OWNER': 'OWNER', 'PL_STATUS': 'PL_STATUS', 'NOMINAL_DIAMETER': 'NOMINAL_DIAMETER', 'OUTERDIAMETER': 'OUTERDIAMETER', 'DIAMETERUNIT': 'DIAMETERUNIT', 'PL_DEPTH': 'PL_DEPTH', 'WALL_THICKNESS': 'WALL_THICKNESS', 'SCHEDULE': 'SCHEDULE', 'MANUFACTURER': 'MANUFACTURER', 'MANUFACTURER_DATE': 'MANUFACTURER_DATE', 'MATERIAL': 'MATERIAL', 'COATINGTYPE': 'COATINGTYPE', 'PIPESTATUSINDICATOR': 'PIPESTATUSINDICATOR', 'PL_TEST_TYPE': 'PL_TEST_TYPE', 'PL_TEST_DATE': 'PL_TEST_DATE', 'TEST_PRESSURE': 'TEST_PRESSURE', 'MAOP': 'MAOP', 'MAINTAIN_BY': 'MAINTAIN_BY', 'LAST_MAINT_DATE': 'LAST_MAINT_DATE', 'SOPENTERED': 'SOPENTERED', 'SOPRANGE': 'SOPRANGE', 'SOPSTANDARD': 'SOPSTANDARD', 'SOPUNITOFMEASURE': 'SOPUNITOFMEASURE', 'CRITICALINDICATOR': 'CRITICALINDICATOR', 'SOIL_RESISTIVITY': 'SOIL_RESISTIVITY', 'CPSYSTEMSTATUS': 'CPSYSTEMSTATUS', 'BONDEDINDICATOR': 'BONDEDINDICATOR', 'OPERATINGPRESSURE': 'OPERATINGPRESSURE', 'DESIGNPRESSUREENTERED': 'DESIGNPRESSUREENTERED', 'DESIGNPRESSURESTANDARD': 'DESIGNPRESSURESTANDARD', 'DESIGNPRESSUREUNITOFMEASURE': 'DESIGNPRESSUREUNITOFMEASURE', 'LASTLEAKSURVEY': 'LASTLEAKSURVEY', 'LEAKSURVEYFREQUENCY': 'LEAKSURVEYFREQUENCY', 'ACTUAL_LENGTH': 'ACTUAL_LENGTH', 'REMARKS': 'REMARKS', 'FLOW_STATUS': 'FLOW_STATUS', 'PL_TEST_DURATION': 'PL_TEST_DURATION', 'Drawing_Received_Date': 'Drawing_Received_Date', 'Drawing_Update_Date': 'Drawing_Update_Date', 'GCS_SOR': 'GCS_SOR', 'PRESSURE_CLASS': 'PRESSURE_CLASS', 'MOC': 'MOC', 'MOC_Date': 'MOC_Date', 'GA_ID': 'GA_ID', 'GA_NAME': 'GA_NAME', 'CA_ID': 'CA_ID', 'CA_NAME': 'CA_NAME', 'PL_Length': 'PL_Length', 'PL_Name': 'PL_Name', 'SHAPE_Length': 'SHAPE_Length', 'Pipeline_Size': 'Pipeline_Size', });
lyr_DRS_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Asset_ID': 'Asset_ID', 'Status': 'Status', 'Function_': 'Function_', 'Streams': 'Streams', 'Pressure_C': 'Pressure_C', 'Regulator_': 'Regulator_', 'Model': 'Model', 'Make': 'Make', 'Manufactur': 'Manufactur', 'Capacity': 'Capacity', 'Inlet_Pres': 'Inlet_Pres', 'Outlet_Pre': 'Outlet_Pre', 'Active_Set': 'Active_Set', 'Last_Perfo': 'Last_Perfo', 'Performanc': 'Performanc', 'Metering': 'Metering', 'Date_Of_Co': 'Date_Of_Co', 'Name_Of_St': 'Name_Of_St', 'Location': 'Location', 'Area': 'Area', 'Sub_Type': 'Sub_Type', 'Remark': 'Remark', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Enabled': 'Enabled', 'GA_ID': 'GA_ID', 'GA_NAME': 'GA_NAME', 'CA_ID': 'CA_ID', 'CA_NAME': 'CA_NAME', });
lyr_DCS_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Asset_ID': 'Asset_ID', 'Status': 'Status', 'Function_': 'Function_', 'Streams': 'Streams', 'Pressure_C': 'Pressure_C', 'Regulator_': 'Regulator_', 'Model': 'Model', 'Make': 'Make', 'Manufactur': 'Manufactur', 'Capacity': 'Capacity', 'Inlet_Pres': 'Inlet_Pres', 'Outlet_Pre': 'Outlet_Pre', 'Active_Set': 'Active_Set', 'Last_Perfo': 'Last_Perfo', 'Performanc': 'Performanc', 'Metering': 'Metering', 'Date_Of_Co': 'Date_Of_Co', 'Name_Of_St': 'Name_Of_St', 'Location': 'Location', 'PL_DB_DBO_DCS_Area': 'PL_DB_DBO_DCS_Area', 'Sub_Type': 'Sub_Type', 'Remark': 'Remark', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GA_ID': 'GA_ID', 'GA_NAME': 'GA_NAME', 'CA_ID': 'CA_ID', 'CA_NAME': 'CA_NAME', });
lyr_Industrial_Meter_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'MRS_ID': 'MRS_ID', 'BP_NO': 'BP_NO', 'MRS_Name': 'MRS_Name', 'INST_NO': 'INST_NO', 'Location': 'Location', 'Area': 'Area', 'Capacity': 'Capacity', 'Make': 'Make', 'SR_NO': 'SR_NO', 'EVC_SR_No': 'EVC_SR_No', 'PRS_REG_No': 'PRS_REG_No', 'PRSR_Upstream': 'PRSR_Upstream', 'PRS_Downstream': 'PRS_Downstream', 'Status': 'Status', 'Meter_Make': 'Meter_Make', 'EVC_Make': 'EVC_Make', 'MRS_Type': 'MRS_Type', 'Creation_Date': 'Creation_Date', 'Updation_Date': 'Updation_Date', 'Commissioning_Date': 'Commissioning_Date', 'Remarks': 'Remarks', 'Enabled': 'Enabled', 'GA_ID': 'GA_ID', 'GA_NAME': 'GA_NAME', 'CA_ID': 'CA_ID', 'CA_NAME': 'CA_NAME', });
lyr_Commercial_Meter_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CM_ID': 'CM_ID', 'BP_NO': 'BP_NO', 'CM_Name': 'CM_Name', 'INST_No': 'INST_No', 'Capacity': 'Capacity', 'Make': 'Make', 'Commission_Date': 'Commission_Date', 'Size': 'Size', 'SR_NO': 'SR_NO', 'Status': 'Status', 'Location': 'Location', 'Area': 'Area', 'Remarks': 'Remarks', 'Enabled': 'Enabled', 'GA_ID': 'GA_ID', 'GA_NAME': 'GA_NAME', 'CA_ID': 'CA_ID', 'CA_NAME': 'CA_NAME', });
lyr_Proposed_CNG_Stations_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Asset_ID': 'Asset_ID', 'Name': 'Name', 'Status': 'Status', 'CNG_Type': 'CNG_Type', 'Owner_Company': 'Owner_Company', 'Location': 'Location', 'Address': 'Address', 'Telephone': 'Telephone', 'Date_Of_Commissioning': 'Date_Of_Commissioning', 'Compression_Capacity': 'Compression_Capacity', 'Dispensing_Capacity': 'Dispensing_Capacity', 'No_Dispenser': 'No_Dispenser', 'No_LCV': 'No_LCV', 'Capacity_Utilization': 'Capacity_Utilization', 'Business_Model': 'Business_Model', 'Pin_No': 'Pin_No', 'Dealer': 'Dealer', 'Dealer_Phn': 'Dealer_Phn', 'Dealer_Email': 'Dealer_Email', 'Area': 'Area', 'Remark': 'Remark', 'Station_ID': 'Station_ID', 'GA_ID': 'GA_ID', 'GA_NAME': 'GA_NAME', 'CA_ID': 'CA_ID', 'CA_NAME': 'CA_NAME', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'RuleID': 'RuleID', 'Override': 'Override', });
lyr_CNG_Stations_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Asset_ID': 'Asset_ID', 'Name': 'Name', 'Status': 'Status', 'CNG_Type': 'CNG_Type', 'Owner_Company': 'Owner_Company', 'Location': 'Location', 'Address': 'Address', 'Telephone': 'Telephone', 'Date_Of_Commissioning': 'Date_Of_Commissioning', 'Compression_Capacity': 'Compression_Capacity', 'Dispensing_Capacity': 'Dispensing_Capacity', 'No_Dispenser': 'No_Dispenser', 'No_LCV': 'No_LCV', 'Capacity_Utilization': 'Capacity_Utilization', 'Business_Model': 'Business_Model', 'Pin_No': 'Pin_No', 'Dealer': 'Dealer', 'Dealer_Phn': 'Dealer_Phn', 'Dealer_Email': 'Dealer_Email', 'Area': 'Area', 'Remark': 'Remark', 'Station_ID': 'Station_ID', 'GA_ID': 'GA_ID', 'GA_NAME': 'GA_NAME', 'CA_ID': 'CA_ID', 'CA_NAME': 'CA_NAME', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_GA_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'GA_ID': 'TextEdit', 'GA_NAME': 'TextEdit', 'DISTRICT_NAME': 'TextEdit', 'STATE_NAME': 'TextEdit', 'GA_AREA': 'TextEdit', 'TOTAL_POPULATION': 'TextEdit', 'TOTAL_HOUSEHOLD': 'TextEdit', 'NO_OF_CA': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_CA_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'CA_ID': 'TextEdit', 'GA_ID': 'TextEdit', 'GA_NAME': 'TextEdit', 'CA_NAME': 'TextEdit', 'CA_AREA': 'TextEdit', 'REMARKS': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_MAIN_LINE_4.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'Asset_ID': 'TextEdit', 'Status': 'TextEdit', 'Pipeline_T': 'TextEdit', 'Material': 'TextEdit', 'Grade': 'TextEdit', 'Schedule': 'TextEdit', 'Thickness': 'TextEdit', 'Pipeline_S': 'TextEdit', 'Join_Metho': 'TextEdit', 'Inserted': 'TextEdit', 'Type_Of_Co': 'TextEdit', 'Pressure_C': 'TextEdit', 'Operating_': 'TextEdit', 'Test_Press': 'TextEdit', 'Test_Pre_1': 'TextEdit', 'Installed_': 'TextEdit', 'Retired_Da': 'TextEdit', 'SP_Gravity': 'TextEdit', 'Roughness': 'TextEdit', 'Nominal_Di': 'TextEdit', 'Manufactur': 'TextEdit', 'Depth': 'TextEdit', 'Actual_Len': 'TextEdit', 'Exposed': 'TextEdit', 'Pipeline_N': 'TextEdit', 'Location': 'TextEdit', 'Area': 'TextEdit', 'Sub_Type': 'TextEdit', 'Remark': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'PL_DIST_ID': 'TextEdit', 'SECTION_ID': 'TextEdit', 'SECTION_NAME': 'TextEdit', 'Enabled': 'TextEdit', 'GA_ID': 'TextEdit', 'GA_NAME': 'TextEdit', 'CA_ID': 'TextEdit', 'CA_NAME': 'TextEdit', 'PL_Length': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_DISTRIBUTION_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'PL_DIST_ID': 'TextEdit', 'SECTION_ID': 'TextEdit', 'SECTION_NAME': 'TextEdit', 'PL_TYPE': 'TextEdit', 'SURFACE_TYPE': 'TextEdit', 'INSTALLATION_DATE': 'TextEdit', 'INSTALLATION_METHOD': 'TextEdit', 'DRAWING_NO': 'TextEdit', 'CONTRACTOR_NAME': 'TextEdit', 'SOR_NO': 'TextEdit', 'COMMISSIONING_DATE': 'TextEdit', 'OWNER': 'TextEdit', 'PL_STATUS': 'TextEdit', 'NOMINAL_DIAMETER': 'TextEdit', 'OUTERDIAMETER': 'TextEdit', 'DIAMETERUNIT': 'TextEdit', 'PL_DEPTH': 'TextEdit', 'WALL_THICKNESS': 'TextEdit', 'SCHEDULE': 'TextEdit', 'MANUFACTURER': 'TextEdit', 'MANUFACTURER_DATE': 'TextEdit', 'MATERIAL': 'TextEdit', 'COATINGTYPE': 'TextEdit', 'PIPESTATUSINDICATOR': 'TextEdit', 'PL_TEST_TYPE': 'TextEdit', 'PL_TEST_DATE': 'TextEdit', 'TEST_PRESSURE': 'TextEdit', 'MAOP': 'TextEdit', 'MAINTAIN_BY': 'TextEdit', 'LAST_MAINT_DATE': 'TextEdit', 'SOPENTERED': 'TextEdit', 'SOPRANGE': 'TextEdit', 'SOPSTANDARD': 'TextEdit', 'SOPUNITOFMEASURE': 'TextEdit', 'CRITICALINDICATOR': 'TextEdit', 'SOIL_RESISTIVITY': 'TextEdit', 'CPSYSTEMSTATUS': 'TextEdit', 'BONDEDINDICATOR': 'TextEdit', 'OPERATINGPRESSURE': 'TextEdit', 'DESIGNPRESSUREENTERED': 'TextEdit', 'DESIGNPRESSURESTANDARD': 'TextEdit', 'DESIGNPRESSUREUNITOFMEASURE': 'TextEdit', 'LASTLEAKSURVEY': 'TextEdit', 'LEAKSURVEYFREQUENCY': 'TextEdit', 'ACTUAL_LENGTH': 'TextEdit', 'REMARKS': 'TextEdit', 'FLOW_STATUS': 'TextEdit', 'PL_TEST_DURATION': 'TextEdit', 'Drawing_Received_Date': 'TextEdit', 'Drawing_Update_Date': 'TextEdit', 'GCS_SOR': 'TextEdit', 'PRESSURE_CLASS': 'TextEdit', 'MOC': 'TextEdit', 'MOC_Date': 'TextEdit', 'GA_ID': 'TextEdit', 'GA_NAME': 'TextEdit', 'CA_ID': 'TextEdit', 'CA_NAME': 'TextEdit', 'PL_Length': 'TextEdit', 'PL_Name': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'Pipeline_Size': 'TextEdit', });
lyr_DRS_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'Asset_ID': 'TextEdit', 'Status': 'TextEdit', 'Function_': 'TextEdit', 'Streams': 'TextEdit', 'Pressure_C': 'TextEdit', 'Regulator_': 'TextEdit', 'Model': 'TextEdit', 'Make': 'TextEdit', 'Manufactur': 'TextEdit', 'Capacity': 'TextEdit', 'Inlet_Pres': 'TextEdit', 'Outlet_Pre': 'TextEdit', 'Active_Set': 'TextEdit', 'Last_Perfo': 'TextEdit', 'Performanc': 'TextEdit', 'Metering': 'TextEdit', 'Date_Of_Co': 'TextEdit', 'Name_Of_St': 'TextEdit', 'Location': 'TextEdit', 'Area': 'TextEdit', 'Sub_Type': 'TextEdit', 'Remark': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Enabled': 'TextEdit', 'GA_ID': 'TextEdit', 'GA_NAME': 'TextEdit', 'CA_ID': 'TextEdit', 'CA_NAME': 'TextEdit', });
lyr_DCS_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'Asset_ID': 'TextEdit', 'Status': 'TextEdit', 'Function_': 'TextEdit', 'Streams': 'TextEdit', 'Pressure_C': 'TextEdit', 'Regulator_': 'TextEdit', 'Model': 'TextEdit', 'Make': 'TextEdit', 'Manufactur': 'TextEdit', 'Capacity': 'TextEdit', 'Inlet_Pres': 'TextEdit', 'Outlet_Pre': 'TextEdit', 'Active_Set': 'TextEdit', 'Last_Perfo': 'TextEdit', 'Performanc': 'TextEdit', 'Metering': 'TextEdit', 'Date_Of_Co': 'TextEdit', 'Name_Of_St': 'TextEdit', 'Location': 'TextEdit', 'PL_DB_DBO_DCS_Area': 'TextEdit', 'Sub_Type': 'TextEdit', 'Remark': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GA_ID': 'TextEdit', 'GA_NAME': 'TextEdit', 'CA_ID': 'TextEdit', 'CA_NAME': 'TextEdit', });
lyr_Industrial_Meter_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'MRS_ID': 'TextEdit', 'BP_NO': 'TextEdit', 'MRS_Name': 'TextEdit', 'INST_NO': 'TextEdit', 'Location': 'TextEdit', 'Area': 'TextEdit', 'Capacity': 'TextEdit', 'Make': 'TextEdit', 'SR_NO': 'TextEdit', 'EVC_SR_No': 'TextEdit', 'PRS_REG_No': 'TextEdit', 'PRSR_Upstream': 'TextEdit', 'PRS_Downstream': 'TextEdit', 'Status': 'TextEdit', 'Meter_Make': 'TextEdit', 'EVC_Make': 'TextEdit', 'MRS_Type': 'TextEdit', 'Creation_Date': 'TextEdit', 'Updation_Date': 'TextEdit', 'Commissioning_Date': 'TextEdit', 'Remarks': 'TextEdit', 'Enabled': 'TextEdit', 'GA_ID': 'TextEdit', 'GA_NAME': 'TextEdit', 'CA_ID': 'TextEdit', 'CA_NAME': 'TextEdit', });
lyr_Commercial_Meter_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'CM_ID': 'TextEdit', 'BP_NO': 'TextEdit', 'CM_Name': 'TextEdit', 'INST_No': 'TextEdit', 'Capacity': 'TextEdit', 'Make': 'TextEdit', 'Commission_Date': 'TextEdit', 'Size': 'TextEdit', 'SR_NO': 'TextEdit', 'Status': 'TextEdit', 'Location': 'TextEdit', 'Area': 'TextEdit', 'Remarks': 'TextEdit', 'Enabled': 'TextEdit', 'GA_ID': 'TextEdit', 'GA_NAME': 'TextEdit', 'CA_ID': 'TextEdit', 'CA_NAME': 'TextEdit', });
lyr_Proposed_CNG_Stations_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'Asset_ID': 'TextEdit', 'Name': 'TextEdit', 'Status': 'TextEdit', 'CNG_Type': 'TextEdit', 'Owner_Company': 'TextEdit', 'Location': 'TextEdit', 'Address': 'TextEdit', 'Telephone': 'TextEdit', 'Date_Of_Commissioning': 'TextEdit', 'Compression_Capacity': 'TextEdit', 'Dispensing_Capacity': 'TextEdit', 'No_Dispenser': 'TextEdit', 'No_LCV': 'TextEdit', 'Capacity_Utilization': 'TextEdit', 'Business_Model': 'TextEdit', 'Pin_No': 'TextEdit', 'Dealer': 'TextEdit', 'Dealer_Phn': 'TextEdit', 'Dealer_Email': 'TextEdit', 'Area': 'TextEdit', 'Remark': 'TextEdit', 'Station_ID': 'TextEdit', 'GA_ID': 'TextEdit', 'GA_NAME': 'TextEdit', 'CA_ID': 'TextEdit', 'CA_NAME': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'RuleID': 'TextEdit', 'Override': 'TextEdit', });
lyr_CNG_Stations_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'Asset_ID': 'TextEdit', 'Name': 'TextEdit', 'Status': 'TextEdit', 'CNG_Type': 'TextEdit', 'Owner_Company': 'TextEdit', 'Location': 'TextEdit', 'Address': 'TextEdit', 'Telephone': 'TextEdit', 'Date_Of_Commissioning': 'TextEdit', 'Compression_Capacity': 'TextEdit', 'Dispensing_Capacity': 'TextEdit', 'No_Dispenser': 'TextEdit', 'No_LCV': 'TextEdit', 'Capacity_Utilization': 'TextEdit', 'Business_Model': 'TextEdit', 'Pin_No': 'TextEdit', 'Dealer': 'TextEdit', 'Dealer_Phn': 'TextEdit', 'Dealer_Email': 'TextEdit', 'Area': 'TextEdit', 'Remark': 'TextEdit', 'Station_ID': 'TextEdit', 'GA_ID': 'TextEdit', 'GA_NAME': 'TextEdit', 'CA_ID': 'TextEdit', 'CA_NAME': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_GA_2.set('fieldLabels', {'OBJECTID': 'no label', 'GA_ID': 'no label', 'GA_NAME': 'no label', 'DISTRICT_NAME': 'no label', 'STATE_NAME': 'no label', 'GA_AREA': 'no label', 'TOTAL_POPULATION': 'no label', 'TOTAL_HOUSEHOLD': 'no label', 'NO_OF_CA': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_CA_3.set('fieldLabels', {'OBJECTID': 'no label', 'CA_ID': 'no label', 'GA_ID': 'no label', 'GA_NAME': 'no label', 'CA_NAME': 'no label', 'CA_AREA': 'no label', 'REMARKS': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_MAIN_LINE_4.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'Asset_ID': 'no label', 'Status': 'no label', 'Pipeline_T': 'no label', 'Material': 'no label', 'Grade': 'no label', 'Schedule': 'no label', 'Thickness': 'no label', 'Pipeline_S': 'no label', 'Join_Metho': 'no label', 'Inserted': 'no label', 'Type_Of_Co': 'no label', 'Pressure_C': 'no label', 'Operating_': 'no label', 'Test_Press': 'no label', 'Test_Pre_1': 'no label', 'Installed_': 'no label', 'Retired_Da': 'no label', 'SP_Gravity': 'no label', 'Roughness': 'no label', 'Nominal_Di': 'no label', 'Manufactur': 'no label', 'Depth': 'no label', 'Actual_Len': 'no label', 'Exposed': 'no label', 'Pipeline_N': 'no label', 'Location': 'no label', 'Area': 'no label', 'Sub_Type': 'no label', 'Remark': 'no label', 'SHAPE_Leng': 'no label', 'PL_DIST_ID': 'no label', 'SECTION_ID': 'no label', 'SECTION_NAME': 'no label', 'Enabled': 'no label', 'GA_ID': 'no label', 'GA_NAME': 'no label', 'CA_ID': 'no label', 'CA_NAME': 'no label', 'PL_Length': 'no label', 'Shape_Length': 'no label', });
lyr_DISTRIBUTION_5.set('fieldLabels', {'OBJECTID': 'no label', 'PL_DIST_ID': 'no label', 'SECTION_ID': 'no label', 'SECTION_NAME': 'no label', 'PL_TYPE': 'no label', 'SURFACE_TYPE': 'no label', 'INSTALLATION_DATE': 'no label', 'INSTALLATION_METHOD': 'no label', 'DRAWING_NO': 'no label', 'CONTRACTOR_NAME': 'no label', 'SOR_NO': 'no label', 'COMMISSIONING_DATE': 'no label', 'OWNER': 'no label', 'PL_STATUS': 'no label', 'NOMINAL_DIAMETER': 'no label', 'OUTERDIAMETER': 'no label', 'DIAMETERUNIT': 'no label', 'PL_DEPTH': 'no label', 'WALL_THICKNESS': 'no label', 'SCHEDULE': 'no label', 'MANUFACTURER': 'no label', 'MANUFACTURER_DATE': 'no label', 'MATERIAL': 'no label', 'COATINGTYPE': 'no label', 'PIPESTATUSINDICATOR': 'no label', 'PL_TEST_TYPE': 'no label', 'PL_TEST_DATE': 'no label', 'TEST_PRESSURE': 'no label', 'MAOP': 'no label', 'MAINTAIN_BY': 'no label', 'LAST_MAINT_DATE': 'no label', 'SOPENTERED': 'no label', 'SOPRANGE': 'no label', 'SOPSTANDARD': 'no label', 'SOPUNITOFMEASURE': 'no label', 'CRITICALINDICATOR': 'no label', 'SOIL_RESISTIVITY': 'no label', 'CPSYSTEMSTATUS': 'no label', 'BONDEDINDICATOR': 'no label', 'OPERATINGPRESSURE': 'no label', 'DESIGNPRESSUREENTERED': 'no label', 'DESIGNPRESSURESTANDARD': 'no label', 'DESIGNPRESSUREUNITOFMEASURE': 'no label', 'LASTLEAKSURVEY': 'no label', 'LEAKSURVEYFREQUENCY': 'no label', 'ACTUAL_LENGTH': 'no label', 'REMARKS': 'no label', 'FLOW_STATUS': 'no label', 'PL_TEST_DURATION': 'no label', 'Drawing_Received_Date': 'no label', 'Drawing_Update_Date': 'no label', 'GCS_SOR': 'no label', 'PRESSURE_CLASS': 'no label', 'MOC': 'no label', 'MOC_Date': 'no label', 'GA_ID': 'no label', 'GA_NAME': 'no label', 'CA_ID': 'no label', 'CA_NAME': 'no label', 'PL_Length': 'no label', 'PL_Name': 'no label', 'SHAPE_Length': 'no label', 'Pipeline_Size': 'no label', });
lyr_DRS_6.set('fieldLabels', {'OBJECTID': 'no label', 'Asset_ID': 'no label', 'Status': 'no label', 'Function_': 'no label', 'Streams': 'no label', 'Pressure_C': 'no label', 'Regulator_': 'no label', 'Model': 'no label', 'Make': 'no label', 'Manufactur': 'no label', 'Capacity': 'no label', 'Inlet_Pres': 'no label', 'Outlet_Pre': 'no label', 'Active_Set': 'no label', 'Last_Perfo': 'no label', 'Performanc': 'no label', 'Metering': 'no label', 'Date_Of_Co': 'no label', 'Name_Of_St': 'no label', 'Location': 'no label', 'Area': 'no label', 'Sub_Type': 'no label', 'Remark': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Enabled': 'no label', 'GA_ID': 'no label', 'GA_NAME': 'no label', 'CA_ID': 'no label', 'CA_NAME': 'no label', });
lyr_DCS_7.set('fieldLabels', {'OBJECTID': 'no label', 'Asset_ID': 'no label', 'Status': 'no label', 'Function_': 'no label', 'Streams': 'no label', 'Pressure_C': 'no label', 'Regulator_': 'no label', 'Model': 'no label', 'Make': 'no label', 'Manufactur': 'no label', 'Capacity': 'no label', 'Inlet_Pres': 'no label', 'Outlet_Pre': 'no label', 'Active_Set': 'no label', 'Last_Perfo': 'no label', 'Performanc': 'no label', 'Metering': 'no label', 'Date_Of_Co': 'no label', 'Name_Of_St': 'no label', 'Location': 'no label', 'PL_DB_DBO_DCS_Area': 'no label', 'Sub_Type': 'no label', 'Remark': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'GA_ID': 'no label', 'GA_NAME': 'no label', 'CA_ID': 'no label', 'CA_NAME': 'no label', });
lyr_Industrial_Meter_8.set('fieldLabels', {'OBJECTID': 'no label', 'MRS_ID': 'no label', 'BP_NO': 'no label', 'MRS_Name': 'no label', 'INST_NO': 'no label', 'Location': 'no label', 'Area': 'no label', 'Capacity': 'no label', 'Make': 'no label', 'SR_NO': 'no label', 'EVC_SR_No': 'no label', 'PRS_REG_No': 'no label', 'PRSR_Upstream': 'no label', 'PRS_Downstream': 'no label', 'Status': 'no label', 'Meter_Make': 'no label', 'EVC_Make': 'no label', 'MRS_Type': 'no label', 'Creation_Date': 'no label', 'Updation_Date': 'no label', 'Commissioning_Date': 'no label', 'Remarks': 'no label', 'Enabled': 'no label', 'GA_ID': 'no label', 'GA_NAME': 'no label', 'CA_ID': 'no label', 'CA_NAME': 'no label', });
lyr_Commercial_Meter_9.set('fieldLabels', {'OBJECTID': 'no label', 'CM_ID': 'no label', 'BP_NO': 'no label', 'CM_Name': 'no label', 'INST_No': 'no label', 'Capacity': 'no label', 'Make': 'no label', 'Commission_Date': 'no label', 'Size': 'no label', 'SR_NO': 'no label', 'Status': 'no label', 'Location': 'no label', 'Area': 'no label', 'Remarks': 'no label', 'Enabled': 'no label', 'GA_ID': 'no label', 'GA_NAME': 'no label', 'CA_ID': 'no label', 'CA_NAME': 'no label', });
lyr_Proposed_CNG_Stations_10.set('fieldLabels', {'OBJECTID': 'no label', 'Asset_ID': 'no label', 'Name': 'no label', 'Status': 'no label', 'CNG_Type': 'no label', 'Owner_Company': 'no label', 'Location': 'no label', 'Address': 'no label', 'Telephone': 'no label', 'Date_Of_Commissioning': 'no label', 'Compression_Capacity': 'no label', 'Dispensing_Capacity': 'no label', 'No_Dispenser': 'no label', 'No_LCV': 'no label', 'Capacity_Utilization': 'no label', 'Business_Model': 'no label', 'Pin_No': 'no label', 'Dealer': 'no label', 'Dealer_Phn': 'no label', 'Dealer_Email': 'no label', 'Area': 'no label', 'Remark': 'no label', 'Station_ID': 'no label', 'GA_ID': 'no label', 'GA_NAME': 'no label', 'CA_ID': 'no label', 'CA_NAME': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'RuleID': 'no label', 'Override': 'no label', });
lyr_CNG_Stations_11.set('fieldLabels', {'OBJECTID': 'no label', 'Asset_ID': 'no label', 'Name': 'no label', 'Status': 'no label', 'CNG_Type': 'no label', 'Owner_Company': 'no label', 'Location': 'no label', 'Address': 'no label', 'Telephone': 'no label', 'Date_Of_Commissioning': 'no label', 'Compression_Capacity': 'no label', 'Dispensing_Capacity': 'no label', 'No_Dispenser': 'no label', 'No_LCV': 'no label', 'Capacity_Utilization': 'no label', 'Business_Model': 'no label', 'Pin_No': 'no label', 'Dealer': 'no label', 'Dealer_Phn': 'no label', 'Dealer_Email': 'no label', 'Area': 'no label', 'Remark': 'no label', 'Station_ID': 'no label', 'GA_ID': 'no label', 'GA_NAME': 'no label', 'CA_ID': 'no label', 'CA_NAME': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_CNG_Stations_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});