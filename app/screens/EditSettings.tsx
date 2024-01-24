import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Alert,
  AsyncStorage,
  Pressable,
  TextInput,
  StyleSheet,
} from "react-native";
import colors from "../Themes/Colors";
import { getDatabase, ref, onValue, set, push } from "firebase/database";

class EditSettings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      pronouns: "",
      email: "",
      phone: "",
      cardFirstName: "",
      cardLastName: "",
      cardNum: "",
      cardCVV: "",
      cardExp: "",
    };
  }

  componentDidMount = () => {
    // AsyncStorage.getItem('name').then((value) => this.setState({ 'name':value }));
    // AsyncStorage.getItem('pronouns').then((value) => this.setState({ 'pronouns':value }));
    // AsyncStorage.getItem('email').then((value) => this.setState({ 'email':value }));
    // AsyncStorage.getItem('phone').then((value) => this.setState({ 'phone':value }));
    // AsyncStorage.getItem('cardFirst').then((value) => this.setState({ 'cardFirst':value }));
    // AsyncStorage.getItem('cardLast').then((value) => this.setState({ 'cardLast':value }));
    // AsyncStorage.getItem('cardNumber').then((value) => this.setState({ 'cardNumber':value }));
    // AsyncStorage.getItem('cvv').then((value) => this.setState({ 'cvv':value }));
    // AsyncStorage.getItem('exp').then((value) => this.setState({ 'exp':value }));

    const db = getDatabase();

    const reference = ref(db, "settings/");
    onValue(reference, (snapshot) => {
      if (snapshot.val()) {
        let val = snapshot.val();
        this.setState({
          name: val.name,
          pronouns: val.pronouns,
          email: val.email,
          phone: val.phone,
          cardFirstName: val.cardFirstName,
          cardLastName: val.cardLastName,
          cardNum: val.cardNum,
          cardCVV: val.cardCVV,
          cardExp: val.cardExp,
        });
      }
    });
  };

  saveEditProfile = () => {
    Alert.alert("Information Updated");

    const db = getDatabase();

    const reference = ref(db, "settings/");

    set(reference, {
      name: this.state.name,
      pronouns: this.state.pronouns,
      email: this.state.email,
      phone: this.state.phone,
      cardFirstName: this.state.cardFirstName,
      cardLastName: this.state.cardLastName,
      cardNum: this.state.cardNum,
      cardCVV: this.state.cardCVV,
      cardExp: this.state.cardExp,
    });

    this.props.navigation.navigate("Settings");
  };

  setName = (value) => {
    //AsyncStorage.setItem("name", value);
    this.setState({ name: value });
  };

  setPronouns = (value) => {
    //AsyncStorage.setItem("pronouns", value);
    this.setState({ pronouns: value });
  };

  setEmail = (value) => {
    //AsyncStorage.setItem("email", value);
    this.setState({ email: value });
  };

  setPhone = (value) => {
    //AsyncStorage.setItem("phone", value);
    this.setState({ phone: value });
  };

  setCardFirst = (value) => {
    //AsyncStorage.setItem("cardFirst", value);
    this.setState({ cardFirstName: value });
  };

  setCardLast = (value) => {
    //AsyncStorage.setItem("cardLast", value);
    this.setState({ cardLastName: value });
  };

  setCardNumber = (value) => {
    //AsyncStorage.setItem("cardNumber", value);
    this.setState({ cardNum: value });
  };

  setCVV = (value) => {
    //AsyncStorage.setItem("cvv", value);
    this.setState({ cardCVV: value });
  };

  setExp = (value) => {
    //AsyncStorage.setItem("exp", value);
    this.setState({ cardExp: value });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>
        <View style={styles.back}>
          <Text style={styles.headings}>Account</Text>
          <View style={styles.text}>
            <Text style={styles.label}>Name: </Text>
            <TextInput
              style={styles.input}
              value={this.state.name}
              placeholder="e.g. John Doe"
              onChangeText={this.setName}
            />
          </View>
          <View style={styles.text}>
            <Text style={styles.label}>Pronouns: </Text>
            <TextInput
              style={styles.input}
              value={this.state.pronouns}
              placeholder="e.g. she/her"
              onChangeText={this.setPronouns}
            />
          </View>
          <View style={styles.text}>
            <Text style={styles.label}>Email: </Text>
            <TextInput
              style={styles.input}
              value={this.state.email}
              placeholder="e.g. johndoe@gmail.com"
              onChangeText={this.setEmail}
            />
          </View>
          <View style={styles.text}>
            <Text style={styles.label}>Phone: </Text>
            <TextInput
              style={styles.input}
              value={this.state.phone}
              placeholder="e.g. 120-456-7890"
              onChangeText={this.setPhone}
            />
          </View>
        </View>
        <View style={styles.back}>
          <Text style={styles.headings}>Card Information</Text>
          <View style={styles.text}>
            <Text style={styles.label}> First Name: </Text>
            <TextInput
              style={styles.input}
              value={this.state.cardFirstName}
              placeholder="e.g. John"
              onChangeText={this.setCardFirst}
            />
          </View>
          <View style={styles.text}>
            <Text style={styles.label}> Last Name: </Text>
            <TextInput
              style={styles.input}
              value={this.state.cardLastName}
              placeholder="e.g. Do"
              onChangeText={this.setCardLast}
            />
          </View>
          <View style={styles.text}>
            <Text style={styles.label}> Card Number: </Text>
            <TextInput
              style={styles.input}
              value={this.state.cardNum}
              placeholder="e.g. 1234567812345678"
              onChangeText={this.setCardNumber}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.small_text} width={"50%"}>
            <View style={styles.text}>
              <Text style={styles.label}> CVV: </Text>
              <TextInput
                style={styles.small_input}
                value={this.state.cardCVV}
                placeholder="e.g. 123"
                onChangeText={this.setCVV}
              />
            </View>
            <View style={styles.text}>
              <Text style={styles.label}> MM/YY: </Text>
              <TextInput
              value={this.state.cardExp}
                style={styles.small_input}
                placeholder="e.g. 08/12"
                onChangeText={(val) => this.setExp(val)}
              />
            </View>
          </View>
        </View>
        <Pressable onPress={this.saveEditProfile} block>
          <Text style={styles.update}>UPDATE</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },

  title: {
    paddingTop: 20,
    fontSize: 35,
    fontWeight: "bold",
    color: colors.darkgreen,
    textAlign: "center",
    paddingBottom: 20,
    fontFamily: "Nunito-Bold",
  },

  back: {
    width: "90%",
    height: "30%",
    borderRadius: 16,
    backgroundColor: colors.lightgreen,
    marginBottom: 20,
  },

  headings: {
    paddingTop: 15,
    fontSize: 25,
    color: colors.darkgreen,
    textAlign: "left",
    left: 15,
    fontFamily: "Nunito",
  },

  text: {
    flexDirection: "row",
    backgroundColor: colors.lightgreen,
    left: 15,
    marginTop: 20,
    width: "90%",
    fontFamily: "Nunito",
  },

  small_text: {
    flexDirection: "row",
    backgroundColor: colors.lightgreen,
  },

  label: {
    fontSize: 15,
    marginRight: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: "#777",
    width: 200,
  },

  small_input: {
    borderWidth: 1,
    borderColor: "#777",
    width: 80,
  },

  update: {
    fontSize: 25,
    color: colors.darkgreen,
    marginTop: '5%'
  }
});

export default EditSettings;
