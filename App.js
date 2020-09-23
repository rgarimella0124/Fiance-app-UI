import React, { useRef, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
  FlatList,
  Animated,
} from "react-native";
import SlidingUpPanel from "rn-sliding-up-panel";
import Carousel from "react-native-snap-carousel";

import { MaterialIcons } from "@expo/vector-icons";
const Home = () => {
  const Images = [
    {
      image: require("./assets/card-back.png"),
    },
    {
      image: require("./assets/card-back.png"),
    },
    {
      image: require("./assets/card-back.png"),
    },
    {
      image: require("./assets/card-back.png"),
    },
  ];

  const Users = [
    {
      key: "1",
      userImage: require("./assets/Ram.jpeg"),
      userName: "Syed uloom",
      transactionDate: "26 April 20",
      amount: "Rs.434",
      credit: true,
    },
    {
      key: "2",
      userImage: require("./assets/Ram.jpeg"),
      userName: "Syed uloom",
      transactionDate: "25 April 20",
      amount: "Rs.434",
      credit: false,
    },
    {
      key: "3",
      userImage: require("./assets/Ram.jpeg"),
      userName: "Syed uloom",
      transactionDate: "25 April 20",
      amount: "Rs.434",
      credit: false,
    },
    {
      key: "4",
      userImage: require("./assets/Ram.jpeg"),
      userName: "Syed uloom",
      transactionDate: "25 April 20",
      amount: "Rs.434",
      credit: false,
    },
    {
      key: "5",
      userImage: require("./assets/Ram.jpeg"),
      userName: "Syed uloom",
      transactionDate: "25 April 20",
      amount: "Rs.434",
      credit: false,
    },
    {
      key: "6",
      userImage: require("./assets/Ram.jpeg"),
      userName: "Syed uloom",
      transactionDate: "25 April 20",
      amount: "Rs.434",
      credit: false,
    },
    {
      key: "7",
      userImage: require("./assets/Ram.jpeg"),
      userName: "Syed uloom",
      transactionDate: "25 April 20",
      amount: "Rs.434",
      credit: false,
    },
    {
      key: "8",
      userImage: require("./assets/Ram.jpeg"),
      userName: "Syed uloom",
      transactionDate: "25 April 20",
      amount: "Rs.434",
      credit: false,
    },
  ];

  const { width, height } = Dimensions.get("window");
  const carouselRef = useRef(null);

  const [dragRange, setdragRange] = useState({
    top: height - 80,
    bottom: 160,
  });

  const _draggedValue = new Animated.Value(180);

  const ModalRef = useRef(null);
  const renderItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback>
        <Image
          source={item.image}
          style={{ width: 360, style: 340, borderRadius: 20 }}
          resizeMode={"contain"}
        />
      </TouchableWithoutFeedback>
    );
  };
  return (
    <View style={styles.container}>
      <View style={{ paddingTop: 50, paddingHorizontal: 14 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 26, color: "#fff" }}>Welcome,Back</Text>
            <Text style={{ fontSize: 26, color: "#fff" }}>Simba</Text>
          </View>
          <View>
            <Image
              source={{
                uri:
                  "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
              }}
              style={styles.ProfileImage}
            />
            <View style={styles.ProfileImageNotification}></View>
          </View>
        </View>

        <View>
          <Carousel
            layout={"tinder"}
            ref={carouselRef}
            data={Images}
            renderItem={renderItem}
            sliderWidth={width}
            itemWidth={width - 10}
            swipeThreshold={100}
            layoutCardOffset={-12}
            inactiveSlideOpacity={0.4}
            containerCustomStyle={{ overflow: "visible", marginVertical: 30 }}
            contentContainerCustomStyle={{ paddingTop: 14 }}
          />
        </View>
        <View>
          <Text style={{ color: "#fff", opacity: 0.5, marginBottom: 10 }}>
            Send Money
          </Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.AddUser}>
              <View style={styles.AddUserIconbg}>
                <MaterialIcons
                  name="add"
                  color="white"
                  size={28}
                  style={{ alignSelf: "center" }}
                />
              </View>
              <Text style={{ color: "#fff" }}>Add Users</Text>
            </TouchableOpacity>
            <FlatList
              inverted
              horizontal
              keyExtractor={(item) => item.key}
              data={Users}
              renderItem={({ item }) => {
                return (
                  <View style={styles.AddUser}>
                    <Image
                      source={item.userImage}
                      style={styles.AddUserIconbg}
                    />
                    <Text style={{ color: "white" }}>{item.userName}</Text>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <SlidingUpPanel
          ref={ModalRef}
          draggableRange={dragRange}
          animatedValue={_draggedValue}
          backdropOpacity={0}
          snappingPoints={[360]}
          height={height + 20}
          friction={0.9}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "#0c0c0c",
              borderRadius: 24,
              padding: 14,
            }}
          >
            <View style={styles.PannelHandle} />
            <View>
              <Text style={{ marginVertical: 16, color: "#fff" }}>
                Recent Transactions
              </Text>
            </View>
            <View style={{ height: 500, paddingBottom: 10 }}>
              <FlatList
                data={Users}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => {
                  return (
                    <View styles={styles.PannelItemContainer}>
                      <View
                        styles={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View style={{ marginRight: 10 }}>
                          <Image
                            source={item.userImage}
                            style={styles.PannelImage}
                          />
                        </View>
                        <View>
                          <Text style={{ fontSize: 14, color: "#fff" }}>
                            {item.userName}
                          </Text>
                          <Text
                            style={{
                              fontSize: 10,
                              color: "#fff",
                              opacity: 0.6,
                            }}
                          >
                            {item.transactionDate}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Text
                          style={{
                            fontSize: 16,
                            color: "#fff",
                            marginHorizontal: 2,
                          }}
                        >
                          {item.amount}
                        </Text>
                        {item.credit ? (
                          <MaterialIcons
                            name="arrow-drop-up"
                            size={22}
                            color={"green"}
                          />
                        ) : (
                          <MaterialIcons
                            name="arrow-drop-down"
                            size={22}
                            color={"red"}
                          />
                        )}
                      </View>
                    </View>
                  );
                }}
              />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <TouchableOpacity style={styles.PannelButton}>
                <Text style={styles.PannelButtonText}>View Full History</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SlidingUpPanel>
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 0,
  },
  ProfileImage: {
    width: 55,
    height: 55,
    borderRadius: 40,
  },
  ProfileImageNotification: {
    height: 12,
    width: 12,
    backgroundColor: "#4853ef",
    borderRadius: 8,
    position: "absolute",
    right: 6,
    borderWidth: 2,
    borderColor: "#000",
  },
  AddUser: {
    height: 140,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0c0c0c",
    borderRadius: 10,
    marginRight: 14,
  },
  AddUserIconbg: {
    width: 70,
    height: 70,
    backgroundColor: "#000",
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: "center",
  },
  PannelHandle: {
    height: 5,
    width: 50,
    backgroundColor: "#666",
    borderRadius: 6,
    alignSelf: "center",
  },
  PannelItemContainer: {
    borderWidth: 0.4,
    borderColor: "white",
    padding: 14,
    borderRadius: 6,
    marginBottom: 20,
  },
  PannelImage: {
    width: 30,
    height: 30,
    backgroundColor: "#000",
    borderRadius: 40,
  },
  PannelButton: {
    padding: 14,
    width: 200,
    justifyContent: "center",
    backgroundColor: "#1c1c1c",
    borderRadius: 10,
  },
  PannelButtonText: {},
});
