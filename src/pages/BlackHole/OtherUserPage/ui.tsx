import React, { useMemo, useState } from 'react'
import { Pressable, StyleSheet, Image, View, Text, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ROATE, ScreenHeight } from '../../../assets/size';
import Icon from '../../../iconfont';
import { useBackTo, useGoPage } from '../../../utils/RouterHelper';
import { useToast } from 'native-base';

export interface IState {
    navigation: any;
    route: any;
    dynamics: any;
}
export interface IDispatch {

}
interface IProps {
    navigation: any;
    route: any;
    dynamics: any;
}

export default function Ui({ navigation, route, dynamics }: IProps) {
    const goBack = useBackTo(navigation, route, void 0);
    const chatWithTa = useGoPage(navigation, route, {
        from: {
            user_name: "zhuzaiiBro"
        }
    }, "Chat");
    const toast = useToast();
    const [scrollHeight, setScrollHeight] = useState(0);
    const RenderItem = () => {
        const ImageNum = Math.floor(Math.random() * 10) + 1;
        const imgList: any[] = [];
        if (ImageNum === 1) {
            imgList.push(<Image style={{ width: ROATE(200), marginLeft: "auto", marginRight: "auto", borderRadius: ROATE(12), height: ROATE(160) }} source={{ uri: "http://www.zhuzaibrother.cn/static/upload/2022-5-7-20-40-55-739-99447.jpg" }} />)
        } else if (ImageNum === 2) {
            for (let i = 0; i < ImageNum; i++) {
                imgList.push(<Image style={{
                    borderTopLeftRadius: i === 0 ? ROATE(12) : 0,
                    borderTopRightRadius: i === 1 ? ROATE(12) : 0,
                    borderBottomRightRadius: i === 1 ? ROATE(12) : 0,
                    borderBottomLeftRadius: i === 0 ? ROATE(12) : 0,
                    marginRight: i === 0 ? ROATE(4) : 0,
                    height: ROATE(148), width: ROATE(148)
                }} source={{ uri: "http://www.zhuzaibrother.cn/static/upload/2022-5-7-20-40-55-739-99447.jpg" }} />)
            }
        } else if (ImageNum === 3) {
            for (let i = 0; i < 3; i++) {
                imgList.push(<Image style={{
                    height: ROATE(98), marginRight: i !== 2 ? ROATE(4) : 0, width: ROATE(98), borderTopLeftRadius: i === 0 ? ROATE(12) : 0,
                    borderBottomLeftRadius: i === 0 ? ROATE(12) : 0,
                    borderTopRightRadius: i === 2 ? ROATE(12) : 0,
                    borderBottomRightRadius: i === 2 ? ROATE(12) : 0,
                }} source={{ uri: "http://www.zhuzaibrother.cn/static/upload/2022-5-7-20-40-55-739-99447.jpg" }} />)
            }
        }
        else {
            for (let i = 0; i < 4; i++) {
                imgList.push(<Image style={{
                    borderBottomRightRadius: i === 3 ? ROATE(12) : 0,
                    borderBottomLeftRadius: i === 2 ? ROATE(12) : 0,
                    borderTopRightRadius: i === 1 ? ROATE(12) : 0, borderTopLeftRadius: i === 0 ? ROATE(12) : 0, height: ROATE(148), marginBottom: ROATE(4), marginRight: i % 2 === 0 ? ROATE(4) : 0, width: ROATE(148)
                }} source={{ uri: "http://www.zhuzaibrother.cn/static/upload/2022-5-7-20-40-55-739-99447.jpg" }} />)
            }
        }
        return (<View style={{ flexDirection: "row", paddingHorizontal: ROATE(16) }}>
            <View style={{ backgroundColor: "#333", height: ROATE(32), width: ROATE(32), borderRadius: ROATE(16), justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: ROATE(12), lineHeight: ROATE(12), fontWeight: "500", color: "#ffffff73" }}>
                    06
                </Text>
                <Text style={{ fontSize: ROATE(12), lineHeight: ROATE(12), marginTop: 0, fontWeight: "500", color: "#fff" }}>
                    06
                </Text>
            </View>
            <View style={{ width: ROATE(300), marginLeft: "auto" }}>
                <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                    {imgList}
                </View>
                <Text style={{ fontSize: ROATE(14), marginVertical: ROATE(12), lineHeight: ROATE(22), color: "#000000e6" }}>
                    ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                </Text>

                <Text style={{ fontSize: ROATE(12), color: "#00000045", marginBottom: ROATE(73) }}>?????? {10} ?????? {20}</Text>
            </View>

        </View>)
    }
    const FollowComp = ({ }) => {
        const [isFollow, setIsFollow] = useState(false);
        const clickFollow = () => {
            setIsFollow(prev => !prev);
            toast.show({
                title: isFollow ? "????????????" : "????????????",
                bottom: ROATE(300)
            })
        }
        return (
            <Pressable onPress={clickFollow} style={{ ...sytles.btn, backgroundColor: "transparent" }}>
                <LinearGradient useAngle angle={90} style={{ position: "absolute", width: ROATE(64), height: ROATE(32) }} colors={["#f3fb69", "#98fcb6"]} />
                <Text>{isFollow ? "?????????" : "??????"}</Text>
            </Pressable>
        )
    }
    return (
        <View style={sytles.container}>
            <View style={sytles.header}>
                <Pressable onPress={goBack}>
                    <Icon name='fanhuianniu-zuo' size={ROATE(24)} />
                </Pressable>
                <View style={{ marginLeft: "auto", display: scrollHeight <= 170? "flex": "none", flexDirection: "row" }}>
                    <Pressable style={{ marginRight: ROATE(20) }}>
                        <Icon name='fenxiang' size={ROATE(24)} />
                    </Pressable>
                    <Pressable>
                        <Icon name='gengduo' size={ROATE(24)} />
                    </Pressable>
                </View>
                <View style={{ flexDirection: "row",display: scrollHeight <= 170? "none": "flex", alignItems: "center", marginLeft: ROATE(84) }}>
                    <Text numberOfLines={1} style={{ width: ROATE(120), marginRight: ROATE(8), textAlign: "center", fontSize: ROATE(18), color: "#000000e6", fontWeight: "500" }}>???????????????</Text>
                    <FollowComp />
                </View>

            </View>


            {useMemo(() => <FlatList onScroll={({nativeEvent}) => {
                if(nativeEvent) {
                    setScrollHeight(() => nativeEvent.contentOffset.y);  
                }
            }} ListFooterComponent={() => <View style={{ marginTop: 0, marginBottom: ROATE(48) }}><Text style={{ fontSize: ROATE(12), color: "#00000072", textAlign: "center" }}>?????????</Text>
            </View>} style={{}} bounces={false} ListHeaderComponent={() => <>
                {/* ?????????????????? */}
                <View style={sytles.userInfo}>
                    <Image style={sytles.avatar} source={{ uri: "http://www.zhuzaibrother.cn/static/upload/2022-2-13-20-5-43-381-27feb.jpg" }} />
                    <View>
                        <Text style={sytles.name}>
                            zhuzaiBro
                        </Text>
                        <Text numberOfLines={2} style={sytles.decFont}>
                            ????????????????????????????????????????????????????????? ?????????????????????????????????????????????????????????
                        </Text>
                    </View>

                </View>
                {/* ???????????? */}
                <Text numberOfLines={1} style={{ marginTop: ROATE(12), fontSize: ROATE(12), marginRight: ROATE(16), textAlign: "right", color: "#000000e6" }}>
                    ??????????????????????????????????????????????????????????????????????????
                </Text>

                {/* ?????????????????? */}
                <View style={{
                    flexDirection: "row", paddingHorizontal: ROATE(16),
                    borderBottomWidth: ROATE(1.2), paddingBottom: ROATE(23), marginBottom: ROATE(20), marginTop: ROATE(20), borderColor: "#0000000a"
                }}>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: ROATE(14), fontWeight: "500", color: "#000" }}>??????</Text>
                        <Text style={{ fontSize: ROATE(12), color: "#00000073", }}>3425</Text>
                    </View>
                    <Pressable onPress={chatWithTa} style={{ ...sytles.btn, marginRight: ROATE(10), flexDirection: "row", marginLeft: "auto" }}>
                        <Icon size={ROATE(16)} name='liaotian' />
                        <Text style={{ ...sytles.btnFont, marginLeft: ROATE(4), color: "#fff" }}>??????</Text>
                    </Pressable>
                    <FollowComp />
                </View>
                <Text style={{ marginLeft: ROATE(16), fontSize: ROATE(16), color: "#000000e6", fontWeight: "500", marginBottom: ROATE(16) }}>??????</Text>
            </>}
                data={dynamics} renderItem={({ item, index }) => <RenderItem key={index} />} />, [])}
        </View>
    )
}

const sytles = StyleSheet.create({
    container: {
        paddingTop: ROATE(44),
        backgroundColor: "#fff",
        height: ScreenHeight
    },
    header: {
        flexDirection: "row",
        height: ROATE(44),
        alignItems: "center",
        paddingHorizontal: ROATE(16)
    },
    userInfo: {
        height: ROATE(80),
        marginTop: ROATE(12),
        flexDirection: "row",
        paddingHorizontal: ROATE(16),
    },
    avatar: {
        height: ROATE(80),
        width: ROATE(80),
        borderRadius: ROATE(40),
        marginRight: ROATE(35)
    },
    decFont: {
        fontSize: ROATE(12),
        fontWeight: "400",
        color: "#00000073",
        width: ROATE(228),
        height: ROATE(28),
    },
    name: {
        fontSize: ROATE(18),
        fontWeight: "500",
        color: "#000000e6",
        height: ROATE(34),
        marginTop: ROATE(8),
        marginLeft: "auto",
        width: ROATE(228),
        textAlign: "right"
    },
    btn: {
        width: ROATE(64),
        height: ROATE(32),
        borderRadius: ROATE(5),
        backgroundColor: "#000000e5",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center"
    },
    btnFont: {
        fontSize: ROATE(14),
        fontWeight: "500"
    }
});