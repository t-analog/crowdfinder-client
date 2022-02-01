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

const drawer = {
  height: height * 3 / 4,
  state: {
    open: (height * 3 / 4) / 2,
    closed: 0
  },
};

export default StyleSheet.create({
  drawerContainer: {
    flex: 1,
    alignItems: "center",
  },
  drawer: {
    backgroundColor: "white",
    borderColor: "black",
    height: drawer.height,
    width,
    elevation: 20,
  },
  drawerPressable: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderColor: "whitesmoke",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomWidth: 1,
    // borderWidth: 1,
    height: 40,
    width,
    elevation: 20,
  },




  scrollView: {
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
  category: {
    minWidth: 20,
    paddingHorizontal: 5,
    height: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
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
    alignItems: 'center',
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
  flexRow: {
    flexDirection: 'row',
  },
  contentCenter: {
    justifyContent: 'center',
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
    // position: 'absolute',
    // top: 20,
    // right: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    position: 'absolute',
    right: 0,
    top: -60,
  },
  header: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 40
  },
  headerBackground: {
    backgroundColor: 'white',
  },
  right: {
    textAlign: 'right',
  },
});
