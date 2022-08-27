import { Actionsheet } from 'native-base';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView, PermissionsAndroid, TouchableOpacity, Pressable, Keyboard } from 'react-native';
import Video from 'react-native-video';
import { ROATE, ScreenHeight } from '../../assets/size';
import Icon from '../../iconfont';


(async () => {

    await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);

})();

export interface IState {
    navigation: any;
    route: any;
    imgList: any[];
    video: any;
}

export interface IDispatch {
    deletePictures: Function
}

interface IProps {
    navigation: any;
    route: any;
    deletePictures: Function;
    imgList: any[];
    video: any;
}

export default function Relaese({ navigation, route, deletePictures, imgList, video }: IProps) {



    const [content, setContent] = useState("");
    const [chooseImg, setChooseImg] = useState(false);
    // 控制用户输入的话题
    const [title, setTitle] = useState("")
    let isTitle = useRef(false).current;
    useEffect(() => {
        // console.log(imgList)
    }, [])


    const imgs = imgList.map((it: any, index) => {
        const delete_pic = () => {
            deletePictures(index, imgList);
        }
        return (
            <View>
                <Pressable onPress={delete_pic} style={{ position: "absolute", right: ROATE(4), top: ROATE(4), zIndex: 2 }}>
                    <Icon name='guanbi-heidi' size={ROATE(24)} />
                </Pressable>

                <Image key={index} style={{ marginHorizontal: ROATE(2), width: ROATE(122), height: ROATE(122) }} source={{ uri: it.uri }} />
            </View>

        )
    });

    const Videos = () => {
        if (video.uri) {
            return <Video source={{ uri: video.uri }} />
        }
        return <></>
    }

    return (

        <View onTouchStart={() => {
            Keyboard.dismiss();
        }} style={styles.container}>
            <View style={{ flexDirection: "row", height: ROATE(44), paddingHorizontal: ROATE(16), alignItems: "center" }}>
                <Pressable onPress={() => {
                    navigation.goBack();
                }}><Icon name='fanhuianniu-zuo' size={ROATE(24)} />
                </Pressable>
                <Pressable style={styles.btn} >
                    <Text style={{ fontSize: ROATE(14), color: "#ffffffe6", textAlign: "center" }}>发布</Text>
                </Pressable>

            </View>
            <View style={styles.textArea} >
                <TextInput multiline={true} value={content}
                    onChangeText={(text) => { 
                        const reg = /^#[[\u4e00-\u9FA5]]+ $/; 
                        let res;
                        while (res = reg.exec(text)) {
                            console.log(res[1]);
                        }
                        setContent(() => text) 
                    }}
                    textAlignVertical="top" placeholder='尽情发挥吧～' />

                <View style={{ flexDirection: "row", marginTop: "auto" }}>
                    <Pressable style={styles.chooose}>
                        <Icon name='huati' size={ROATE(28)} />
                    </Pressable>
                    <View style={{ marginHorizontal: ROATE(8), height: ROATE(24), width: ROATE(1.2), backgroundColor: "#aaa", marginTop: ROATE(2) }} />
                    <Pressable onPress={() => {
                        navigation.navigate("SearchLocation")
                    }} style={styles.chooose}>
                        <Icon name='dingwei' size={ROATE(28)} />
                    </Pressable>
                </View>
            </View>


            <View style={{ flexWrap: "wrap", width: ROATE(375), flexDirection: "row" }}>

                {imgs || <Videos />}
                <Pressable style={{
                    width: ROATE(122), height: ROATE(122), justifyContent: "center", alignItems: "center"
                }}
                    onPress={() => setChooseImg(() => true)}>
                    <Icon name='tianjia' size={ROATE(36)} />
                </Pressable>



            </View>

            <Actionsheet hideDragIndicator isOpen={chooseImg} onClose={() => {
                setChooseImg(() => false);
            }}>
                <Actionsheet.Content style={{ height: ROATE(205), backgroundColor: "#fff" }}>
                    <Pressable onPress={() => {
                        setChooseImg(() => false);
                        navigation.navigate("TakePicture")
                    }} style={{ height: ROATE(52), borderColor: "#ececec", borderBottomWidth: ROATE(1.2), justifyContent: "center", width: ROATE(375) }}>
                        <Text style={styles.fontS14W5}>
                            拍照
                        </Text>
                    </Pressable>
                    <Pressable onPress={() => {
                        navigation.navigate("Picker");
                        setChooseImg(() => false);
                    }} style={{ height: ROATE(52), borderColor: "#ececec", borderBottomWidth: ROATE(1.2), justifyContent: "center", width: ROATE(375) }}>
                        <Text style={styles.fontS14W5}>
                            从相册选择
                        </Text>
                    </Pressable>
                    <View style={{ height: ROATE(6), width: ROATE(375), backgroundColor: "#f5f5f5" }} />
                    <Pressable onPress={() => {
                        setChooseImg(() => false);
                    }} style={{ justifyContent: "center", marginTop: ROATE(30), width: ROATE(375) }}>
                        <Text style={styles.fontS14W5}>取消</Text>
                    </Pressable>
                </Actionsheet.Content>
            </Actionsheet>


        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        height: ScreenHeight,
        backgroundColor: "#fff",
        paddingTop: ROATE(44)
    },
    textArea: {
        height: ROATE(220),
        backgroundColor: "#fff",
        borderTopWidth: ROATE(1.2),
        borderBottomWidth: ROATE(1.2),
        borderColor: "#ececec",
        padding: ROATE(16)
    },
    btn: {
        backgroundColor: "#000000e5",
        width: ROATE(64),
        marginLeft: "auto",
        height: ROATE(28),
        borderRadius: (4),
        justifyContent: "center",
        alignItems: "center"
    },
    chooose: {
        // backgroundColor: "#000000e6",
        // height: ROATE(28),
        // width: ROATE(28),
        borderRadius: ROATE(8),
        justifyContent: 'center',
        alignItems: "center",
    },
    fontS14W5: {
        fontSize: ROATE(14),
        fontWeight: "500",
        color: "#000000e5",
        textAlign: "center",
    }
})
