import { StyleSheet, Text, View,FlatList, Platform,ScrollView} from 'react-native';
import CourseListItem from './CourseListItem';
import CourseChapters from './CourseChapters';
import React, { FC, useEffect, useState } from "react";



const courses = [
  {
    id:"12345bc19dadc0984940b243",
    headline:"Craft your message",
    description:"Use the teleprompter on Mobile or Web",
    summary: [
      "Scripts",
      "Teleprompter",
      "Trim Words",
      "Sequence Takes"
    ]
  },
  {
    id:"12345c219dadc0984940b2a6",
    headline:"Style your Video",
    description:"Add subtitles, elegant titles, logo, music",
    summary: [
      "Replace Green",
      "Add Captions",
      "Logo & Music",
      "Biz Card (Intro/Outro)"
    ]
  },{
    id:"12345cfbc5011c1135728cb6",
    headline:"Reach Your Audience",
    description:"Web pages with video and social media sharing",
    summary: [
      "Post to Social Media",
      "Personal Video Pages",
      "Interactive Widgets",
      "Live Streaming",
      "Teams"
    ]
  }

]

function MainScreen({navigation})
{   


    useEffect(()=>{
        
    },[])
    const onItemSelected =(id)=>{
        let course=null
        if(id =="12345bc19dadc0984940b243"){
            course = courses[0]
        }else if( id =="12345c219dadc0984940b2a6"){
            course = courses[1]
        }else{course = courses[2]}
        navigation.navigate('CourseChapters',{
            id:course.id,
            headline:course.headline,
            description:course.description,
            summary:course.summary
        })
    }
    
      return (
        <View style={styles.container}>
          <View>
          <Text style={Platform.OS == 'web' ? styles.titleWeb : styles.titleMobile}>BIGVU 101 Crash Course</Text>
          <Text style={Platform.OS == 'web' ? styles.subtitleWeb : styles.subtitleMobile}>Zero editing experience to pro - your journey starts here.               
           Watch step by step video lessons how to make videos with impact.</Text>
          <Text style={Platform.OS == 'web' ? styles.subtitleWeb : styles.titleMobile}></Text>
          </View>
          <View style={{marginTop:-30}}> 
          <FlatList 
            data={courses}
            renderItem = {({item}) => <CourseListItem id={item.id} headline={item.headline} description={item.description} summary={item.summary} onItemSelected={onItemSelected}/>}
            keyExtractor ={item=>item.id}
            horizontal={Platform.OS === 'web'? true:false}
            
            />
          </View>
        </View>
      );
}
export default MainScreen
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    titleWeb:{
      fontStyle:'normal',
      
      height: 24,
      width: 245,
      marginLeft: 42,
      marginTop: 36,
      fontWeight:700,
      color:'#253658',
      fontSize:20
    },
    subtitleWeb:{
      fontStyle:'normal',
      
      height: 40,
      width: 500,
      marginTop:20,
      marginLeft:42,
      color:'#253658',
      fontSize:15
    },
    titleMobile:{
      height: 20,
      width: 220,
      marginLeft: 16,
      marginTop: 15,
      fontStyle:'normal',
      fontWeight:700,
      color:'#253658',
      fontSize:16
    },
    subtitleMobile:{
      height: 50,
      width: 328,
      fontWeight:400,
      fontStyle:'normal',
      marginTop:20,
      marginLeft:16,
      color:'#253658',
      fontSize:12
    },
  });