import React, { useEffect, useState } from 'react';
import CameraRoll from '@react-native-community/cameraroll';
import { ScrollView, Image, Text, View,  Pressable } from 'react-native';
import { ROATE, ScreenHeight } from '../../assets/size';
import {PresenceTransition } from 'native-base'
import Icon from '../../iconfont';

export interface IState {
    route: any;
    navigation: any;
    imgList: any[];
}
export interface IDispatch {
    addImgs: Function
}
interface IProps {
    route: any;
    navigation: any;
    imgList: any[];
    addImgs: Function;
}
export default function CheckPictures({ route, navigation, imgList, addImgs }: IProps) {

    const IMAGE_SIZE = ROATE(122);
    let choosedList: any[] = []; // 记录选中的照片或者视频的索引，便于直接中photos数据中读取
    const [photos, setPhotos] = useState([]) as any;
    const [title, setTitle] = useState([]) as any;

    useEffect(() => {
        CameraRoll.getAlbums({ assetType: "All" }).then(r => {
            setTitle(() => r);
        })
        CameraRoll.getPhotos({
            first: 120,
            assetType: "All",
        }).then(r => {
            setPhotos(() => r.edges.map((item: CameraRoll.PhotoIdentifier) => ({
                ...item.node.image,
            })
            ));
            console.log(photos, 777);
        });
        return () => {
            setPhotos((prev) => [...prev])
        }
    }, []);


    function Img({ item, index }) {
        const { uri } = item;
        const [choosed, setChoosed] = useState(false);
        const chooseImage = () => {
            // 如果没有被选中, 加上
            if (!choosed) {
                choosedList.push(item);
                setChoosed(() => true);
                return;
            }
            setChoosed(() => false);
            const index = choosedList.indexOf(item);
            choosedList = choosedList.slice(0, index).concat(choosedList.slice(index + 1, choosedList[choosedList.length]));
        }
        return (
            <Pressable onPress={chooseImage} style={{ width: IMAGE_SIZE, height: IMAGE_SIZE, padding: 0, marginHorizontal: (index !== 0 && index % 3 === 1) ? ROATE(6) : 0, marginBottom: ROATE(6) }}>
                <View style={{
                    height: IMAGE_SIZE, width: IMAGE_SIZE, display: choosed ? "flex" : "none", justifyContent: "center", alignItems: "center",
                    position: "absolute", left: 0, top: 0, zIndex: 1,
                    backgroundColor: "rgba(245,245,245, 0.2)"
                }}>
                    <Icon size={ROATE(36)} name='chengong' />
                </View>
                <Image style={{ width: IMAGE_SIZE, height: IMAGE_SIZE }}
                    source={{ uri }} />
            </Pressable>)
    }

    function Pictures() {
        return (
            photos.map((item, index) => {
                return (<Img index={index} key={index} item={item} />)

            })
        )
    }



    return (
        <ScrollView style={{ height: ScreenHeight }} bounces={false}>
            <View style={{
                backgroundColor: "#fff", flexDirection: "row", justifyContent: "space-between",
                padding: ROATE(18), paddingTop: ROATE(44), height: ROATE(88)
            }}>
                <Pressable style={{ position: "absolute", bottom: ROATE(16), left: ROATE(16) }} onPress={() => navigation.goBack()}>
                    <Icon color='#FFFFFF' size={ROATE(24)} name='fanhuianniu-zuo' />
                </Pressable>
                <Pressable onPress={() => {}} style={{marginLeft: "auto", marginRight: "auto"}}>
                    <Text onPress={() => {
                        if (!imgList) { imgList = [] }
                        addImgs(imgList, choosedList);
                        navigation.goBack()
                    }} style={{ fontSize: ROATE(14), textAlign: "center", color: "#000" }}>全部</Text>
                    <PresenceTransition>
                    <View>
                    
                    </View>
                    </PresenceTransition>
                </Pressable>
            </View>

            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                <Pictures />
            </View>

            <Pressable>

            </Pressable>
        </ScrollView>
    )
}
