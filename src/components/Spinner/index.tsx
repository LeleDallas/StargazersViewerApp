import LottieView from "lottie-react-native";
import { View } from "react-native";

export default () =>
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <LottieView
            style={{ width: "100%", height: "100%" }}
            source={require("../../../assets/spinner2.json")}
            autoPlay
            loop
        />
    </View>