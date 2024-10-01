import React from 'react'
import { Dimensions, FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import GlobalApi from '../../Services/GlobalApi'
import Color from '../../Shared/Color'

const Headline = ({theme}) => {
    const [headlines, setHeadlines]=React.useState([])

    React.useEffect(()=>{
        getHeadlineApi()
    }, [])

    const getHeadlineApi=async()=>{
        const res = (await GlobalApi.getHeadline).data;
        setHeadlines(res.articles)
    }
  return (
    <View style={{marginTop: 30}}>
        <FlatList showsHorizontalScrollIndicator={false} horizontal data={headlines} renderItem={({item})=>(
            <TouchableOpacity style={{width: Dimensions.get('screen').width*0.80, marginRight: 15}}>
                <Image source={{uri: item.urlToImage}} style={{height: Dimensions.get('screen').width*0.77, borderRadius: 10}}/>
                <Text numberOfLines={3} style={{color: theme? Color.light.text: Color.dark.text, marginTop: 10, fontSize: 20, fontWeight: "bold"}}>{item.title}</Text>
                <Text style={{color: theme? Color.light.border: Color.dark.border, marginTop: 5, fontSize: 15}}>{item.source.name}</Text>
            </TouchableOpacity>
            
        )}/>
    </View>
  )
}

export default Headline