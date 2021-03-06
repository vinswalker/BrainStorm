import React, { Component } from 'react'
import { Image, View, Picker, StyleSheet, Text, TouchableOpacity } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
class QuesPaper extends Component {
    constructor() {
        super()

        this.state = {
            semester: '',
            branch: '',
            subjects: ''

        }
    }

    render() {
        const semester = ['Please Select Any...','1st', '2nd', '3rd', '4th', '5th', '6th', '7th']
        const branch = ['Please Select Any...','CSE', 'CIVIL', 'EE', 'EEE', 'ECE', 'ME', 'AUTOMOBILE']
        const subjects = ['Please Select Any...','Empty']
        const Item = Picker.Item
        return (
            <View>
                <View style={styles.head}>
                    <Image style={{ width: wp('20'), height: hp('12'), marginTop: 20, marginLeft: 20 }} source={require('./logo/quespaper.png')} />
                    <Text style={styles.heading1}>Get Question Papers !</Text>
                </View>
                <View style={{ borderWidth: 1, margin: 5, borderRadius: 10 }}>
                    <Text style={styles.heading2}>SELECT SEMESTER</Text>
                    <Picker itemStyle={styles.picker} onValueChange={(itemValue, itemIndex) =>
                            this.setState({ semester: itemValue })
                        }
                            selectedValue={this.state.semester}>
                        {
                            semester.map((item, key) => {
                                return (<Item key={key} label={item} value={item} />);
                            })
                        }
                    </Picker>
                </View>
                <View style={{ borderWidth: 1, margin: 5, borderRadius: 10 }}>
                    <Text style={styles.heading2}>SELECT BRANCH</Text>
                    <Picker style={styles.picker} onValueChange={(itemValue, itemIndex) =>
                            this.setState({ branch: itemValue })
                        }
                            selectedValue={this.state.branch}>
                        {
                            branch.map((item, key) => {
                                return (<Item key={key} label={item} value={item} />);
                            })
                        }
                    </Picker>
                </View>
                <View style={{ borderWidth: 1, margin: 5, borderRadius: 10 }}>
                    <Text style={styles.heading2}>SELECT SUBJECT</Text>
                    <Picker style={styles.picker} onValueChange={(itemValue, itemIndex) =>
                            this.setState({ subjects: itemValue })
                        }
                            selectedValue={this.state.subjects}>
                        {
                            subjects.map((item, key) => {
                                return (<Item key={key} label={item} value={item} />);
                            })
                        }
                    </Picker>
                </View>

                <View style={styles.btn}>
                    <TouchableOpacity style={styles.button} title=''>
                        <Text style={{ fontFamily: "Comic Sans MS", fontSize: 20, color: 'white' }}>Get Question Papers !</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )

    }
}
const styles = StyleSheet.create({
    heading1: {
        fontWeight: 'bold',
        fontSize: 25,
        position: 'absolute',
        top: '40%',
        right: '7%',
        fontFamily: "Comic Sans MS",

    },
    button: {
        alignItems: 'center',
        backgroundColor: '#00b8ff',
        paddingTop: 8,
        height: hp('5'),
        borderRadius: 5
    },
    head: {
        height: hp('20%'),
    },
    heading2: {
        fontSize: 10,
        paddingTop: 20,
        marginLeft: 10,
        fontFamily: "Comic Sans MS",
    },
    btn: {
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
    }
});

export default QuesPaper
