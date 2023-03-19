import { StyleSheet, View,Text, Platform} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableHighlight,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 



function ChapterListItem(props){

    
    return(
        <TouchableHighlight style={styles.onItemClick} 
        onPress={()=>{
            
            props.setSelectedChapterPosition(props.myPosition)
            props.onItemSelected(props.chapterURL)

        }}  
         underlayColor={'grey'}>

        <View style={(Platform.OS == 'web') && (props.myPosition == props.currentSelectedPosition) ? styles.itemContainerWebSelected :
         (Platform.OS == 'web') ? styles.itemContainerWeb :
         (Platform.OS != 'web') && (props.myPosition == props.currentSelectedPosition) ? styles.itemContainerMobileSelected:
         (Platform.OS != 'web') && (props.myPosition != props.currentSelectedPosition) ? styles.itemContainerMobile:styles.itemContainerMobile
        }>
        
        <Feather name="play-circle" size={24} color="#253658" style={{marginLeft:5,marginTop:5}} />
            <Text style={styles.textTitle}>{props.chapterTitle}</Text>
            <Text style ={styles.textDuration}>{ (props.duration.m == 0 && props.duration.s ==60) ? (props.duration.m+1): props.duration.m}:{(props.duration.s < 10 ) ? "0" + props.duration.s : 
            (props.duration.s == 60) ? "00"
            : props.duration.s  } </Text>
        
        </View>
        </TouchableHighlight>
    )
}
export default ChapterListItem

const styles = StyleSheet.create({
    itemContainerMobile:{
        flexDirection:'row',
        height:50,
        borderRadius:10,
        width:'100%',
        borderBottomColor:'gainsboro',
        borderBottomWidth:1,
        backgroundColor:'white'
    },
    itemContainerMobileSelected:{
        flexDirection:'row',
        height:50,
        borderRadius:10,
        width:'100%',
        borderBottomColor:'gainsboro',
        borderBottomWidth:1,
        backgroundColor:'#f1f0f0'
    },
    itemContainerWeb:{
        flexDirection:'row',
        width:'100%',
        borderBottomColor:'gainsboro',
        borderBottomWidth:0.5,
        height:45,
        borderRadius:10,
    },
    itemContainerWebSelected:{
        flexDirection:'row',
        width:'100%',
        borderBottomColor:'gainsboro',
        borderBottomWidth:0.5,
        height:45,
        borderRadius:10,
        backgroundColor:'#e3e1e1'
    },
    textTitle:{
        marginLeft:5,
        marginTop:8,
        fontWeight:400,
        color:"#253658",
        fontSize:13,
        width:280,
        height:400,
    },
    textDuration:{
        position:'absolute',
        fontWeight:500,
        color:"#253658",
        fontSize:15,
        left:315,
        top:8
    },
    onItemClick:{
        borderRadius:10,   
    },


})