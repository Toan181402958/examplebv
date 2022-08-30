import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Easing,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {dataImage} from './data';
import {ImageFile} from './model';
import ImageZoom from 'react-native-image-pan-zoom';
import {ScrollView} from 'react-native';

type Props = {
  id: number;
};
let IS_MOUNTED = false;
var idAdd = 16;
const ViewFile = ({id}: Props) => {
  const [idImage, setIdImage] = useState(id);
  const [list, setList] = useState(dataImage);
  const marginAnim = useRef(new Animated.Value(0)).current;
  const [widthChange, setWidthchange] = useState(1);
  const [widthScreen, setWidthScreen] = useState(0);
  const opacity = useRef(new Animated.Value(0)).current;

  const handleStatus = (item: ImageFile) => {
    let status = true;
    const newList = dataImage.map(val => {
      if (val.id == item.id) {
        status = !val.status;
        return {...val, status: status};
      } else {
        return {...val, status: false};
      }
    });
    setList(newList);
  };

  useEffect(() => {
    IS_MOUNTED = true;
    const newList1 = dataImage.map(val => {
      if (val.id == id) return {...val, status: !val.status};
      else return {...val};
    });
    setList(newList1);

    return () => {
      IS_MOUNTED = false;
    };
  }, []);
  const sizeScrollBar =
    widthChange > widthScreen ? (widthScreen * widthScreen) / widthChange : 0;

  const difference =
    widthScreen > sizeScrollBar ? widthScreen - sizeScrollBar : 1;

  const scrollIndicatorPosition = Animated.multiply(
    marginAnim,
    widthScreen / widthChange,
  ).interpolate({
    inputRange: [0, difference],
    outputRange: [0, difference],
    extrapolate: 'clamp',
  });

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 100,
      useNativeDriver: false,
      easing: Easing.bounce,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 500,
      delay: 500,
      useNativeDriver: false,
    }).start();
  };

  const handleAddImage = () => {
    const new1 = {
      id: idAdd++,
      image: {
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRv8fonXkIq1YfzqDGVzYU3P1nbTFZsQol5g&usqp=CAU',
      },
      type: 'Image',
      status: false,
    };
    setList(val => [...val, new1]);
    console.log('new list: ', list);
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 9, alignItems: 'center', justifyContent: 'center'}}>
        <ImageZoom
          enableDoubleClickZoom={true}
          cropWidth={400}
          cropHeight={340}
          imageWidth={400}
          imageHeight={300}>
          <Image
            style={styles.image}
            source={dataImage
              .filter(val => val.id === idImage)
              .map(e => e.image)}
          />
        </ImageZoom>
        <TouchableOpacity
          onPress={() => handleAddImage()}
          style={{
            height: 50,
            width: 200,
            backgroundColor: 'blue',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#FFFFFF'}}>Add Image</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={{paddingRight: 14}}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollViewContainer}
          onResponderStart={e => {
            console.log('responder: ');
          }}
          onTouchEnd={e => {
            console.log('touch end');
            fadeOut();
          }}
          onTouchStart={e => {
            fadeIn();
            console.log('start: ');
          }}
          onTouchCancel={e => console.log('oncancel:')}
          onLayout={e => {
            setWidthScreen(e.nativeEvent.layout.width);
          }}
          onContentSizeChange={(w, h) => {
            setWidthchange(w);
          }}
          onScrollEndDrag={e => {
            console.log('scroll end Drag: ');
            fadeOut();
          }}
          onScrollAnimationEnd={() => console.log('end')}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: marginAnim,
                  },
                },
              },
            ],
            {
              useNativeDriver: false,
            },
          )}
          scrollEventThrottle={16}>
          {list.map(item => {
            return (
              <TouchableOpacity
                key={item.id}
                onPress={() => {
                  setIdImage(item.id);
                  handleStatus(item);
                  console.log(item.status);
                }}
                style={[styles.imageItem, {padding: item.status ? 5 : 0}]}>
                <Image
                  style={{height: '100%', width: '100%', borderRadius: 5}}
                  source={item.image}
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <Animated.View
          style={{
            position: 'absolute',
            borderRadius: 8,
            bottom: 0,
            width: sizeScrollBar,
            opacity: opacity,
            height: 5,
            transform: [{translateX: scrollIndicatorPosition}],
            // marginStart: scrollIndicatorPosition,
            backgroundColor: '#FF0000',
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  viewImage: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
  },
  image: {
    height: 300,
    width: 400,
    resizeMode: 'cover',
  },
  viewFlatList: {
    width: '100%',
    borderTopWidth: 1,
  },
  flatList: {
    width: '100%',
  },
  imageItem: {
    height: '100%',
    width: 80,
    marginRight: 5,
  },
  scrollContainer: {
    flexDirection: 'row',
    height: '100%',
  },
  scrollViewContainer: {
    height: '100%',
  },
  customScrollBar: {
    backgroundColor: '#000000',
    borderRadius: 3,
    width: 3,
  },
  customScrollBarBackground: {
    backgroundColor: '#52057b',
    position: 'absolute',
    borderRadius: 3,
    height: 6,
    width: '100%',
  },
});
export default ViewFile;
