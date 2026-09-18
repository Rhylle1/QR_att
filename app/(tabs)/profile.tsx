import { StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

import { COLORS } from '@/constants/colors';
import { signOut, useAuth } from '@/lib/auth';
import AppButton from '@/components/AppButton';

export default function ProfileScreen() {
  const router = useRouter();
  const { user } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    router.replace('/login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>

      <Text style={styles.email}>
        {user?.email ?? 'No email available'}
      </Text>

      <AppButton
        theme="primary"
        title="Sign Out"
        icon="log-out-outline"
        onPress={handleSignOut}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 8,
  },
  email: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginBottom: 24,
  },
});