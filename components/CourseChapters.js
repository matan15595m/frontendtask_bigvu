import { StyleSheet, Text, View,FlatList, Platform,ScrollView,Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import ChapterListItem from './ChapterListItem';
import React, { useEffect, useState } from 'react';
import {Video}from 'expo-av';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialCommunityIcons } from '@expo/vector-icons';


//path to url = courseChapters.chapters[position].asset.resource.stream.url

function CourseChapters({route}){
    let courseChapters = []
    const video = React.useRef(null)
    const id = route.params.id
    const headline = route.params.headline
   

    if(id == "12345bc19dadc0984940b243"){
        courseChapters = require('./chapters_course1.json')
    }else if(id == "12345c219dadc0984940b2a6"){
        courseChapters = require('./chapters_course2.json')
    }else{ courseChapters = require('./chapters_course3.json')}
    
    const[status,setStatus] = useState({})

    const[chapterURL,setChapterURL] = useState(courseChapters.chapters[0].asset.resource.stream.url)
    const[position,setPosition] = useState(0)
    const[durationStopped,setDurationStopped] = useState(0)
    const[chapterStoppedId,setChapterStoppedId] = useState('')
    
    function secondsToTime(secs)
    {

    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);
    var divisor_for_seconds = divisor_for_minutes % 60;
    var seconds = Math.ceil(divisor_for_seconds);
    var obj = {
        "m": minutes,
        "s": seconds
    };
    return obj;
    }
    useEffect(()=>{
        
    },[])
    return(
        <View style={Platform.OS == 'web' ? styles.containerWeb : styles.containerMobile}>
            <View style={Platform.OS == 'web' ? styles.videoContainerWeb :styles.videoContainerMobile}>
                 <Video
                ref={video}
                style={Platform.OS == 'web'? styles.videoWeb :styles.videoMobile}
                source={{uri:chapterURL}}
                useNativeControls
                resizeMode="contain"
                isLooping ={false}
                onPlaybackStatusUpdate={setStatus}
                isMuted={true}
                shouldPlay={false}
                rate={courseChapters.chapters[position].asset.resource.stream.videoBitrate}
                /> 
                
            </View>
            
            <View style={Platform.OS == 'web' ? styles.headlineContainerWeb :styles.headlineContainerMobile}>
            <Text style={Platform.OS =='web' ? styles.headlineTextWeb:styles.headlineTextMobile}>{headline}</Text>
            {Platform.OS == 'web' ? <MaterialCommunityIcons name="medal-outline" size={24} color="#253658" style={{marginTop:25,marginLeft:65}}/>:
            <Image source={require('../assets/medal.png')} style={{marginTop:25,
            position:'absolute',
            left:290,
            }} />
            }
            
            <Text style={styles.textComplete}>0/{courseChapters.chapters.length}</Text>
            </View>
            <View style = {Platform.OS == 'web' ? styles.listContainerWeb: styles.listContainerMobile}>
                <FlatList
                data={courseChapters.chapters}
                renderItem = {({item,index}) => 
                <ChapterListItem headline={item.headline} 
                chapterTitle={item.title} 
                duration={secondsToTime(item.asset.resource.duration)}
                id={item.id}
                onItemSelected = {setChapterURL}
                chapterURL={item.asset.resource.stream.url}
                myPosition={index}
                currentSelectedPosition={position}
                setSelectedChapterPosition={setPosition}
                setDurationStopped = {setDurationStopped}
                video = {video.current}
                />
            }
                keyExtractor ={item=>item.id}
                />
            </View>
            
        </View>
    )
}

export default CourseChapters

const styles = StyleSheet.create({
    containerMobile: {
      flex: 1,
      backgroundColor: '#fff',
    },
    containerWeb: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection:'row'
      },
    videoContainerMobile:{
        width:'100%',
        aspectRatio:16/9,
        borderColor:'#7B8DB1',
        borderRadius:10,
        marginTop:30,
        paddingHorizontal:10
        
    },
    videoContainerWeb:{
        width:640,
        height:360,
        borderColor:'#7B8DB1',
        borderWidth:1,
        borderRadius:10,
        marginTop:50,
        marginLeft:20,
    },
    headlineTextMobile:{
        color:'#253658',
        fontSize:20,
        fontWeight:700,
        marginLeft:50,
        marginRight:40,
        marginTop:20
    },
    headlineTextWeb:{
        color:'#253658',
        fontSize:20,
        fontWeight:700,
        marginLeft:16,
        
        marginTop:20
    },
    headlineContainerMobile:{
        flexDirection:'row'
    },
    headlineContainerWeb:{
        flexDirection:'row',
        marginTop:30,
        marginLeft:21
    },
    listContainerMobile:{
        width:'95%',
        height:'40%',
        borderColor:'#7B8DB1',
        borderWidth:1,
        borderRadius:5,
        marginTop:30,
        marginLeft:10
        
        
    },
    listContainerWeb:{
        position:'absolute',
        width:490,
        height:300,
        left:700,
        top:100,
        borderColor:'#7B8DB1',
        borderWidth:1,
        borderRadius:5,
    },
    videoMobile:{
        flex:1,
        height:'99%',
        width:'100%',
        borderRadius:9
    },
    videoWeb:{
        width:'100%',
        height:'100%',
        alignSelf:'stretch',
        borderRadius:9
    },
    textComplete:{
        position:'absolute',
        top:25,
        left:310,
        fontSize:16,
        color:'#253658',
        fontWeight:700
    }
  });
  