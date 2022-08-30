import React, {useRef, useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface input {
  value: string;
}

const ScrollViewInput = () => {
  const [listInput, setListInput] = useState<Array<input>>([
    {
      value: 'value',
    },
  ]);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleAdd = () => {
    const newItem = {
      value: 'value',
    };
    setListInput(val => [...val, newItem]);
    scrollViewRef.current?.scrollToEnd();
  };
  return (
    <View style={{flex: 1, alignItems: 'center', marginVertical: 30}}>
      <ScrollView ref={scrollViewRef}>
        {listInput.map((item, index) => {
          return (
            <View
              style={{flexDirection: 'row', width: '100%', marginBottom: 5}}>
              <TextInput
                style={{borderWidth: 1, width: 300, height: 40}}
                placeholder={item.value}
              />
              {index + 1 == listInput.length ? (
                <TouchableOpacity
                  onPress={() => handleAdd()}
                  style={{
                    width: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={require('./assets/plus.png')}
                    style={{height: 30, width: 30}}
                  />
                </TouchableOpacity>
              ) : (
                <></>
              )}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ScrollViewInput;
