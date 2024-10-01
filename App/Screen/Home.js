import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '../Components/Home/Slider';
import Color from '../Shared/Color';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Headline from '../Components/Home/Headline';

const Home = ({ theme, setTheme }) => {
    return (
        <View>
            <View style={styles.h_container}>
                <Text style={[{ color: theme ? Color.light.primary : Color.dark.primary }, styles.header]}>NewsCo.</Text>
                {theme? <MaterialIcons onPress={()=>setTheme(!theme)} name="dark-mode" size={30} color={theme ? Color.light.primary : Color.dark.primary} />: <MaterialIcons onPress={()=>setTheme(!theme)} name="light-mode" size={30} color={theme ? Color.light.primary : Color.dark.primary} />}
            </View>
{/* category sleader */}
            <Slider theme={theme}/>
{/* top headlines */}
            <Headline theme={theme}/>
        </View>
    );
};

const styles = StyleSheet.create({
    h_container: {
        display: "flex",
        gap: 2,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20
    },
    header: {
        textAlign: 'left',
        fontSize: 30,
        fontWeight: 'bold',
    },

});

export default Home;
