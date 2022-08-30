import React, {Ref, useImperativeHandle, useRef} from 'react';
import {Text, TextInput, View} from 'react-native';

function Child(props: any, ref: any) {
  const refTextInput = useRef(null);
  const text = 'Ref View';

  useImperativeHandle(ref, () => ({
    foo: () => {
      console.log(text);
    },
  }));

  const foo = () => {
    console.log('use Ref with foo');
    // refTextInput.current.focus();
  };
  return (
    <View>
      <TextInput ref={refTextInput} placeholder="ref demo" />
    </View>
  );
}

export default React.forwardRef(Child);
