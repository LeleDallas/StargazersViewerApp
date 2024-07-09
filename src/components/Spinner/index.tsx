import LottieView from "lottie-react-native";
import { ActivityIndicator, Platform, View } from "react-native";
import { colors } from "../../styles";

export default () =>
    Platform.OS === "ios" ? (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <LottieView
                style={{ width: "100%", height: "100%" }}
                source={require("../../../assets/spinner2.json")}
                autoPlay
                loop
            />
        </View>) : (
        <View style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <ActivityIndicator size={200} color={colors.buttonActive} />
        </View>
    );