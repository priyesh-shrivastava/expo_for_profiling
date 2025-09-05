import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker"; // make sure to install
import { Picker } from "@react-native-picker/picker"; // make sure to install
import React, { useState } from "react";
import {
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    useColorScheme,
    View,
} from "react-native";

const LeaveRequestForm = () => {
  // Dynamic theme (check system or fallback to light)
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState<"light" | "dark">(
    colorScheme === "dark" ? "dark" : "light"
  );

  // Leave state
  const [leaveType, setLeaveType] = useState<string>("Sick Leave");
  const [reason, setReason] = useState<string>("");

  // Date states
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  // Submit Handler
  const handleSubmit = () => {
    alert(
      `Leave Request Submitted:\nType: ${leaveType}\nStart: ${startDate.toDateString()}\nEnd: ${endDate.toDateString()}\nReason: ${reason}`
    );
  };

  const styles = getStyles(theme);

  return (
    <ScrollView style={styles.container}>
      {/* Theme Toggle */}
      <TouchableOpacity
        style={styles.themeToggle}
        onPress={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <Text style={styles.themeToggleText}>
          {theme === "dark" ? "🌞 Switch to Light" : "🌙 Switch to Dark"}
        </Text>
      </TouchableOpacity>

      <Text style={styles.heading}>Leave Request Form</Text>

      {/* Leave Type */}
      <Text style={styles.label}>Leave Type</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={leaveType}
          style={styles.picker}
          dropdownIconColor={theme === "dark" ? "#fff" : "#000"}
          onValueChange={(itemValue: string) => setLeaveType(itemValue)}
        >
          <Picker.Item label="Sick Leave" value="Sick Leave" />
          <Picker.Item label="Casual Leave" value="Casual Leave" />
          <Picker.Item label="Earned Leave" value="Earned Leave" />
          <Picker.Item label="Maternity/Paternity Leave" value="Maternity/Paternity Leave" />
        </Picker>
      </View>

      {/* Start Date */}
      <Text style={styles.label}>Start Date</Text>
      <TouchableOpacity onPress={() => setShowStartPicker(true)} style={styles.dateInput}>
        <Text style={styles.dateText}>{startDate.toDateString()}</Text>
      </TouchableOpacity>
      {showStartPicker && (
        <DateTimePicker
          value={startDate}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={(event: DateTimePickerEvent, date: Date | undefined) => {
            setShowStartPicker(false);
            if (date) setStartDate(date);
          }}
        />
      )}

      {/* End Date */}
      <Text style={styles.label}>End Date</Text>
      <TouchableOpacity onPress={() => setShowEndPicker(true)} style={styles.dateInput}>
        <Text style={styles.dateText}>{endDate.toDateString()}</Text>
      </TouchableOpacity>
      {showEndPicker && (
        <DateTimePicker
          value={endDate}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={(event: DateTimePickerEvent, date: Date | undefined) => {
            setShowEndPicker(false);
            if (date) setEndDate(date);
          }}
        />
      )}

      {/* Reason */}
      <Text style={styles.label}>Reason</Text>
      <TextInput
        style={styles.input}
        multiline
        placeholder="Enter reason..."
        placeholderTextColor={theme === "dark" ? "#9ca3af" : "#666"}
        value={reason}
        onChangeText={setReason}
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit Request</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LeaveRequestForm;

/* --------------------------
      Dynamic Styles
--------------------------- */
const getStyles = (theme: "light" | "dark") =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme === "dark" ? "#0f172a" : "#f8fafc", // black/blue vs light gray
      padding: 16,
    },
    heading: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 40,
      color: theme === "dark" ? "#60a5fa" : "#1e3a8a",
    },
    label: {
      fontSize: 16,
      fontWeight: "600",
      marginBottom: 6,
      color: theme === "dark" ? "#e0f2fe" : "#0f172a",
    },
    pickerWrapper: {
      borderWidth: 1,
      borderColor: theme === "dark" ? "#1e40af" : "#ccc",
      borderRadius: 8,
      marginBottom: 16,
      backgroundColor: theme === "dark" ? "#1e293b" : "#fff",
    },
    picker: {
      height: 50,
      color: theme === "dark" ? "#fff" : "#000",
    },
    dateInput: {
      padding: 12,
      borderWidth: 1,
      borderColor: theme === "dark" ? "#1e40af" : "#ccc",
      borderRadius: 8,
      marginBottom: 16,
      backgroundColor: theme === "dark" ? "#1e293b" : "#fff",
    },
    dateText: {
      fontSize: 16,
      color: theme === "dark" ? "#e0f2fe" : "#111827",
    },
    input: {
      borderWidth: 1,
      borderColor: theme === "dark" ? "#1e40af" : "#ccc",
      borderRadius: 8,
      padding: 12,
      marginBottom: 24,
      color: theme === "dark" ? "#e0f2fe" : "#111827",
      backgroundColor: theme === "dark" ? "#1e293b" : "#fff",
      textAlignVertical: "top",
      minHeight: 80,
    },
    submitBtn: {
      backgroundColor: theme === "dark" ? "#2563eb" : "#1d4ed8", // dark = blue, light = darker blue
      padding: 14,
      borderRadius: 8,
      alignItems: "center",
    },
    submitText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
    themeToggle: {
      marginBottom: 36,
      marginTop: 10,
      alignSelf: "flex-end",
    },
    themeToggleText: {
      color: theme === "dark" ? "#93c5fd" : "#1d4ed8",
      fontSize: 14,
      fontWeight: "500",
    },
  });
