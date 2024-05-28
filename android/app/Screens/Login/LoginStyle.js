import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      flex: 1,
      marginHorizontal: 20,
      marginTop: 60,
    },
    signInText: {
      fontSize: 26,
      color: 'white',
      marginBottom: 10,
    },
    welcomeText: {
      fontSize: 14,
      color: 'white',
      marginBottom: 10,
    },
    tabContainer: {
      flexDirection: 'row',
      marginBottom: 10,
      backgroundColor: "#e3f2fd",
      justifyContent: 'space-around',
      padding: 10,
      borderRadius: 10,
      marginTop: 130,
    },
    textChange: {
      textAlign: 'center',
      color: '#9C51FD',
    },
    activeTabText: {
      color: 'white',
    },
    tab: {
      padding: 10,
      width: '50%',
      borderRadius: 10,
    },
    activeTab: {
      backgroundColor: '#9C51FD',
    },
    input: {
      width: '100%',
      height: 60,
      borderRadius: 10,
      marginBottom: 10,
      paddingHorizontal: 10,
      backgroundColor: '#e3f2fd',
      marginTop: 10,
    },
    label: {
      marginTop: 20,
      color: 'white',
    },
    forgotPassword: {
      fontSize: 12,
      color: 'white',
      marginBottom: 10,
    },
    signInButton: {
      backgroundColor: 'white',
      paddingVertical: 10,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
    },
    signInButtonText: {
      color: '#9C51FD',
      fontSize: 16,
    },
    image: {
      height: 160,
      width: 170,
      alignSelf: 'center',
      marginTop: 20,
      marginBottom: -60
    },
  });
export default styles;
