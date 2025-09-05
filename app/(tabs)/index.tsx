import { Link } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";


const ProfileHeader: React.FC<{ userName: string }> = ({ userName }) => {
  return (
    <div className="bg-white shadow-sm border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center w-full">
      <div className="flex-1 min-w-0">
        <h1 className="text-2xl font-extrabold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          {userName}
        </h1>
      </div>
      <div className="flex space-x-2">
        {/* Placeholder for settings button or other icons. We can use SVG icons here. */}
        <button
          onClick={() => alert('Settings button clicked!')}
          className="p-2 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {/* An SVG icon for settings, similar to Ionicons */}
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};


export default function Index() {
  return (
    <View style={styles.container}>
      <ProfileHeader userName="Jane Doe" />
      <Text style={styles.title}>🚀 Hello from HEG Ltd.</Text>

      <Button title="Sign in" onPress={() => alert("Hi 👋")} />

      {/* Simple navigation to the next step */}
      <Link href="/(tabs)/profile" style={styles.link}>
        Go to Profile →
      </Link>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, justifyContent: "center", 
    alignItems: "center", 
    padding: 15, backgroundColor: "#fff" 
  },
  title: { 
    fontSize: 24, 
    fontWeight: "700", 
    marginBottom: 16 
  },
  link: { 
    marginTop: 16, 
    fontSize: 16, 
    textDecorationLine: "underline" 
  },
});
