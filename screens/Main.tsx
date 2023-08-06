import { SafeAreaView } from "react-native-safe-area-context"
import { Button, ButtonStyle, ButtonSize } from "components/Button"

export default function Main({navigation}) {

    const transitionToCameraView = () => {
        navigation.navigate("Meme")
    }

    return (
        <SafeAreaView>
            <Button clickHandler={transitionToCameraView} 
                text="To camera view" 
                style={ButtonStyle.Primary} 
                size={ButtonSize.Small}/>
        </SafeAreaView>
    )
}