import React from 'react';
import { View, Text, ScrollView, StyleSheet, Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function AboutScreen() {
  const openIMDB = () => {
    Linking.openURL('https://www.imdb.com/title/tt1649419/');
  };

  const facts = [
    "🎬 Dirigida por Dean Devlin en su debut como director",
    "🌍 Filmada en múltiples locaciones alrededor del mundo",
    "💻 Los efectos visuales tomaron más de un año en completarse",
    "🎭 Gerard Butler protagoniza como el científico Jake Lawson",
    "🚀 Combina ciencia real con ficción especulativa",
    "⏱️ Tiene una duración de 109 minutos",
    "🎵 Banda sonora compuesta por Lorne Balfe",
    "🌪️ Inspirada en teorías científicas sobre el clima espacial"
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>📖 Acerca de Geotormenta</Text>
      
      {/* Hero Section */}
      <View style={styles.heroCard}>
        <Text style={styles.heroTitle}>GEOTORMENTA</Text>

        <View style={styles.rating}>
          <Text style={styles.ratingText}>⭐ 5.8/10 IMDb</Text>
        </View>
      </View>

      {/* Quick Info Grid */}
      <View style={styles.infoGrid}>
        <View style={styles.infoCard}>
          <Text style={styles.infoIcon}>📅</Text>
          <Text style={styles.infoLabel}>Año</Text>
          <Text style={styles.infoValue}>2017</Text>
        </View>
        
        <View style={styles.infoCard}>
          <Text style={styles.infoIcon}>⏱️</Text>
          <Text style={styles.infoLabel}>Duración</Text>
          <Text style={styles.infoValue}>109 min</Text>
        </View>
        
        <View style={styles.infoCard}>
          <Text style={styles.infoIcon}>🎭</Text>
          <Text style={styles.infoLabel}>Género</Text>
          <Text style={styles.infoValue}>Ciencia Ficción</Text>
        </View>
        
        <View style={styles.infoCard}>
          <Text style={styles.infoIcon}>🎞️</Text>
          <Text style={styles.infoLabel}>Formato</Text>
          <Text style={styles.infoValue}>Película</Text>
        </View>
      </View>

      {/* Director Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>👨‍💼 Director</Text>
        <View style={styles.directorCard}>
          <Text style={styles.directorName}>Dean Devlin</Text>
          <Text style={styles.directorRole}>Director y Productor</Text>
          <Text style={styles.directorBio}>
            Conocido por su trabajo en éxitos como "Independence Day" y "Godzilla". 
            Geotormenta marca su debut como director después de una exitosa carrera 
            como guionista y productor.
          </Text>
        </View>
      </View>

      {/* Synopsis Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📝 Sinopsis</Text>
        <View style={styles.synopsisCard}>
          <Text style={styles.synopsisText}>
            Después de que una serie de desastres naturales sin precedentes amenazan 
            con extinguir la vida en la Tierra, el científico Jake Lawson es liberado 
            de la prisión para ayudar a su hermano Max a salvar el planeta. 
            {'\n\n'}
            Juntos, descubren que el campo magnético de la Tierra se está colapsando 
            y desarrollan un plan audaz para detener la catastrófica geotormenta 
            utilizando una red de satélites especializados llamado "Dutch Boy".
            {'\n\n'}
            La película combina espectaculares efectos visuales con una trama 
            emocionante que explora los límites de la ciencia y la capacidad humana 
            para superar desafíos globales.
          </Text>
        </View>
      </View>

      {/* Fun Facts */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>💡 Datos Curiosos</Text>
        <View style={styles.factsCard}>
          {facts.map((fact, index) => (
            <View key={index} style={styles.factItem}>
              <Text style={styles.factBullet}>•</Text>
              <Text style={styles.factText}>{fact}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* External Link */}
      <TouchableOpacity style={styles.imdbButton} onPress={openIMDB}>
        <Text style={styles.imdbButtonText}>🎬 Ver en IMDb</Text>
      </TouchableOpacity>
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
    marginBottom: 20,
  },
  heroCard: {
    backgroundColor: '#1e293b',
    padding: 25,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 25,
    borderLeftWidth: 4,
    borderLeftColor: '#3b82f6',
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#94a3b8',
    marginBottom: 15,
  },
  rating: {
    backgroundColor: '#f59e0b',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
  },
  ratingText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  infoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  infoCard: {
    backgroundColor: '#1e293b',
    width: '48%',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
  },
  infoIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  infoLabel: {
    color: '#94a3b8',
    fontSize: 12,
    marginBottom: 4,
  },
  infoValue: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#3b82f6',
    paddingLeft: 12,
  },
  directorCard: {
    backgroundColor: '#1e293b',
    padding: 20,
    borderRadius: 12,
  },
  directorName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  directorRole: {
    color: '#60a5fa',
    fontSize: 16,
    marginBottom: 10,
  },
  directorBio: {
    color: '#cbd5e1',
    fontSize: 14,
    lineHeight: 20,
  },
  synopsisCard: {
    backgroundColor: '#1e293b',
    padding: 20,
    borderRadius: 12,
  },
  synopsisText: {
    color: '#cbd5e1',
    fontSize: 16,
    lineHeight: 24,
  },
  factsCard: {
    backgroundColor: '#1e293b',
    padding: 20,
    borderRadius: 12,
  },
  factItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  factBullet: {
    color: '#3b82f6',
    fontSize: 16,
    marginRight: 10,
    marginTop: 2,
  },
  factText: {
    color: '#cbd5e1',
    fontSize: 14,
    lineHeight: 20,
    flex: 1,
  },
  imdbButton: {
    backgroundColor: '#f5c518',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  imdbButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});