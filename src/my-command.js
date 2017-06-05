import React from 'react';
import PropTypes from 'prop-types';
import { render, Artboard, Text, View, Image } from 'react-sketchapp';
import chroma from 'chroma-js';

const Styles = {
  artboard: {
    width:320,
    height:568,
    paddingLeft: 15,
    paddingRight: 15 ,
  },
  search2__input: {
    marginTop: 21,
    marginBottom: 18,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  input: {
    border: 3,
    borderColor: "#ffdb4d",
    borderWidth: 3,
    width: 205,
    borderRight: 0,
    display: "inline-block",
  },
  input__control: {
    height: 40,
    fontSize: 18,
    fontFamily: 'Helvetica',
    color: 'black',
    paddingTop: 9.5,
    paddingRight: 0,
    paddingBottom: 8.5,
    paddingLeft: 8,
    lineHeight: 22,
  },
  search2__button: {
    backgroundColor: "#ffdb4d",
    width: 70,
    height: 46,
  },
  websearchButton__text: {
    fontSize: 18,
    lineHeight: 46,
    boxSizing: "border-box",
    height: 46,
    marginLeft: 12,
  },
  custom_arrow: {
    width: 14,
    height: 46,
  },

  servicesHead: {
    marginTop: 10,
    marginBottom: 3,
    marginLeft: -15,
    width: 320,
    // height: 36,
    flexDirection: 'row',
    flexWrap: 'no-wrap',
  },
  servicesHead__service_name_search: {
    paddingLeft: 15,
    paddingRight: 16,
    fontWeight: 700,
    fontSize: 12,
  },
  servicesHead__service_name_images: {
    paddingRight: 16,
    color: "#999",
    fontWeight: 700,
    fontSize: 12,
  },
  servicesHead__service_name_video: {
    paddingRight: 16,
    color: "#999",
    fontWeight: 700,
    fontSize: 12,
  },
  servicesHead__service_name_maps: {
    paddingRight: 16,
    color: "#999",
    fontWeight: 700,
    fontSize: 12,
  },
  servicesHead__service_name_market: {
    paddingRight: 16,
    color: "#999",
    fontWeight: 700,
    fontSize: 12,
  },
  organic: {
      width: 320,
      marginTop: 20,
  },
  organic__title: {
    color: "#04b",
    fontSize: 20,
    lineHeight: 23,
    width: 290,
    paddingBottom: 5,
  },
  organic__subtitle: {
      width: 290,
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingBottom: 5,
  },
  organc__path: {
    color: "#070",
    fontSize: 14,
    fontWeight: 700,
  },
  organic__label: {
    backgroundColor: "#ffeba0",
    marginTop: -1,
    marginRight: 0,
    marginBottom: -1,
    marginLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    paddingLeft: 10,
    fontSize: 13,
    lineHeight: 19,
    fontFamily: "Verdana",
    display: "inline-block",
    verticalAlign: "baseline",
    borderRadius: 3,
  },
  text__container: {
    width: 290,
    lineHeight: 19
  },
  sitelinks: {
    height: 18,
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'no-wrap',
  },
  sitelinks__link: {
    color: "#04b",
  },
  sitelinks__link__before: {
    marginRight: 7.5,
    marginLeft: 7.5,
  }

};

const TouchSerp = ({ searchDocs }) => (
  <Artboard style={Styles.artboard} >
    <View style={Styles.search2__input}>
      <View style={Styles.input}>
        <Text name='input__control' style={Styles.input__control}>
          окна
          </Text>
      </View>
      <View style={Styles.search2__button}>
        <Text style={Styles.websearchButton__text} >
          Найти
        </Text>
      </View>
      <Image source="https://pupadupa.github.io/img/arrow.png" style={Styles.custom_arrow} />
    </View>

    <View style={Styles.servicesHead} >
      <Text style={Styles.servicesHead__service_name_search}>
        ПОИСК
      </Text>
      <Text style={Styles.servicesHead__service_name_images}>
        КАРТИНКИ
      </Text>
      <Text style={Styles.servicesHead__service_name_video}>
        ВИДЕО
      </Text>
      <Text style={Styles.servicesHead__service_name_maps}>
        КАРТЫ
      </Text>
      <Text style={Styles.servicesHead__service_name_market}>
        МАРКЕТ
      </Text>
    </View>

    <SerpList searchDocs={searchDocs} />

   </Artboard>

);

const SerpList = ( { searchDocs } ) => (
  <View>
    {Object.keys(searchDocs).map(id => <SerpItem documentData={searchDocs[id]} key={id} />)}
  </View>
);

const SerpItem = ( { documentData } ) => (
  <View style={Styles.organic} >
    <Text style={Styles.organic__title} >
      {documentData['title']}
    </Text>
    <View style={Styles.organic__subtitle} >
      <Text style={Styles.organc__path} >
        {documentData['url']}
      </Text>
      <Text style={Styles.organic__label} >
        {documentData['label_text']}
      </Text>
    </View>
    <Text style={Styles.text__container} >
      {documentData['snippet_text']}
    </Text>
    <Sitelinks sitelinks={documentData['sitelinks']} />
  </View>
);

//TODO: itrate over sitelinks objects
const Sitelinks = ( {sitelinks} ) => (
  <View style={Styles.sitelinks} >
    <Text style={Styles.sitelinks__link}>{sitelinks[0]}</Text>
    <Text style={Styles.sitelinks__link__before}>&#183;</Text>
    <Text style={Styles.sitelinks__link}>{sitelinks[1]}</Text>
    <Text style={Styles.sitelinks__link__before}>&#183;</Text>
    <Text style={Styles.sitelinks__link}>{sitelinks[2]}</Text>
  </View>
);

export default (context) => {
  const searchDocs = {
    0: {
      title: "ОКНА 21 ВЕКА - Скидка 45% - Производитель!!",
      url: "okna-21-veka.ru",
      label_text: "Реклама",
      snippet_text: "Цены на <b>окна</b> обрушились! От 7500 руб. - Прямо с завода!",
      sitelinks: {
        0: "Окна ПВХ недорого",
        1: "Стандартные пластиковые окна",
        2: "Скидки",
      }
    },
    1: {
      title: "Пластиковые окна ХАМЕЛЕОН от производителя",
      url: "hameleon.ru",
      label_text: "Реклама",
      snippet_text: "Пластиковые окна ХАМЕЛЕОН – купи у производителя, недорого, акции и скидки",
      sitelinks: {
        0: "Окна ПВХ недорого",
        1: "Стандартные пластиковые окна",
        2: "Скидки",
      }
    },
    2: {
      title: "Пластиковые окна ХАМЕЛЕОН от производителя",
      url: "hameleon.ru",
      label_text: "Реклама",
      snippet_text: "Пластиковые окна ХАМЕЛЕОН – купи у производителя, недорого, акции и скидки",
      sitelinks: {
        0: "Окна ПВХ недорого",
        1: "Стандартные пластиковые окна",
        2: "Скидки",
      }
    },

  }
  render(<TouchSerp searchDocs={searchDocs} />, context.document.currentPage());
}
