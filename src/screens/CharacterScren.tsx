import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

export default function CharactersScreen() {
  const characters = [
    {
      id: 1,
      name: 'Jake Lawson',
      role: 'Cientista Principal',
      image: 'https://static.wikia.nocookie.net/p__/images/a/a3/Jake_Lawson.png/revision/latest/scale-to-width-down/1200?cb=20220203151312&path-prefix=protagonist',
      description: 'Creador del programa Dutch Boy para salvar la Tierra. Interpretado por Gerard Butler.'
    },
    {
      id: 2,
      name: 'Max Lawson', 
      role: 'Hermano de Jake',
      image: 'https://nolantino.wordpress.com/wp-content/uploads/2018/08/imagesnigga.jpg?w=616',
      description: 'Ayuda a implementar el plan de rescate. Interpretado por Jim Sturgess.'
    },
    {
      id: 3,
      name: 'Sarah Wilson',
      role: 'Agente Secreto',
      image: 'https://www.looper.com/img/gallery/why-sarah-from-geostorm-looks-so-familiar/l-intro-1683729856.jpg',
      description: 'Proporciona apoyo crucial durante la crisis. Interpretado por Alexandra Maria Lara.'
    }
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>🎭 Personajes Principales</Text>
      
      {characters.map((character) => (
        <View key={character.id} style={styles.characterCard}>
          <Image source={{ uri: character.image }} style={styles.characterImage} />
          <View style={styles.characterInfo}>
            <Text style={styles.characterName}>{character.name}</Text>
            <Text style={styles.characterRole}>{character.role}</Text>
            <Text style={styles.characterDescription}>{character.description}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
  },
  characterCard: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  characterImage: {
    width: '100%',
    height: 200,
  },
  characterInfo: {
    padding: 15,
  },
  characterName: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  characterRole: {
    color: '#60a5fa',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  characterDescription: {
    color: '#cbd5e1',
    fontSize: 14,
    lineHeight: 20,
  },
});