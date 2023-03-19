import { StyleSheet, View,Text, Platform} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableHighlight,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';

function CourseListItem(props){
    let chapters
    const getCourseId=(id)=>{
        if(id == "12345bc19dadc0984940b243"){
            chapters = require('./chapters_course1.json')
          return 1
        }
        if(id == "12345c219dadc0984940b2a6"){
            chapters = require('./chapters_course2.json')
          return 2
        }
        else{
            chapters = require('./chapters_course3.json')
          return 3
        }
    }
    return(
        <View style={Platform.OS == 'web'? styles.itemContainerweb :styles.itemContainermobile }>
            <Text style={[
                (getCourseId(props.id)==1) ? styles.headlineText1 :
                (getCourseId(props.id)==2) ? styles.headlineText2 :
                (getCourseId(props.id)==3) ? styles.headlineText3 : styles.headlineText
            ]
            }>{props.headline}</Text>
            <TouchableHighlight style={styles.onItemClick} onPress={()=>{props.onItemSelected(props.id)}} underlayColor={'grey'}>
            <View style={Platform.OS =='web' ? styles.itemSubContainerweb : styles.itemSubContainermobile}>
                <Image source={
                    (getCourseId(props.id)==1)? require('../assets/logoblue.png') :
                    (getCourseId(props.id)==2) ? require('../assets/logogreen.png'):
                    (getCourseId(props.id)==3) ? require('../assets/logoorange.png') : require('../assets/icon.png')
                } style={Platform.OS=='web'? styles.logoWeb :styles.logoMobile}/>
                
                <View style={styles.videoContainerMobile}>
                <Ionicons name="videocam" size={24} color="white" style={{marginLeft:5}} />
                <Text style={{color:'white',marginTop:3,marginRight:4}}>{chapters.chapters.length} Videos</Text>
                </View>
                <Text style = {styles.textDescriptionMobile}>{props.description}</Text>
                
                <View style={Platform.OS == 'web' ? styles.summaryContainerWeb : styles.summaryContainerMobile}>
                <FontAwesome name="circle" size={10} 
                color={(getCourseId(props.id)==1)? "#28B3F7":
                (getCourseId(props.id)==2)? "#00EA3B" :"#F79F28"}
                style={{
                    position:'absolute',
                    left:15,
                    }}/>
                <Text
                style={{
                    position:'absolute',
                    left:30,
                    top:-3,
                    height: 17,
                    fontWeight:400,
                    fontSize:12,
                    }}
                >{props.summary[0]}</Text>
                
                <FontAwesome name="circle" size={10} 
                color={(getCourseId(props.id)==1)? "#28B3F7":
                (getCourseId(props.id)==2)? "#00EA3B" :"#F79F28"}
                style={{
                    position:'absolute',
                    left:165,
                    }}/>
                <Text
                style={{
                    position:'absolute',
                    left:175,
                    top:-3,
                    height: 17,
                    fontWeight:400,
                    fontSize:12,
                    }}>

                {props.summary[2]}</Text>
               
                </View>
                
                <View style={Platform.OS == 'web' ? styles.summaryContainerWeb : styles.summaryContainerMobile}>
                
                <FontAwesome name="circle" size={10} 
                color={(getCourseId(props.id)==1)? "#28B3F7":
                (getCourseId(props.id)==2)? "#00EA3B" :"#F79F28"}
                style={{
                    position:'absolute',
                    left:15,
                    marginTop:15
                    }}/>
                <Text
                style={{
                    position:'absolute',
                    left:30,
                    top:-3,
                    height: 17,
                    fontWeight:400,
                    fontSize:12,
                    marginTop:15
                    }}
                >
                {props.summary[1]}
                </Text>
                
                <FontAwesome name="circle" size={10} 
                color={(getCourseId(props.id)==1)? "#28B3F7":
                (getCourseId(props.id)==2)? "#00EA3B" :"#F79F28"}
                style={{
                    position:'absolute',
                    left:165,
                    marginTop:15
                    }}/>
                    <Text
                style={{
                    position:'absolute',
                    left:175,
                    top:-3,
                    height: 17,
                    fontWeight:400,
                    fontSize:12,
                    marginTop:15
                    }}
                >
                {props.summary[3]}
                </Text>
                
                </View>
                {(Platform.OS == 'web') ? 
                    
                    (
                    <View style={{
                        backgroundColor:'#253658',
                        position:'absolute',
                        left:305,
                        top:115,
                        height:50,
                        width:50,
                        borderRadius:50
                    }}>
                    <AntDesign name="right" size={25} color="white" style={{
                        position:'absolute',
                        left:12,
                        top:10
                    }}/>
                    </View>
                    )
                    : <View></View>
                }
            
            </View> 
            </TouchableHighlight>
        </View>
    )
}
export default CourseListItem
const styles = StyleSheet.create({
    itemContainermobile:{
        marginLeft:16,
        width:360,
        height:207,
        backgroundColor:'white',
        marginBottom:10
    },
    itemSubContainermobile:{
        borderColor:'#7B8DB1',
        borderRadius:20,
        borderWidth:1,
        height:170,
        width:360,
        backgroundColor:'white',
    },
    itemContainerweb:{
        marginLeft:42,
        height:220,
        width:386,
        backgroundColor:'white',
    },
    itemSubContainerweb:{
        borderColor:'#7B8DB1',
        borderRadius:20,
        borderWidth:1,
        height:180,
        width:386,
        backgroundColor:'white',
        marginTop:-4
    },
    headlineText1:{
        color:'#28B3F7',
        fontSize:20,
        width: 217,
        height: 30,
        fontStyle: 'normal',
        fontWeight: 700,
        marginBottom:10,
        
    },
    headlineText2:{
        color:'#00EA3B',
        fontSize:20,
        width: 217,
        height: 30,
        fontStyle: 'normal',
        fontWeight: 700,
        marginBottom:10,
        
    },headlineText3:{
        color:'#F79F28',
        fontSize:20,
        width: 217,
        height: 30,
        fontStyle: 'normal',
        fontWeight: 700,
        marginBottom:10,
        
        
        
    },headlineText:{
        fontSize:20,
        
        width: 217,
        height: 24,
        fontStyle: 'normal',
        fontWeight: 700,
        marginBottom:20,
    },
    onItemClick:{
        borderRadius:20,
    },
    videoContainerMobile:{
        height: 28,
        width: 105,
        marginLeft: 16,
        marginTop: 16,
        borderWidth:1,
        borderRadius:4,
        backgroundColor:'#a7a2a2',
        borderColor:'white',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    logoMobile:{
        position:'absolute',
        resizeMode: "contain",
        height: 180,
        width: 180,
        left: 174,
        top: -40, 
    },
    logoWeb:{
        position:'absolute',
        resizeMode: "contain",
        height: 160,
        width: 184,
        left: 195,
        top: -28, 
    },
    textDescriptionMobile:{
        width:205,
        height:45,
        color:'#253658',
        fontSize:13,
        fontWeight:700,
        marginLeft:16,
        marginTop:20
    },
    summaryContainerMobile:{
        flexDirection:'row',
        
        marginTop:10
    },
    summaryContainerWeb:{
        flexDirection:'row',
        justifyContent:'left',
        marginTop:10,
    },
    textSummaryMobile:{
    height: 17,
    fontWeight:400,
    fontSize:12,
    },


})