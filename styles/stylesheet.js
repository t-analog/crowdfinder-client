import {
  Dimensions,
  StyleSheet,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const boxComponent = {
  height: {
    small: 40,
    medium: 80,
    big: 120,
  },
  padding: {
    horizontal: 10,
  },
  border: {
    color: 'black',
    radius: 10,
    width: 1,
  },
};

export default StyleSheet.create({
  items: {
    marginTop: 20,
    borderRadius: 20,
    overflow: 'hidden',
  },
  mapContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  activityWrapper: {
    flex: 1,
    backgroundColor: "aliceblue",
    padding: 20,
  },
  item: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  category: {
    minWidth: 40,
    textAlign: "center",
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemTitle: {
    flexWrap: "wrap",
    fontWeight: 'bold',
    marginVertical: 5,
    fontSize: 16
  },
  itemText: {
    flexWrap: "wrap",
    alignSelf: "stretch",
    marginVertical: 5,
  },
  textCategory: {
    paddingHorizontal: 15,
  },
  itemBot: {
    justifyContent: "space-between",
    flexDirection: "row"
  },

  container: {
    padding: 20,
    backgroundColor: 'white',
  },
  textInputBase: {
    paddingHorizontal: boxComponent.padding.horizontal,
    borderColor: boxComponent.border.color,
    borderWidth: boxComponent.border.width,
    borderRadius: boxComponent.border.radius,
  },
  textInputSmall: {
    height: boxComponent.height.small,
  },
  textInputMedium: {
    height: boxComponent.height.medium,
  },
  textInputBig: {
    height: boxComponent.height.big,
  },
  emptyBoxBase: {
    paddingHorizontal: boxComponent.padding.horizontal,
    borderColor: boxComponent.border.color,
    borderWidth: boxComponent.border.width,
    borderRadius: boxComponent.border.radius,
    justifyContent: 'center',
  },
  emptyBoxSmall: {
    height: boxComponent.height.small,
  },
  emptyBoxMedium: {
    height: boxComponent.height.medium,
  },
  emptyBoxBig: {
    height: boxComponent.height.big,
  },
  toggleSwitch: {
    position: 'absolute',
    top: 5,
    right: 10,
  },
  buttonBase: {
    paddingHorizontal: boxComponent.padding.horizontal,
    backgroundColor: 'black',
    borderRadius: boxComponent.border.radius,
    alignItems: 'center',
    justifyContent: 'center',
    height: boxComponent.height.small,
  },
  buttonFull: {
    // marginHorizontal: 20,
  },
  buttonHalf: {
    width: width * 1 / 2 - 30,
  },
  marginBot: {
    marginBottom: 20,
  },
  marginTop: {
    marginTop: 20,
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  flexStart: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain'
  },
  icon: {
    position: 'absolute',
    right: 20,
    top: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  forgot: {
    color: 'blue',
  },
  profileMenu: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    position: 'absolute',
    right: 0,
    marginRight: 20,
  },
  header: {
    marginTop: 100,
    marginBottom: 20,
    fontSize: 40
  },
  headerBackground: {
    backgroundColor: 'white',
  },
});
