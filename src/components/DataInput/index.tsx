import React, { useState } from 'react';
import { View, Text, Button, Platform, StyleSheet } from 'react-native';
import { DatePickerIOS, DatePickerAndroid} from 'react-native-datepicker';


function DateInput() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    if (Platform.OS === 'android') {
      // Para Android, exibir o DatePickerAndroid
      DatePickerAndroid.open({
        date: selectedDate,
      }).then((date) => {
        if (date.action !== DatePickerAndroid.dismissedAction) {
          setSelectedDate(new Date(date.year, date.month, date.day));
        }
      });
    } else {
      // Para iOS, exibir o DatePickerIOS
      setDatePickerVisible(true);
    }
  };

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    setDatePickerVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text>Data selecionada: {selectedDate.toDateString()}</Text>
      <Button title="Selecionar Data" onPress={showDatePicker} />

      {isDatePickerVisible && Platform.OS === 'ios' && (
        <DatePickerIOS
          date={selectedDate}
          onDateChange={handleDateChange}
          mode="date"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DateInput;
