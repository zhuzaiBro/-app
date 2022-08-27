import React from 'react'
import { Keyboard, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { ROATE, ScreenHeight } from '../../../assets/size';
import Icon from '../../../iconfont';
import usePos from '../../../hooks/usePosition';
import WebView from 'react-native-webview';

export default function Ui({navigation}) {
  const pos = usePos();
  // console.log(pos.location.address)
  return (
    <View onTouchStart={() => {
      Keyboard.dismiss();
    }} style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => {
            navigation.goBack();
        }}>
          <Icon name="fanhuianniu-zuo" size={ROATE(24)} />
        </Pressable>
        <View style={{ flexDirection: "row", paddingHorizontal: ROATE(12), height: ROATE(36), width: ROATE(278), borderWidth: ROATE(1.2), borderRadius: ROATE(6), marginLeft: ROATE(6), alignItems: "center" }}>
          <Icon name='sousuo' size={ROATE(24)} />
          <TextInput style={{ padding: 0 }} placeholder='搜索地点' placeholderTextColor="#00000073" />

        </View>
        <Pressable style={{ marginLeft: "auto" }}>
          <Text style={{ fontSize: ROATE(14), color: "#000000e6" }}>搜索</Text>
        </Pressable>
      </View>
      <Pressable style={{marginTop: ROATE(20), paddingBottom: ROATE(26), marginBottom: ROATE(16), borderBottomWidth: ROATE(1.2), borderColor: "#ececec"}}>
        <Text style={{color: "#5B764A"}}>不显示位置</Text>
      </Pressable>
      <View style={{ }}>
        <Pressable>
          <Text style={{ fontSize: ROATE(14), fontWeight: "500", color: "#000000e5", marginBottom: ROATE(4) }}>{pos?.location.poiName}</Text>
          <Text numberOfLines={1} style={{ borderBottomWidth: ROATE(1.2), borderColor: "#ececec", paddingBottom: ROATE(4), fontSize: ROATE(12), fontWeight: "400", color: "#00000073" }}>{pos?.location.address}</Text>
        </Pressable>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: ScreenHeight,
    backgroundColor: "#fff",
    paddingHorizontal: ROATE(16)
  },
  header: {
    height: ROATE(88),
    paddingTop: ROATE(44),
    flexDirection: "row",
    alignItems: "center"
  }
})