import { HeaderTitle } from '@/components/HeaderTitle';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useSession } from '@/ctx';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Redirect, Tabs } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';

export default function TabLayout() {
  const { session, isLoading } = useSession()
  const colorScheme = useColorScheme();
  
  if (isLoading) {
    return <Text>Loading...</Text>
  }

  if (!session) {
    return <Redirect href="/login"/>
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: true,
        headerTintColor: Colors[colorScheme ?? 'light'].tint,
    }}>
      <Tabs.Screen
        name="search"
        options={{
          header: () => (<HeaderTitle title="Search" />),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'search' : 'search-outline'} color={color} />
          ),
        }}
      />
        <Tabs.Screen
          name="index"
          options={{
            header: () => (<HeaderTitle title="Home" />),
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
            ),
          }}
        />
      <Tabs.Screen
        name="account"
        options={{
          header: () => (<HeaderTitle title="Account" />),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}