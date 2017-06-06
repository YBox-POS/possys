import React,{ Component } from 'react';
import { ScrollView, View, Platform } from 'react-native';
import { PricingCard,Text } from 'react-native-elements';


class viewtest2 extends Component{
    render(){
        return(
            <ScrollView>
                <Text>viewtest2</Text>
            </ScrollView>
        )
    }
}

viewtest2.navigationOptions = {
    title:'viewtest2'
};

export default viewtest2;