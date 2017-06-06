import React,{ Component } from 'react';
import { ScrollView, View, Platform } from 'react-native';
import { PricingCard,Text } from 'react-native-elements';


class viewtest3 extends Component{
    render(){
        return(
            <ScrollView>
                <Text>viewtest3</Text>
            </ScrollView>
        )
    }
}

viewtest3.navigationOptions = {
    title:'viewtest3'
};

export default viewtest3;