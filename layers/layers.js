var wms_layers = [];


        var lyr_Voyagernolabelsretina_0 = new ol.layer.Tile({
            'title': 'Voyager [no labels] (retina)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_Mapadelmundo_1 = new ol.format.GeoJSON();
var features_Mapadelmundo_1 = format_Mapadelmundo_1.readFeatures(json_Mapadelmundo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mapadelmundo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mapadelmundo_1.addFeatures(features_Mapadelmundo_1);
var lyr_Mapadelmundo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mapadelmundo_1, 
                style: style_Mapadelmundo_1,
                popuplayertitle: "Mapa del mundo",
                interactive: false,
                title: '<img src="styles/legend/Mapadelmundo_1.png" /> Mapa del mundo'
            });
var format_Turqua_2 = new ol.format.GeoJSON();
var features_Turqua_2 = format_Turqua_2.readFeatures(json_Turqua_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Turqua_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Turqua_2.addFeatures(features_Turqua_2);
var lyr_Turqua_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Turqua_2, 
                style: style_Turqua_2,
                popuplayertitle: "Turquía",
                interactive: true,
                title: '<img src="styles/legend/Turqua_2.png" /> Turquía'
            });
var format_Tnez_3 = new ol.format.GeoJSON();
var features_Tnez_3 = format_Tnez_3.readFeatures(json_Tnez_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tnez_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tnez_3.addFeatures(features_Tnez_3);
var lyr_Tnez_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tnez_3, 
                style: style_Tnez_3,
                popuplayertitle: "Túnez",
                interactive: true,
                title: '<img src="styles/legend/Tnez_3.png" /> Túnez'
            });
var format_Siria_4 = new ol.format.GeoJSON();
var features_Siria_4 = format_Siria_4.readFeatures(json_Siria_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Siria_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Siria_4.addFeatures(features_Siria_4);
var lyr_Siria_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Siria_4, 
                style: style_Siria_4,
                popuplayertitle: "Siria",
                interactive: true,
                title: '<img src="styles/legend/Siria_4.png" /> Siria'
            });
var format_Portugal_5 = new ol.format.GeoJSON();
var features_Portugal_5 = format_Portugal_5.readFeatures(json_Portugal_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Portugal_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Portugal_5.addFeatures(features_Portugal_5);
var lyr_Portugal_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Portugal_5, 
                style: style_Portugal_5,
                popuplayertitle: "Portugal",
                interactive: true,
                title: '<img src="styles/legend/Portugal_5.png" /> Portugal'
            });
var format_Montenegro_6 = new ol.format.GeoJSON();
var features_Montenegro_6 = format_Montenegro_6.readFeatures(json_Montenegro_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Montenegro_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Montenegro_6.addFeatures(features_Montenegro_6);
var lyr_Montenegro_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Montenegro_6, 
                style: style_Montenegro_6,
                popuplayertitle: "Montenegro",
                interactive: true,
                title: '<img src="styles/legend/Montenegro_6.png" /> Montenegro'
            });
var format_Marruecos_7 = new ol.format.GeoJSON();
var features_Marruecos_7 = format_Marruecos_7.readFeatures(json_Marruecos_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Marruecos_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Marruecos_7.addFeatures(features_Marruecos_7);
var lyr_Marruecos_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Marruecos_7, 
                style: style_Marruecos_7,
                popuplayertitle: "Marruecos",
                interactive: true,
                title: '<img src="styles/legend/Marruecos_7.png" /> Marruecos'
            });
var format_Malta_8 = new ol.format.GeoJSON();
var features_Malta_8 = format_Malta_8.readFeatures(json_Malta_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Malta_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Malta_8.addFeatures(features_Malta_8);
var lyr_Malta_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Malta_8, 
                style: style_Malta_8,
                popuplayertitle: "Malta",
                interactive: true,
                title: '<img src="styles/legend/Malta_8.png" /> Malta'
            });
var format_Libia_9 = new ol.format.GeoJSON();
var features_Libia_9 = format_Libia_9.readFeatures(json_Libia_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Libia_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Libia_9.addFeatures(features_Libia_9);
var lyr_Libia_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Libia_9, 
                style: style_Libia_9,
                popuplayertitle: "Libia",
                interactive: true,
                title: '<img src="styles/legend/Libia_9.png" /> Libia'
            });
var format_Lbano_10 = new ol.format.GeoJSON();
var features_Lbano_10 = format_Lbano_10.readFeatures(json_Lbano_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lbano_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lbano_10.addFeatures(features_Lbano_10);
var lyr_Lbano_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lbano_10, 
                style: style_Lbano_10,
                popuplayertitle: "Líbano",
                interactive: true,
                title: '<img src="styles/legend/Lbano_10.png" /> Líbano'
            });
var format_Italia_11 = new ol.format.GeoJSON();
var features_Italia_11 = format_Italia_11.readFeatures(json_Italia_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Italia_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Italia_11.addFeatures(features_Italia_11);
var lyr_Italia_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Italia_11, 
                style: style_Italia_11,
                popuplayertitle: "Italia",
                interactive: true,
                title: '<img src="styles/legend/Italia_11.png" /> Italia'
            });
var format_Israel_12 = new ol.format.GeoJSON();
var features_Israel_12 = format_Israel_12.readFeatures(json_Israel_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Israel_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Israel_12.addFeatures(features_Israel_12);
var lyr_Israel_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Israel_12, 
                style: style_Israel_12,
                popuplayertitle: "Israel",
                interactive: true,
                title: '<img src="styles/legend/Israel_12.png" /> Israel'
            });
var format_Grecia_13 = new ol.format.GeoJSON();
var features_Grecia_13 = format_Grecia_13.readFeatures(json_Grecia_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Grecia_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grecia_13.addFeatures(features_Grecia_13);
var lyr_Grecia_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Grecia_13, 
                style: style_Grecia_13,
                popuplayertitle: "Grecia",
                interactive: true,
                title: '<img src="styles/legend/Grecia_13.png" /> Grecia'
            });
var format_Francia_14 = new ol.format.GeoJSON();
var features_Francia_14 = format_Francia_14.readFeatures(json_Francia_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Francia_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Francia_14.addFeatures(features_Francia_14);
var lyr_Francia_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Francia_14, 
                style: style_Francia_14,
                popuplayertitle: "Francia",
                interactive: true,
                title: '<img src="styles/legend/Francia_14.png" /> Francia'
            });
var format_Espaa_15 = new ol.format.GeoJSON();
var features_Espaa_15 = format_Espaa_15.readFeatures(json_Espaa_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Espaa_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Espaa_15.addFeatures(features_Espaa_15);
var lyr_Espaa_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Espaa_15, 
                style: style_Espaa_15,
                popuplayertitle: "España",
                interactive: true,
                title: '<img src="styles/legend/Espaa_15.png" /> España'
            });
var format_Egipto_16 = new ol.format.GeoJSON();
var features_Egipto_16 = format_Egipto_16.readFeatures(json_Egipto_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Egipto_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Egipto_16.addFeatures(features_Egipto_16);
var lyr_Egipto_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Egipto_16, 
                style: style_Egipto_16,
                popuplayertitle: "Egipto",
                interactive: true,
                title: '<img src="styles/legend/Egipto_16.png" /> Egipto'
            });
var format_Croacia_17 = new ol.format.GeoJSON();
var features_Croacia_17 = format_Croacia_17.readFeatures(json_Croacia_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Croacia_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Croacia_17.addFeatures(features_Croacia_17);
var lyr_Croacia_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Croacia_17, 
                style: style_Croacia_17,
                popuplayertitle: "Croacia",
                interactive: true,
                title: '<img src="styles/legend/Croacia_17.png" /> Croacia'
            });
var format_Chipre_18 = new ol.format.GeoJSON();
var features_Chipre_18 = format_Chipre_18.readFeatures(json_Chipre_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chipre_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chipre_18.addFeatures(features_Chipre_18);
var lyr_Chipre_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Chipre_18, 
                style: style_Chipre_18,
                popuplayertitle: "Chipre",
                interactive: true,
                title: '<img src="styles/legend/Chipre_18.png" /> Chipre'
            });
var format_Argelia_19 = new ol.format.GeoJSON();
var features_Argelia_19 = format_Argelia_19.readFeatures(json_Argelia_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Argelia_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Argelia_19.addFeatures(features_Argelia_19);
var lyr_Argelia_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Argelia_19, 
                style: style_Argelia_19,
                popuplayertitle: "Argelia",
                interactive: true,
                title: '<img src="styles/legend/Argelia_19.png" /> Argelia'
            });
var format_Albania_20 = new ol.format.GeoJSON();
var features_Albania_20 = format_Albania_20.readFeatures(json_Albania_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Albania_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Albania_20.addFeatures(features_Albania_20);
var lyr_Albania_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Albania_20, 
                style: style_Albania_20,
                popuplayertitle: "Albania",
                interactive: true,
                title: '<img src="styles/legend/Albania_20.png" /> Albania'
            });
var format_2024WA_21 = new ol.format.GeoJSON();
var features_2024WA_21 = format_2024WA_21.readFeatures(json_2024WA_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2024WA_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2024WA_21.addFeatures(features_2024WA_21);
var lyr_2024WA_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2024WA_21, 
                style: style_2024WA_21,
                popuplayertitle: "2024 WA",
                interactive: true,
                title: '<img src="styles/legend/2024WA_21.png" /> 2024 WA'
            });
var format_2023WA_22 = new ol.format.GeoJSON();
var features_2023WA_22 = format_2023WA_22.readFeatures(json_2023WA_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2023WA_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2023WA_22.addFeatures(features_2023WA_22);
var lyr_2023WA_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2023WA_22, 
                style: style_2023WA_22,
                popuplayertitle: "2023 WA",
                interactive: true,
                title: '<img src="styles/legend/2023WA_22.png" /> 2023 WA'
            });
var format_2022WA_23 = new ol.format.GeoJSON();
var features_2022WA_23 = format_2022WA_23.readFeatures(json_2022WA_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2022WA_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2022WA_23.addFeatures(features_2022WA_23);
var lyr_2022WA_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2022WA_23, 
                style: style_2022WA_23,
                popuplayertitle: "2022 WA",
                interactive: true,
                title: '<img src="styles/legend/2022WA_23.png" /> 2022 WA'
            });
var format_2021WA_24 = new ol.format.GeoJSON();
var features_2021WA_24 = format_2021WA_24.readFeatures(json_2021WA_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2021WA_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2021WA_24.addFeatures(features_2021WA_24);
var lyr_2021WA_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2021WA_24, 
                style: style_2021WA_24,
                popuplayertitle: "2021 WA",
                interactive: true,
                title: '<img src="styles/legend/2021WA_24.png" /> 2021 WA'
            });
var format_2020WA_25 = new ol.format.GeoJSON();
var features_2020WA_25 = format_2020WA_25.readFeatures(json_2020WA_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2020WA_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2020WA_25.addFeatures(features_2020WA_25);
var lyr_2020WA_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2020WA_25, 
                style: style_2020WA_25,
                popuplayertitle: "2020 WA",
                interactive: true,
                title: '<img src="styles/legend/2020WA_25.png" /> 2020 WA'
            });
var format_2019WA_26 = new ol.format.GeoJSON();
var features_2019WA_26 = format_2019WA_26.readFeatures(json_2019WA_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2019WA_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2019WA_26.addFeatures(features_2019WA_26);
var lyr_2019WA_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2019WA_26, 
                style: style_2019WA_26,
                popuplayertitle: "2019 WA",
                interactive: true,
                title: '<img src="styles/legend/2019WA_26.png" /> 2019 WA'
            });
var format_2018WA_27 = new ol.format.GeoJSON();
var features_2018WA_27 = format_2018WA_27.readFeatures(json_2018WA_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2018WA_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2018WA_27.addFeatures(features_2018WA_27);
var lyr_2018WA_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2018WA_27, 
                style: style_2018WA_27,
                popuplayertitle: "2018 WA",
                interactive: true,
                title: '<img src="styles/legend/2018WA_27.png" /> 2018 WA'
            });
var format_2017WA_28 = new ol.format.GeoJSON();
var features_2017WA_28 = format_2017WA_28.readFeatures(json_2017WA_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2017WA_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2017WA_28.addFeatures(features_2017WA_28);
var lyr_2017WA_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2017WA_28, 
                style: style_2017WA_28,
                popuplayertitle: "2017 WA",
                interactive: true,
                title: '<img src="styles/legend/2017WA_28.png" /> 2017 WA'
            });
var format_2016WA_29 = new ol.format.GeoJSON();
var features_2016WA_29 = format_2016WA_29.readFeatures(json_2016WA_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2016WA_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2016WA_29.addFeatures(features_2016WA_29);
var lyr_2016WA_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2016WA_29, 
                style: style_2016WA_29,
                popuplayertitle: "2016 WA",
                interactive: true,
                title: '<img src="styles/legend/2016WA_29.png" /> 2016 WA'
            });
var format_2015WA_30 = new ol.format.GeoJSON();
var features_2015WA_30 = format_2015WA_30.readFeatures(json_2015WA_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2015WA_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2015WA_30.addFeatures(features_2015WA_30);
var lyr_2015WA_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2015WA_30, 
                style: style_2015WA_30,
                popuplayertitle: "2015 WA",
                interactive: true,
                title: '<img src="styles/legend/2015WA_30.png" /> 2015 WA'
            });
var format_2014WA_31 = new ol.format.GeoJSON();
var features_2014WA_31 = format_2014WA_31.readFeatures(json_2014WA_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2014WA_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2014WA_31.addFeatures(features_2014WA_31);
var lyr_2014WA_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2014WA_31, 
                style: style_2014WA_31,
                popuplayertitle: "2014 WA",
                interactive: true,
                title: '<img src="styles/legend/2014WA_31.png" /> 2014 WA'
            });
var format_2024EM_32 = new ol.format.GeoJSON();
var features_2024EM_32 = format_2024EM_32.readFeatures(json_2024EM_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2024EM_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2024EM_32.addFeatures(features_2024EM_32);
var lyr_2024EM_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2024EM_32, 
                style: style_2024EM_32,
                popuplayertitle: "2024 EM",
                interactive: true,
                title: '<img src="styles/legend/2024EM_32.png" /> 2024 EM'
            });
var format_2023EM_33 = new ol.format.GeoJSON();
var features_2023EM_33 = format_2023EM_33.readFeatures(json_2023EM_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2023EM_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2023EM_33.addFeatures(features_2023EM_33);
var lyr_2023EM_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2023EM_33, 
                style: style_2023EM_33,
                popuplayertitle: "2023 EM",
                interactive: true,
                title: '<img src="styles/legend/2023EM_33.png" /> 2023 EM'
            });
var format_2022EM_34 = new ol.format.GeoJSON();
var features_2022EM_34 = format_2022EM_34.readFeatures(json_2022EM_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2022EM_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2022EM_34.addFeatures(features_2022EM_34);
var lyr_2022EM_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2022EM_34, 
                style: style_2022EM_34,
                popuplayertitle: "2022 EM",
                interactive: true,
                title: '<img src="styles/legend/2022EM_34.png" /> 2022 EM'
            });
var format_2021EM_35 = new ol.format.GeoJSON();
var features_2021EM_35 = format_2021EM_35.readFeatures(json_2021EM_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2021EM_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2021EM_35.addFeatures(features_2021EM_35);
var lyr_2021EM_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2021EM_35, 
                style: style_2021EM_35,
                popuplayertitle: "2021 EM",
                interactive: true,
                title: '<img src="styles/legend/2021EM_35.png" /> 2021 EM'
            });
var format_2020EM_36 = new ol.format.GeoJSON();
var features_2020EM_36 = format_2020EM_36.readFeatures(json_2020EM_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2020EM_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2020EM_36.addFeatures(features_2020EM_36);
var lyr_2020EM_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2020EM_36, 
                style: style_2020EM_36,
                popuplayertitle: "2020 EM",
                interactive: true,
                title: '<img src="styles/legend/2020EM_36.png" /> 2020 EM'
            });
var format_2019EM_37 = new ol.format.GeoJSON();
var features_2019EM_37 = format_2019EM_37.readFeatures(json_2019EM_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2019EM_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2019EM_37.addFeatures(features_2019EM_37);
var lyr_2019EM_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2019EM_37, 
                style: style_2019EM_37,
                popuplayertitle: "2019 EM",
                interactive: true,
                title: '<img src="styles/legend/2019EM_37.png" /> 2019 EM'
            });
var format_2018EM_38 = new ol.format.GeoJSON();
var features_2018EM_38 = format_2018EM_38.readFeatures(json_2018EM_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2018EM_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2018EM_38.addFeatures(features_2018EM_38);
var lyr_2018EM_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2018EM_38, 
                style: style_2018EM_38,
                popuplayertitle: "2018 EM",
                interactive: true,
                title: '<img src="styles/legend/2018EM_38.png" /> 2018 EM'
            });
var format_2017EM_39 = new ol.format.GeoJSON();
var features_2017EM_39 = format_2017EM_39.readFeatures(json_2017EM_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2017EM_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2017EM_39.addFeatures(features_2017EM_39);
var lyr_2017EM_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2017EM_39, 
                style: style_2017EM_39,
                popuplayertitle: "2017 EM",
                interactive: true,
                title: '<img src="styles/legend/2017EM_39.png" /> 2017 EM'
            });
var format_2016EM_40 = new ol.format.GeoJSON();
var features_2016EM_40 = format_2016EM_40.readFeatures(json_2016EM_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2016EM_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2016EM_40.addFeatures(features_2016EM_40);
var lyr_2016EM_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2016EM_40, 
                style: style_2016EM_40,
                popuplayertitle: "2016 EM",
                interactive: true,
                title: '<img src="styles/legend/2016EM_40.png" /> 2016 EM'
            });
var format_2015EM_41 = new ol.format.GeoJSON();
var features_2015EM_41 = format_2015EM_41.readFeatures(json_2015EM_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2015EM_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2015EM_41.addFeatures(features_2015EM_41);
var lyr_2015EM_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2015EM_41, 
                style: style_2015EM_41,
                popuplayertitle: "2015 EM",
                interactive: true,
                title: '<img src="styles/legend/2015EM_41.png" /> 2015 EM'
            });
var format_2014EM_42 = new ol.format.GeoJSON();
var features_2014EM_42 = format_2014EM_42.readFeatures(json_2014EM_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2014EM_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2014EM_42.addFeatures(features_2014EM_42);
var lyr_2014EM_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2014EM_42, 
                style: style_2014EM_42,
                popuplayertitle: "2014 EM",
                interactive: true,
                title: '<img src="styles/legend/2014EM_42.png" /> 2014 EM'
            });
var format_2024WM_43 = new ol.format.GeoJSON();
var features_2024WM_43 = format_2024WM_43.readFeatures(json_2024WM_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2024WM_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2024WM_43.addFeatures(features_2024WM_43);
var lyr_2024WM_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2024WM_43, 
                style: style_2024WM_43,
                popuplayertitle: "2024 WM",
                interactive: true,
                title: '<img src="styles/legend/2024WM_43.png" /> 2024 WM'
            });
var format_2023WM_44 = new ol.format.GeoJSON();
var features_2023WM_44 = format_2023WM_44.readFeatures(json_2023WM_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2023WM_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2023WM_44.addFeatures(features_2023WM_44);
var lyr_2023WM_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2023WM_44, 
                style: style_2023WM_44,
                popuplayertitle: "2023 WM",
                interactive: true,
                title: '<img src="styles/legend/2023WM_44.png" /> 2023 WM'
            });
var format_2022WM_45 = new ol.format.GeoJSON();
var features_2022WM_45 = format_2022WM_45.readFeatures(json_2022WM_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2022WM_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2022WM_45.addFeatures(features_2022WM_45);
var lyr_2022WM_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2022WM_45, 
                style: style_2022WM_45,
                popuplayertitle: "2022 WM",
                interactive: true,
                title: '<img src="styles/legend/2022WM_45.png" /> 2022 WM'
            });
var format_2021WM_46 = new ol.format.GeoJSON();
var features_2021WM_46 = format_2021WM_46.readFeatures(json_2021WM_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2021WM_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2021WM_46.addFeatures(features_2021WM_46);
var lyr_2021WM_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2021WM_46, 
                style: style_2021WM_46,
                popuplayertitle: "2021 WM",
                interactive: true,
                title: '<img src="styles/legend/2021WM_46.png" /> 2021 WM'
            });
var format_2020WM_47 = new ol.format.GeoJSON();
var features_2020WM_47 = format_2020WM_47.readFeatures(json_2020WM_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2020WM_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2020WM_47.addFeatures(features_2020WM_47);
var lyr_2020WM_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2020WM_47, 
                style: style_2020WM_47,
                popuplayertitle: "2020 WM",
                interactive: true,
                title: '<img src="styles/legend/2020WM_47.png" /> 2020 WM'
            });
var format_2019WM_48 = new ol.format.GeoJSON();
var features_2019WM_48 = format_2019WM_48.readFeatures(json_2019WM_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2019WM_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2019WM_48.addFeatures(features_2019WM_48);
var lyr_2019WM_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2019WM_48, 
                style: style_2019WM_48,
                popuplayertitle: "2019 WM",
                interactive: true,
                title: '<img src="styles/legend/2019WM_48.png" /> 2019 WM'
            });
var format_2018WM_49 = new ol.format.GeoJSON();
var features_2018WM_49 = format_2018WM_49.readFeatures(json_2018WM_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2018WM_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2018WM_49.addFeatures(features_2018WM_49);
var lyr_2018WM_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2018WM_49, 
                style: style_2018WM_49,
                popuplayertitle: "2018 WM",
                interactive: true,
                title: '<img src="styles/legend/2018WM_49.png" /> 2018 WM'
            });
var format_2017WM_50 = new ol.format.GeoJSON();
var features_2017WM_50 = format_2017WM_50.readFeatures(json_2017WM_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2017WM_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2017WM_50.addFeatures(features_2017WM_50);
var lyr_2017WM_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2017WM_50, 
                style: style_2017WM_50,
                popuplayertitle: "2017 WM",
                interactive: true,
                title: '<img src="styles/legend/2017WM_50.png" /> 2017 WM'
            });
var format_2016WM_51 = new ol.format.GeoJSON();
var features_2016WM_51 = format_2016WM_51.readFeatures(json_2016WM_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2016WM_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2016WM_51.addFeatures(features_2016WM_51);
var lyr_2016WM_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2016WM_51, 
                style: style_2016WM_51,
                popuplayertitle: "2016 WM",
                interactive: true,
                title: '<img src="styles/legend/2016WM_51.png" /> 2016 WM'
            });
var format_2015WM_52 = new ol.format.GeoJSON();
var features_2015WM_52 = format_2015WM_52.readFeatures(json_2015WM_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2015WM_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2015WM_52.addFeatures(features_2015WM_52);
var lyr_2015WM_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2015WM_52, 
                style: style_2015WM_52,
                popuplayertitle: "2015 WM",
                interactive: true,
                title: '<img src="styles/legend/2015WM_52.png" /> 2015 WM'
            });
var format_2014WM_53 = new ol.format.GeoJSON();
var features_2014WM_53 = format_2014WM_53.readFeatures(json_2014WM_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2014WM_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2014WM_53.addFeatures(features_2014WM_53);
var lyr_2014WM_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2014WM_53, 
                style: style_2014WM_53,
                popuplayertitle: "2014 WM",
                interactive: true,
                title: '<img src="styles/legend/2014WM_53.png" /> 2014 WM'
            });
var format_2024CM_54 = new ol.format.GeoJSON();
var features_2024CM_54 = format_2024CM_54.readFeatures(json_2024CM_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2024CM_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2024CM_54.addFeatures(features_2024CM_54);
var lyr_2024CM_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2024CM_54, 
                style: style_2024CM_54,
                popuplayertitle: "2024 CM",
                interactive: true,
                title: '<img src="styles/legend/2024CM_54.png" /> 2024 CM'
            });
var format_2023CM_55 = new ol.format.GeoJSON();
var features_2023CM_55 = format_2023CM_55.readFeatures(json_2023CM_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2023CM_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2023CM_55.addFeatures(features_2023CM_55);
var lyr_2023CM_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2023CM_55, 
                style: style_2023CM_55,
                popuplayertitle: "2023 CM",
                interactive: true,
                title: '<img src="styles/legend/2023CM_55.png" /> 2023 CM'
            });
var format_2022CM_56 = new ol.format.GeoJSON();
var features_2022CM_56 = format_2022CM_56.readFeatures(json_2022CM_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2022CM_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2022CM_56.addFeatures(features_2022CM_56);
var lyr_2022CM_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2022CM_56, 
                style: style_2022CM_56,
                popuplayertitle: "2022 CM",
                interactive: true,
                title: '<img src="styles/legend/2022CM_56.png" /> 2022 CM'
            });
var format_2021CM_57 = new ol.format.GeoJSON();
var features_2021CM_57 = format_2021CM_57.readFeatures(json_2021CM_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2021CM_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2021CM_57.addFeatures(features_2021CM_57);
var lyr_2021CM_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2021CM_57, 
                style: style_2021CM_57,
                popuplayertitle: "2021 CM",
                interactive: true,
                title: '<img src="styles/legend/2021CM_57.png" /> 2021 CM'
            });
var format_2020CM_58 = new ol.format.GeoJSON();
var features_2020CM_58 = format_2020CM_58.readFeatures(json_2020CM_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2020CM_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2020CM_58.addFeatures(features_2020CM_58);
var lyr_2020CM_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2020CM_58, 
                style: style_2020CM_58,
                popuplayertitle: "2020 CM",
                interactive: true,
                title: '<img src="styles/legend/2020CM_58.png" /> 2020 CM'
            });
var format_2019CM_59 = new ol.format.GeoJSON();
var features_2019CM_59 = format_2019CM_59.readFeatures(json_2019CM_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2019CM_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2019CM_59.addFeatures(features_2019CM_59);
var lyr_2019CM_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2019CM_59, 
                style: style_2019CM_59,
                popuplayertitle: "2019 CM",
                interactive: true,
                title: '<img src="styles/legend/2019CM_59.png" /> 2019 CM'
            });
var format_2018CM_60 = new ol.format.GeoJSON();
var features_2018CM_60 = format_2018CM_60.readFeatures(json_2018CM_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2018CM_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2018CM_60.addFeatures(features_2018CM_60);
var lyr_2018CM_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2018CM_60, 
                style: style_2018CM_60,
                popuplayertitle: "2018 CM",
                interactive: true,
                title: '<img src="styles/legend/2018CM_60.png" /> 2018 CM'
            });
var format_2017CM_61 = new ol.format.GeoJSON();
var features_2017CM_61 = format_2017CM_61.readFeatures(json_2017CM_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2017CM_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2017CM_61.addFeatures(features_2017CM_61);
var lyr_2017CM_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2017CM_61, 
                style: style_2017CM_61,
                popuplayertitle: "2017 CM",
                interactive: true,
                title: '<img src="styles/legend/2017CM_61.png" /> 2017 CM'
            });
var format_2016CM_62 = new ol.format.GeoJSON();
var features_2016CM_62 = format_2016CM_62.readFeatures(json_2016CM_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2016CM_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2016CM_62.addFeatures(features_2016CM_62);
var lyr_2016CM_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2016CM_62, 
                style: style_2016CM_62,
                popuplayertitle: "2016 CM",
                interactive: true,
                title: '<img src="styles/legend/2016CM_62.png" /> 2016 CM'
            });
var format_2015CM_63 = new ol.format.GeoJSON();
var features_2015CM_63 = format_2015CM_63.readFeatures(json_2015CM_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2015CM_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2015CM_63.addFeatures(features_2015CM_63);
var lyr_2015CM_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2015CM_63, 
                style: style_2015CM_63,
                popuplayertitle: "2015 CM",
                interactive: true,
                title: '<img src="styles/legend/2015CM_63.png" /> 2015 CM'
            });
var format_2014CM_64 = new ol.format.GeoJSON();
var features_2014CM_64 = format_2014CM_64.readFeatures(json_2014CM_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2014CM_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2014CM_64.addFeatures(features_2014CM_64);
var lyr_2014CM_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2014CM_64, 
                style: style_2014CM_64,
                popuplayertitle: "2014 CM",
                interactive: true,
                title: '<img src="styles/legend/2014CM_64.png" /> 2014 CM'
            });
var group_Mediterrneocentral = new ol.layer.Group({
                                layers: [lyr_2024CM_54,lyr_2023CM_55,lyr_2022CM_56,lyr_2021CM_57,lyr_2020CM_58,lyr_2019CM_59,lyr_2018CM_60,lyr_2017CM_61,lyr_2016CM_62,lyr_2015CM_63,lyr_2014CM_64,],
                                fold: "open",
                                title: "Mediterráneo central"});
var group_Mediterrneooccidental = new ol.layer.Group({
                                layers: [lyr_2024WM_43,lyr_2023WM_44,lyr_2022WM_45,lyr_2021WM_46,lyr_2020WM_47,lyr_2019WM_48,lyr_2018WM_49,lyr_2017WM_50,lyr_2016WM_51,lyr_2015WM_52,lyr_2014WM_53,],
                                fold: "open",
                                title: "Mediterráneo occidental"});
var group_Mediterrneooriental = new ol.layer.Group({
                                layers: [lyr_2024EM_32,lyr_2023EM_33,lyr_2022EM_34,lyr_2021EM_35,lyr_2020EM_36,lyr_2019EM_37,lyr_2018EM_38,lyr_2017EM_39,lyr_2016EM_40,lyr_2015EM_41,lyr_2014EM_42,],
                                fold: "open",
                                title: "Mediterráneo oriental"});
var group_fricaoccidental = new ol.layer.Group({
                                layers: [lyr_2024WA_21,lyr_2023WA_22,lyr_2022WA_23,lyr_2021WA_24,lyr_2020WA_25,lyr_2019WA_26,lyr_2018WA_27,lyr_2017WA_28,lyr_2016WA_29,lyr_2015WA_30,lyr_2014WA_31,],
                                fold: "open",
                                title: "África occidental"});
var group_SAR = new ol.layer.Group({
                                layers: [lyr_Turqua_2,lyr_Tnez_3,lyr_Siria_4,lyr_Portugal_5,lyr_Montenegro_6,lyr_Marruecos_7,lyr_Malta_8,lyr_Libia_9,lyr_Lbano_10,lyr_Italia_11,lyr_Israel_12,lyr_Grecia_13,lyr_Francia_14,lyr_Espaa_15,lyr_Egipto_16,lyr_Croacia_17,lyr_Chipre_18,lyr_Argelia_19,lyr_Albania_20,],
                                fold: "open",
                                title: "SAR"});

lyr_Voyagernolabelsretina_0.setVisible(true);lyr_Mapadelmundo_1.setVisible(true);lyr_Turqua_2.setVisible(true);lyr_Tnez_3.setVisible(true);lyr_Siria_4.setVisible(true);lyr_Portugal_5.setVisible(true);lyr_Montenegro_6.setVisible(true);lyr_Marruecos_7.setVisible(true);lyr_Malta_8.setVisible(true);lyr_Libia_9.setVisible(true);lyr_Lbano_10.setVisible(true);lyr_Italia_11.setVisible(true);lyr_Israel_12.setVisible(true);lyr_Grecia_13.setVisible(true);lyr_Francia_14.setVisible(true);lyr_Espaa_15.setVisible(true);lyr_Egipto_16.setVisible(true);lyr_Croacia_17.setVisible(true);lyr_Chipre_18.setVisible(true);lyr_Argelia_19.setVisible(true);lyr_Albania_20.setVisible(true);lyr_2024WA_21.setVisible(true);lyr_2023WA_22.setVisible(true);lyr_2022WA_23.setVisible(true);lyr_2021WA_24.setVisible(false);lyr_2020WA_25.setVisible(false);lyr_2019WA_26.setVisible(false);lyr_2018WA_27.setVisible(false);lyr_2017WA_28.setVisible(false);lyr_2016WA_29.setVisible(false);lyr_2015WA_30.setVisible(false);lyr_2014WA_31.setVisible(false);lyr_2024EM_32.setVisible(true);lyr_2023EM_33.setVisible(true);lyr_2022EM_34.setVisible(true);lyr_2021EM_35.setVisible(false);lyr_2020EM_36.setVisible(false);lyr_2019EM_37.setVisible(false);lyr_2018EM_38.setVisible(false);lyr_2017EM_39.setVisible(false);lyr_2016EM_40.setVisible(false);lyr_2015EM_41.setVisible(false);lyr_2014EM_42.setVisible(false);lyr_2024WM_43.setVisible(true);lyr_2023WM_44.setVisible(true);lyr_2022WM_45.setVisible(true);lyr_2021WM_46.setVisible(false);lyr_2020WM_47.setVisible(false);lyr_2019WM_48.setVisible(false);lyr_2018WM_49.setVisible(false);lyr_2017WM_50.setVisible(false);lyr_2016WM_51.setVisible(false);lyr_2015WM_52.setVisible(false);lyr_2014WM_53.setVisible(false);lyr_2024CM_54.setVisible(true);lyr_2023CM_55.setVisible(true);lyr_2022CM_56.setVisible(true);lyr_2021CM_57.setVisible(false);lyr_2020CM_58.setVisible(false);lyr_2019CM_59.setVisible(false);lyr_2018CM_60.setVisible(false);lyr_2017CM_61.setVisible(false);lyr_2016CM_62.setVisible(false);lyr_2015CM_63.setVisible(false);lyr_2014CM_64.setVisible(false);
var layersList = [lyr_Voyagernolabelsretina_0,lyr_Mapadelmundo_1,group_SAR,group_fricaoccidental,group_Mediterrneooriental,group_Mediterrneooccidental,group_Mediterrneocentral];
lyr_Mapadelmundo_1.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_Turqua_2.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_Tnez_3.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_Siria_4.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_Portugal_5.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Montenegro_6.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_Marruecos_7.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_Malta_8.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Libia_9.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_Lbano_10.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_Italia_11.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_Israel_12.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_Grecia_13.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_Francia_14.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', 'layer': 'layer', 'path': 'path', });
lyr_Espaa_15.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', 'layer': 'layer', 'path': 'path', });
lyr_Egipto_16.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_Croacia_17.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_Chipre_18.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', 'layer': 'layer', 'path': 'path', });
lyr_Argelia_19.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_Albania_20.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_2024WA_21.set('fieldAliases', {'y': 'y', 'x': 'x', });
lyr_2023WA_22.set('fieldAliases', {'Y': 'Y', 'X': 'X', 'field_3': 'field_3', 'field_4': 'field_4', });
lyr_2022WA_23.set('fieldAliases', {'Y': 'Y', 'X': 'X', 'field_3': 'field_3', 'field_4': 'field_4', });
lyr_2021WA_24.set('fieldAliases', {'Y': 'Y', 'X': 'X', 'field_3': 'field_3', 'field_4': 'field_4', });
lyr_2020WA_25.set('fieldAliases', {'Y': 'Y', 'X': 'X', 'field_3': 'field_3', 'field_4': 'field_4', });
lyr_2019WA_26.set('fieldAliases', {'Y': 'Y', 'X': 'X', 'field_3': 'field_3', 'field_4': 'field_4', });
lyr_2018WA_27.set('fieldAliases', {'Y': 'Y', 'X': 'X', 'field_3': 'field_3', 'field_4': 'field_4', });
lyr_2017WA_28.set('fieldAliases', {'Y': 'Y', 'X': 'X', 'field_3': 'field_3', 'field_4': 'field_4', });
lyr_2016WA_29.set('fieldAliases', {'Y': 'Y', 'X': 'X', 'field_3': 'field_3', 'field_4': 'field_4', });
lyr_2015WA_30.set('fieldAliases', {'Y': 'Y', 'X': 'X', 'field_3': 'field_3', 'field_4': 'field_4', });
lyr_2014WA_31.set('fieldAliases', {'Y': 'Y', 'X': 'X', 'field_3': 'field_3', 'field_4': 'field_4', });
lyr_2024EM_32.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_2023EM_33.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_2022EM_34.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_2021EM_35.set('fieldAliases', {'Coordinates': 'Coordinates', 'field_2': 'field_2', });
lyr_2020EM_36.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_2019EM_37.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_2018EM_38.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_2017EM_39.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_2016EM_40.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_2015EM_41.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_2014EM_42.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_2024WM_43.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_2023WM_44.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_2022WM_45.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_2021WM_46.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_2020WM_47.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_2019WM_48.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_2018WM_49.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_2017WM_50.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_2016WM_51.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_2015WM_52.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_2014WM_53.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_2024CM_54.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_2023CM_55.set('fieldAliases', {'Coordinates': 'Coordinates', 'field_2': 'field_2', });
lyr_2022CM_56.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_2021CM_57.set('fieldAliases', {'Coordinates': 'Coordinates', 'field_2': 'field_2', });
lyr_2020CM_58.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_2019CM_59.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_2018CM_60.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_2017CM_61.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_2016CM_62.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_2015CM_63.set('fieldAliases', {'Coordinates': 'Coordinates', 'field_2': 'field_2', });
lyr_2014CM_64.set('fieldAliases', {'Y': 'Y', 'X': 'X', });
lyr_Mapadelmundo_1.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_Turqua_2.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_Tnez_3.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_Siria_4.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_Portugal_5.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Montenegro_6.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_Marruecos_7.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_Malta_8.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Libia_9.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_Lbano_10.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_Italia_11.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_Israel_12.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_Grecia_13.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_Francia_14.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Espaa_15.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Egipto_16.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_Croacia_17.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_Chipre_18.set('fieldImages', {'id': 'TextEdit', 'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Argelia_19.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_Albania_20.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_2024WA_21.set('fieldImages', {'y': 'Range', 'x': 'Range', });
lyr_2023WA_22.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', 'field_3': 'TextEdit', 'field_4': 'TextEdit', });
lyr_2022WA_23.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', 'field_3': 'TextEdit', 'field_4': 'TextEdit', });
lyr_2021WA_24.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', 'field_3': 'TextEdit', 'field_4': 'TextEdit', });
lyr_2020WA_25.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', 'field_3': 'TextEdit', 'field_4': 'TextEdit', });
lyr_2019WA_26.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', 'field_3': 'TextEdit', 'field_4': 'TextEdit', });
lyr_2018WA_27.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', 'field_3': 'TextEdit', 'field_4': 'TextEdit', });
lyr_2017WA_28.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', 'field_3': 'TextEdit', 'field_4': 'TextEdit', });
lyr_2016WA_29.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', 'field_3': 'TextEdit', 'field_4': 'TextEdit', });
lyr_2015WA_30.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', 'field_3': 'TextEdit', 'field_4': 'TextEdit', });
lyr_2014WA_31.set('fieldImages', {'Y': 'TextEdit', 'X': 'Range', 'field_3': 'TextEdit', 'field_4': 'TextEdit', });
lyr_2024EM_32.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_2023EM_33.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_2022EM_34.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_2021EM_35.set('fieldImages', {'Coordinates': 'TextEdit', 'field_2': 'TextEdit', });
lyr_2020EM_36.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_2019EM_37.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_2018EM_38.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_2017EM_39.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_2016EM_40.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_2015EM_41.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_2014EM_42.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_2024WM_43.set('fieldImages', {'Y': 'Range', 'X': 'Range', });
lyr_2023WM_44.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_2022WM_45.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_2021WM_46.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_2020WM_47.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_2019WM_48.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_2018WM_49.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_2017WM_50.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_2016WM_51.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_2015WM_52.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_2014WM_53.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_2024CM_54.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_2023CM_55.set('fieldImages', {'Coordinates': 'TextEdit', 'field_2': 'TextEdit', });
lyr_2022CM_56.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_2021CM_57.set('fieldImages', {'Coordinates': 'TextEdit', 'field_2': 'TextEdit', });
lyr_2020CM_58.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_2019CM_59.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_2018CM_60.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_2017CM_61.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_2016CM_62.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_2015CM_63.set('fieldImages', {'Coordinates': 'TextEdit', 'field_2': 'TextEdit', });
lyr_2014CM_64.set('fieldImages', {'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_Mapadelmundo_1.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_Turqua_2.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_Tnez_3.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_Siria_4.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_Portugal_5.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Montenegro_6.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_Marruecos_7.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_Malta_8.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Libia_9.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_Lbano_10.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_Italia_11.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_Israel_12.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_Grecia_13.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_Francia_14.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Espaa_15.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Egipto_16.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_Croacia_17.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_Chipre_18.set('fieldLabels', {'id': 'no label', 'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Argelia_19.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_Albania_20.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_2024WA_21.set('fieldLabels', {'y': 'no label', 'x': 'no label', });
lyr_2023WA_22.set('fieldLabels', {'Y': 'no label', 'X': 'no label', 'field_3': 'no label', 'field_4': 'no label', });
lyr_2022WA_23.set('fieldLabels', {'Y': 'no label', 'X': 'no label', 'field_3': 'no label', 'field_4': 'no label', });
lyr_2021WA_24.set('fieldLabels', {'Y': 'no label', 'X': 'no label', 'field_3': 'no label', 'field_4': 'no label', });
lyr_2020WA_25.set('fieldLabels', {'Y': 'no label', 'X': 'no label', 'field_3': 'no label', 'field_4': 'no label', });
lyr_2019WA_26.set('fieldLabels', {'Y': 'no label', 'X': 'no label', 'field_3': 'no label', 'field_4': 'no label', });
lyr_2018WA_27.set('fieldLabels', {'Y': 'no label', 'X': 'no label', 'field_3': 'no label', 'field_4': 'no label', });
lyr_2017WA_28.set('fieldLabels', {'Y': 'no label', 'X': 'no label', 'field_3': 'no label', 'field_4': 'no label', });
lyr_2016WA_29.set('fieldLabels', {'Y': 'no label', 'X': 'no label', 'field_3': 'no label', 'field_4': 'no label', });
lyr_2015WA_30.set('fieldLabels', {'Y': 'no label', 'X': 'no label', 'field_3': 'no label', 'field_4': 'no label', });
lyr_2014WA_31.set('fieldLabels', {'Y': 'no label', 'X': 'no label', 'field_3': 'no label', 'field_4': 'no label', });
lyr_2024EM_32.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_2023EM_33.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_2022EM_34.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_2021EM_35.set('fieldLabels', {'Coordinates': 'no label', 'field_2': 'no label', });
lyr_2020EM_36.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_2019EM_37.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_2018EM_38.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_2017EM_39.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_2016EM_40.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_2015EM_41.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_2014EM_42.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_2024WM_43.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_2023WM_44.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_2022WM_45.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_2021WM_46.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_2020WM_47.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_2019WM_48.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_2018WM_49.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_2017WM_50.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_2016WM_51.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_2015WM_52.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_2014WM_53.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_2024CM_54.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_2023CM_55.set('fieldLabels', {'Coordinates': 'no label', 'field_2': 'no label', });
lyr_2022CM_56.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_2021CM_57.set('fieldLabels', {'Coordinates': 'no label', 'field_2': 'no label', });
lyr_2020CM_58.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_2019CM_59.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_2018CM_60.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_2017CM_61.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_2016CM_62.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_2015CM_63.set('fieldLabels', {'Coordinates': 'no label', 'field_2': 'no label', });
lyr_2014CM_64.set('fieldLabels', {'Y': 'no label', 'X': 'no label', });
lyr_2014CM_64.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});