import React, { Component } from 'react';
import { Text, View, FlatList, Image, Dimensions, ScrollView, TextInput, TouchableOpacity, ActivityIndicator, ImageBackground } from 'react-native';
// import Swiper from 'react-native-swiper';

import styles from './constants/styles';

var { height, width } = Dimensions.get('window');

const data = {
    categories: [
        { id: 1, name: 'Hà Nội', image: './assets/hanoi.jpg' },
        { id: 2, name: 'Đà Nẵng', image: './assets/danang.jpg' },
        { id: 3, name: 'Sài Gòn', image: './assets/hcm.jpg' },
    ],
    girls: [
        { id: 1, categorie_id: 1, name: 'Tuyết Ngọc', price: '1000k', detail: 'Tiểu Cần - Trà Vinh', image: './assets/tuyetngoc.jpg' },
        { id: 2, categorie_id: 1, name: 'Hương Giang', price: '1000k', detail: 'Bảo Lộc - Lâm Đồng', image: './assets/huonggiang.jpg' },
        { id: 3, categorie_id: 1, name: 'Đức Silva', price: '1000k', detail: 'QTân Bình - TPHCM', image: './assets/ducsilva.jpg' },
        { id: 4, categorie_id: 1, name: 'Phú Long', price: '100k', detail: 'Ba Tri - Bến Tre', image: './assets/phulong.jpg' },
        { id: 5, categorie_id: 2, name: 'Hoàng Lão Tà', price: '100k', detail: 'TP Huế - Huế', image: './assets/hoangbd.jpg' },
        { id: 6, categorie_id: 2, name: 'Song Van', price: '1000k', detail: '- TPHCM', image: './assets/tuyetngoc.jpg' },
        { id: 7, categorie_id: 3, name: 'Huynh Duc', price: '1000k', detail: '- Hà Tĩnh', image: './assets/tuyetngoc.jpg' },
        { id: 8, categorie_id: 3, name: 'Phu An', price: '1000k', detail: '- TPHCM', image: './assets/tuyetngoc.jpg' },
        { id: 9, categorie_id: 3, name: 'Linh Nhi', price: '1000k', detail: 'Q1 - TPHCM', image: './assets/hotgirl.png' },
        { id: 10, categorie_id: 3, name: 'Maria Ozawa', price: '1000k', detail: 'Q3 - TPHCM', image: './assets/tuyetngoc.jpg' },

    ]
}

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // dataBanner: [],
            isLoading: true,
            dataCategories: [],
            selectCatg: 0,
            dataFriend: [],
            image: null
        }
    }

    componentDidMount() {
        const url = 'https://raw.githubusercontent.com/phulongnls/raw-data/master/demo-girl';
        return fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {

                console.log('responseJson==>>', responseJson.categories)
                this.setState({
                    isLoading: false,
                    dataCategories: responseJson.categories,
                    dataFriend: responseJson.girls
                })
            })
            .catch((error) => {
                console.log(error);
            });
        // this.setState({
        //     dataCategories: data.categories,
        //     dataFriend: data.girls
        // })
    }

    _renderItem(item) {
        return (
            <TouchableOpacity
                style={[styles.divCategories, { backgroundColor: item.color }]}
                onPress={() => this.setState({ selectCatg: item.id })}
            >
                {/* <ImageBackground source={`${item.image}`} style={styles.imageBackground}>
                    <Text style={{ fontWeight: 'bold', fontSize: 40, textAlign: 'center', color: '#d10202' }}>{item.name}</Text>
                </ImageBackground> */}
                <ImageBackground source={{ uri: item.image }} style={styles.imageBackground}>
                    <Text style={{ fontWeight: 'bold', fontSize: 40, textAlign: 'center', color: '#d10202' }}>{item.name}</Text>
                </ImageBackground>
            </TouchableOpacity>
        )
    }

    _renderItemFriend(item) {
        let catg = this.state.selectCatg
        if (catg == 0 || catg == item.categories) {
            return (
                <TouchableOpacity style={styles.divFood}>
                    <Image
                        style={styles.imageFood}
                        resizeMode="contain"
                        source={{uri: item.image}}
                    />
                    <View
                        style={{ height: ((width / 2) - 20) - 90, backgroundColor: 'transparent', width: ((width / 2) - 20) - 10 }}
                    ></View>
                    <Text style={{ fontWeight: 'bold', fontSize: 22, textAlign: 'center' }}>
                        {item.name}
                    </Text>
                    <Text>{item.detail}</Text>
                    <Text style={{ fontSize: 20, color: 'green' }}>
                        {item.price} vnđ
                    </Text>
                </TouchableOpacity>
            )
        }
    }

    render() {
        const { dataCategories, selectCatg, dataFriend } = this.state;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.categories}>
                        <Text style={styles.titleCatg}>Địa chỉ {selectCatg}</Text>
                        <FlatList
                            horizontal={true}
                            data={dataCategories}
                            renderItem={({ item }) => this._renderItem(item)}
                            keyExtractor={(item, index) => index.toString()}
                        />
                        <FlatList
                            // horizontal={true}
                            data={dataFriend}
                            numColumns={2}
                            renderItem={({ item }) => this._renderItemFriend(item)}
                            keyExtractor={(item, index) => item.id}
                        />
                        <View style={{ height: 20 }} />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

