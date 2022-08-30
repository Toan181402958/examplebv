import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {data} from './data';
import {RowData, TableData} from './model';

export interface TableProps {
  isMultipleExpand: boolean;
}

interface itemList {
  item: TableData;
  index: number;
}

const Table = ({isMultipleExpand}: TableProps) => {
  const [select, setSelect] = useState(data);

  const ItemList: React.FC<itemList> = ({item, index}) => {
    const handleOnpress = () => {
      let status1 = true;
      if (!isMultipleExpand) {
        const newList = select.map(val => {
          if (val.id == item.id) {
            status1 = !val.isSelected;

            return {...val, isSelected: status1};
          } else {
            return {...val, isSelected: false};
          }
        });
        setSelect(newList);
      } else {
        const newList = select.map(val => {
          if (val.id == index) {
            status1 = !val.isSelected;
            return {...val, isSelected: status1};
          } else {
            return val;
          }
        });
        setSelect(newList);
      }
    };
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            handleOnpress();
          }}
          style={[styles.itemView]}>
          <Text>{item.title}</Text>
          <Image
            style={styles.icon}
            source={
              select[index].isSelected
                ? require('./assets/icon_down.png')
                : require('./assets/icon_left1.png')
            }
          />
        </TouchableOpacity>
        <View
          style={{
            height: select[index].isSelected ? 100 : 0,
          }}>
          <FlatList
            data={item.listRow}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <ItemRow
                id={item.id}
                name={item.name}
                typeFile={item.typeFile}
                status={item.status}
                date={item.date}
                nameStaff={item.nameStaff}
              />
            )}
          />
        </View>
      </View>
    );
  };

  const ItemRow: React.FC<RowData> = ({
    id,
    name,
    typeFile,
    status,
    date,
    nameStaff,
  }) => {
    return (
      <View style={styles.itemRow}>
        <Text style={[styles.textRow, {flex: 1}]}>{id}</Text>
        <Text style={[styles.textRow, {flex: 5}]}>{name}</Text>
        <Text style={[styles.textRow, {flex: 2}]}>{typeFile}</Text>
        <Text style={[styles.textRow, {flex: 2}]}>{status}</Text>
        <View style={styles.viewTouch}>
          <TouchableOpacity style={styles.touchFile}>
            <Text>Tải File</Text>
          </TouchableOpacity>
        </View>
        <Text style={[styles.textRow, {flex: 2}]}>{date}</Text>
        <Text style={[styles.textRow, {flex: 3}]}>{nameStaff}</Text>
      </View>
    );
  };

  return (
    <FlatList
      style={styles.listView}
      data={select}
      renderItem={({item, index}) => <ItemList item={item} index={index} />}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  itemView: {
    width: '100%',
    borderWidth: 1,
    height: 40,
    marginTop: 30,
    alignItems: 'center',
    paddingLeft: 10,
    flexDirection: 'row',
  },
  listView: {
    width: '100%',
    paddingHorizontal: 20,
  },
  icon: {
    marginLeft: 10,
    height: 12,
    width: 12,
  },
  itemRow: {
    flexDirection: 'row',
    height: 35,
  },
  textRow: {
    borderWidth: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  viewTouch: {
    height: 35,
    borderWidth: 1,
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchFile: {
    height: 20,
    borderWidth: 1,
    paddingHorizontal: 2,
  },
});

export default Table;
