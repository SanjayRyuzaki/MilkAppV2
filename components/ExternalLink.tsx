import { Pressable } from 'react-native';

import { Text } from './Themed';

export function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Pressable onPress={() => {}}>
      <Text style={{ color: '#2e78b7' }}>{children}</Text>
    </Pressable>
  );
}
