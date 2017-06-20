import React,{ Component } from 'react';
import { ScrollView, View, Platform ,Text} from 'react-native';


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