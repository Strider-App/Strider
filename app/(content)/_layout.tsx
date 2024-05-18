import { Tabs } from 'expo-router';
import React  from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Text } from 'react-native';
import { HeaderTitle } from '@/components/HeaderTitle';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  
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
          name="home"
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