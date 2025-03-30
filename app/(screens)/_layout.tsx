import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const Layout = () => {
  const router = useRouter();  

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#CBD5B1',
        },
        headerTintColor: '#3a5f3a',
        headerTitleStyle: {
          fontWeight: 'bold',
        },

      }}
    >
      <Stack.Screen
        name="home"
        options={{
          title: 'My Garden',
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.push('/profile')} style={{ marginLeft: 15 }}>
              <Ionicons name="person-circle-outline" size={26} color="#3a5f3a" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => alert('Поиск')} style={{ marginRight: 15 }}>
              <Ionicons name="search-outline" size={24} color="#3a5f3a" />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="ChatScreen"
        options={{
          title: "Your Garden's Consultant",
          headerLeft: () => null,
          headerRight: () => null,
          headerBackVisible: false,
        }}
      />

      <Stack.Screen
        name="PlantScreen"
        options={{
          title: 'List of Plants',
          headerLeft: () => null,
          headerRight: () => null,
          headerBackVisible: false,
        }}
      />
    </Stack>
  );
};

export default Layout;
