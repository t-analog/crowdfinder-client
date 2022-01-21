import { StyleSheet } from 'react-native';

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
    backgroundColor: 'white'
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
    width:176,
    justifyContent: 'space-between'
  },
  ButtonText: {
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
  input: {
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
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  }
});
