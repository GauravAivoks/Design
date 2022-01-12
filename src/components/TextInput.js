import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TextInput as Input } from 'react-native-paper'
import { theme } from '../core/theme'

export default function TextInput({ errorText, description, ...props }) {
  return (
    <View style={styles.container}>
      <Input
        style={[styles.input]}
        selectionColor={theme.colors.primary}
        underlineColor="transparent"
        mode="outlined"
        theme={{ colors: { primary: theme.colors.primary, underlineColor: 'transparent', } }}
        {...props}
      />
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '55%',
    marginVertical: 10,
  },
  input: {
    backgroundColor: '#4c6b9e',
    height: 35,
    borderRadius:50
  },
  description: {
    fontSize: 13,
    color: theme.colors.secondary,
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    // paddingTop: 8,
  },
})
