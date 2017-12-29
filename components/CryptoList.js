import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, ScrollView } from 'react-native';
import { Text, List, ListItem, Button } from 'react-native-elements'

const list = [
  {
    title: 'Satoshi\'s Bitcoin',
    icon: 'av-timer'
  },
  {
    title: 'My Litecoin',
    icon: 'av-timer'
  },
	{
		title: 'Maria\'s Ethereum',
		icon: 'av-timer'
	}
]

class CryptoList extends React.Component {
    render() {
      return (
        <ScrollView>
					<Text h2>Public Keys</Text>
					<Button
						large
						icon={{name: 'envira', type: 'font-awesome'}}
						backgroundColor="#59d132"
						title='Add key' />
					<List>
						{
							list.map((item, i) => (
								<ListItem
									key={i}
									title={item.title}
									leftIcon={{name: item.icon}}
								/>
							))
						}
					</List>
        </ScrollView>
      )
    }
}

export default CryptoList;
