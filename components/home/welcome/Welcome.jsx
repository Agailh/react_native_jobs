import {useState} from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { useRouter } from 'expo-router'
import { icons, SIZES } from '../../../constants'
import styles from './welcome.style'

const jobTypes = ["Full-time", "Part-time", "Freelance", "Internship" ];

const Welcome = ({searcTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Full-time')

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Helloww Ilham</Text>
        <Text style={styles.welcomeMessage}>Find your Perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searcTerm}
            onChangeText={(text)=> setSearchTerm(text)}
            placeholder="what are you looking for?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList 
        data={jobTypes}
        renderItem={({item})=> (
          <TouchableOpacity style={styles.tab(activeJobType, item)}
          onPress={()=> {
            setActiveJobType(item);
            router.push(`/search/${item}`)
          }}>
            <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item=>item}
        contentContainerStyle={{columnGap: SIZES.small}}
        horizontal
        />

      </View>
    </View>
  )
}

export default Welcome