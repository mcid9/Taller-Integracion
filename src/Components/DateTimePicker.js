import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import * as GlobalValues from '../Controller/GlobalValues';
import { styles, Colors } from '../Css/Styles';

const DateTimePicker = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    let day = date.getDate()
    let month = date.getMonth()+1
    let year = date.getFullYear()
    if(month < 10){
      GlobalValues.almacenar("birthdate",(year+'-0'+month+'-'+day))
      console.log(year+'-0'+month+'-'+day)
    }else{
      GlobalValues.almacenar("birthdate",(year+'-'+month+'-'+day))
      console.log(year+'-'+month+'-'+day)
    }

    hideDatePicker();
  };

  return (
    <View>
      <Button 
        title="Seleccione edad" 
        buttonStyle={styles.button}
        onPress={showDatePicker} 
      />
      
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        
      />
    </View>
  );
};

export default DateTimePicker;