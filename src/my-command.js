import React from 'react';
import PropTypes from 'prop-types';
import { render, Artboard, Text, View, Image } from 'react-sketchapp';
import chroma from 'chroma-js';

// take a hex and give us a nice text color to put over it


const Styles = {
  artboard: {
    width:320,
    height:568,
    paddingLeft: 15,
    paddingRight: 115 ,
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
    height: 36,
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
      paddingBottom: 6,
  },

};

const Document = ({ colors }) => (
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
    <View style={Styles.organic} >
      <Text style={Styles.organic__title}>
        Пластиковые окна – недорого / hameleon.ru
      </Text>
      <View style={Styles.organic__subtitle} >
        <Text style={{
          color: "#070",
          fontSize: 14,
          fontWeight: 700,
        }}
        >
          hameleon.ru
        </Text>
        <Text style={{
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
        }}>
          Реклама
        </Text>
      </View>
      <Text style={{
        width: 290,
        lineHeight: 17
      }} >
        Пластиковые окна ХАМЕЛЕОН – купи у производителя, недорого, акции и скидки
        Окна ПВХ недорогоСтандартные пластиковые окнаОкна ПВХ класса люкс
      </Text>

    </View>

   </Artboard>

);

Document.propTypes = {
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default (context) => {
  const colorList = {
    Haus: '#F3F4F4',
    Night: '#333',
    Sur: '#96DBE4',
    'Sur Dark': '#24828F',
    Peach: '#EFADA0',
    'Peach Dark': '#E37059',
    Pear: '#93DAAB',
    'Pear Dark': '#2E854B',
  };

  render(<Document colors={colorList} />, context.document.currentPage());
}
