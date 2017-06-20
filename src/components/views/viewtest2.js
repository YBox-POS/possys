import React,{ Component } from 'react';
import { ScrollView, View, Platform ,Text} from 'react-native';


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