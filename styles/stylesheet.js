import { StyleSheet } from 'react-native';

const textInput = {
  height: 40,
  marginTop: 20
};

const squareComponent = {
  height: 40,
  marginTop: 20
}

export default StyleSheet.create({
  rightmenu: {
    top: 19,
    left: 258
  },
  color: {
    backgroundColor: 'white',
  },
  container: {
    paddingTop: 100,
    backgroundColor: 'white',
    paddingBottom: 550
  },
  header: {
    marginTop: 20,
    marginBottom: 5,
    marginLeft: 15,
    fontSize: 40
  },
  data: {
    fontSize: 16
  },
  profile: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    position: 'absolute',
    right: 10,
    top: 5
  },
  box: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    marginTop: 15,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 0,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxA: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    marginTop: 15,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 0,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  boxB: {
    marginTop: -5,
    justifyContent: 'space-between',
    color: "black",
    fontSize: 16
  },
  boxB2: {
    marginTop: -5,
    marginRight: 9,
    paddingTop: 28,
    justifyContent: 'space-between',
    color: "black",
    fontSize: 16
  },
  button: {
    padding: 10,
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    height: 40,
    backgroundColor: 'black',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonSplit: {
    padding: 10,
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    height: 40,
    backgroundColor: 'black',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 176,
    justifyContent: 'space-between'
  },
  buttonText: {
    color: 'white',
    fontSize: 16
  },
  row: {
    flexDirection: 'row',
  },
  containerActivitySettings: {
    paddingTop: 100,
    paddingBottom: 470,
    backgroundColor: 'white',
    display: 'flex'
  },
  dataActivitySettings: {
    marginLeft: 15,
    fontSize: 15
  },
  inputActivitySettings: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 15,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 0,
    height: 60,
    borderColor: 'black',
    borderWidth: 1,
  },
  suisActivitySettings: {
    display: 'flex',
    position: 'relative',
    top: 100,
    right: 20
  },
  headerBackground: {
    backgroundColor: "#00BFFF",
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130
  },
  body: {
    marginTop: 40,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600",
    marginTop: 50,
    marginLeft: 20
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 60,
    alignSelf: 'center'
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 20,
    textAlign: 'center'
  },
  inputDesc: {
    paddingHorizontal: 10,
    marginTop: 15,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 0,
    height: 150,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain'
  },
  rectangleRounded: {
    borderColor: "black",
    borderRadius: 10,
  },
  input: {
    marginHorizontal: 20,
    paddingHorizontal: 10,
    height: textInput.height,
    borderColor: 'black',
    borderWidth: 1,
  },
  textInput: {
    marginHorizontal: 20,
    paddingHorizontal: 10,
    height: textInput.height,
    borderColor: 'black',
    borderWidth: 1
  },
  inputLeft: {
    paddingHorizontal: 10,
    paddingRight: 320,
    marginTop: 15,
    marginRight: -35,
    marginLeft: 15,
    marginBottom: 0,
    height: 40,
    borderColor: 'black',
    borderWidth: 1
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputIcon: {
    position: 'absolute',
    right: 40,
    top: 10,
  },
  inputMarginTop: {
    marginTop: textInput.marginTop,
  },
  forgot: {
    padding: 15,
    color: 'blue',
    textAlign: 'right',
  },
  viewMarginTop: {
    marginTop: squareComponent.marginTop,
  },
  pressableButton: {
    alignItems: 'center',
    backgroundColor: 'black',
    height: squareComponent.height,
    justifyContent: 'center',
    marginHorizontal: 20,
    padding: 10,
  },
  applyButton: {
    backgroundColor: 'black',
    padding: 10,
    margin: 15,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
