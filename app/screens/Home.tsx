import React, { Component } from "react";
import { Image, ImageBackground } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import ProgressBar from "react-native-progress/Bar";

import { Text, View } from "../components/Themed";
import Colors from "../Themes/Colors";
import { getDatabase, ref, onValue } from "firebase/database";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Nancy",
      progress: 0,
      donations: 0,
      donationsLeft: 1,
    };
    this.renderStage = this.renderStage.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    let numLeft = 1;
    let donations = 0;

    // insert firebase call here, update donations, donationsLeft, and progress appropriately
    const db = getDatabase();
    const reference = ref(db, "donations/");

    onValue(reference, (snapshot) => {
      donations = snapshot.size;
      if (donations == 0) {
        numLeft = 1;
      } else if (donations >= 1 && donations < 5) {
        numLeft = 5;
      } else if (donations >= 5 && donations < 25) {
        numLeft = 25;
      } else if (donations >= 25 && donations < 50) {
        numLeft = 50;
      }

      this.setState({
        donations: donations,
        donationsLeft: numLeft,
        progress: donations / numLeft,
      });
    });
  }

  renderButton(style) {
    return (
      <View style={style}>
        <Text style={styles.donationNumText}>{this.state.donations}</Text>
        <Text style={styles.donationText}>DONATIONS</Text>
        <Text style={styles.donationText}>MADE</Text>
      </View>
    );
  }

  // renders the bottom UI depending on which growth stage we're at
  renderStage() {
    if (this.state.donations == 0) {
      return (
        <View style={styles.stageContainer}>
          {this.renderButton(styles.dirtCircleContainer)}
          <Image
            style={styles.dirt}
            source={require("../assets/images/tree-stages/dirt.png")}
          />
        </View>
      );
    } else if (this.state.donations >= 1 && this.state.donations < 5) {
      return (
        <View style={styles.stageContainer}>
          {this.renderButton(styles.dirtCircleContainer)}
          <Image
            style={styles.tree1}
            source={require("../assets/images/tree-stages/tree-1.png")}
          />
        </View>
      );
    } else if (this.state.donations >= 5 && this.state.donations < 25) {
      return (
        <View style={styles.stageContainer}>
          {this.renderButton(styles.dirtCircleContainer)}
          <Image
            style={styles.tree2}
            source={require("../assets/images/tree-stages/tree-1.png")}
          />
        </View>
      );
    } else if (this.state.donations >= 25 && this.state.donations < 50) {
      return (
        <View style={styles.stageContainer}>
          <Image
            style={styles.tree3}
            source={require("../assets/images/tree-stages/tree-1.png")}
          />
          <View style={styles.absoluteContainer}>
            {this.renderButton(styles.dirtCircleContainer)}
          </View>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.background}
          source={require("../assets/images/Home.png")}
        >
          <View style={styles.nameContainer}>
            <Text style={styles.name}>Hi, {this.state.name}</Text>
          </View>
          <View style={styles.progressContainer}>
            <Text style={styles.donationsLeftText}>
              {this.state.donations}/{this.state.donationsLeft} donations
            </Text>
            <ProgressBar
              progress={this.state.donations / this.state.donationsLeft}
              color={Colors.darkgreen}
              unfilledColor={Colors.lightgray}
              borderColor={"white"}
              borderWidth={3}
              width={300}
              height={30}
              borderRadius={10}
            />
          </View>
          {this.renderStage()}
        </ImageBackground>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: Colors.lightgreen,
  },

  background: {
    marginTop: "10%",
    width: "100%",
    alignSelf: "center",
    resizeMode: "stretch",
    height: "100%",
  },

  nameContainer: {
    marginTop: "6rem",
    backgroundColor: "transparent",
    alignSelf: "center",
  },

  name: {
    fontSize: 50,
    fontWeight: "bold",
    fontFamily: "Nunito-Bold",
  },

  progressContainer: {
    marginTop: "40%",
    backgroundColor: "transparent",
    alignSelf: "center",
  },

  stageContainer: {
    backgroundColor: "transparent",
    alignContent: "center",
  },

  donationsLeftText: {
    color: Colors.darkgreen,
    textAlign: "right",
    paddingBottom: 2,
  },

  dirt: {
    marginLeft: 10,
    width: "100%",
    resizeMode: "contain",
    height: "50%",
  },

  tree1: {
    marginTop: "25%",
    width: "100%",
    resizeMode: "contain",
    height: "25%",
  },

  tree2: {
    marginTop: "10%",
    width: "100%",
    resizeMode: "contain",
    height: "35%",
  },

  tree3: {
    marginTop: "10%",
    width: "auto",
    resizeMode: "contain",
    height: "60%",
  },

  dirtCircleContainer: {
    width: "7rem",
    height: "7rem",
    borderRadius: "3.5rem",
    backgroundColor: Colors.darkgreen,
    borderColor: "white",
    borderWidth: 5,
    alignSelf: "center",
    alignItems: "center",
    marginTop: "10%",
  },

  absoluteContainer: {
    backgroundColor: "transparent",
    position: "absolute",
    left: "35%",
    //left: 150,
    top: 150,
  },

  treeCircleContainer: {
    left: 2,
    width: "7rem",
    height: "7rem",
    borderRadius: "3.5rem",
    backgroundColor: Colors.darkgreen,
    borderColor: "white",
    borderWidth: 5,
  },

  donationNumText: {
    marginTop: "8%",
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: "2rem",
  },

  donationText: {
    textAlign: "center",
    color: "white",
    fontFamily: "Nunito",
  },

  "@media (min-height: 600) and (max-height: 700)": {
    nameContainer: {
      marginTop: "3.5rem",
    },
    progressContainer: {
      marginTop: "30%",
    },

    tree1: {
      marginTop: "15%",
    },

    tree2: {
      marginTop: "5%",
    },

    absoluteContainer: {
      left: 130,
      top: 120,
    },
  },
});

export default Home;
