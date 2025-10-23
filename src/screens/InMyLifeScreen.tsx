import React, { useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  StyleSheet,
  Modal,
  Dimensions,
  TouchableOpacity,
  Linking
} from 'react-native';
import { WebView } from 'react-native-webview';

export default function InMyLifeScreen() {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const myYouTubeId = '7suRJdit9qU'; // Tu video de YouTube

  const openVideo = () => {
    setIsVideoVisible(true);
  };

  const closeVideo = () => {
    setIsVideoVisible(false);
  };

  const openInYouTube = () => {
    const youtubeUrl = `https://www.youtube.com/watch?v=${myYouTubeId}`;
    Linking.openURL(youtubeUrl);
  };

  // Función para generar el HTML del embed de YouTube
  const getYouTubeEmbedHTML = (youtubeId: string) => {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { 
              margin: 0; 
              background-color: #000; 
              display: flex; 
              justify-content: center; 
              align-items: center; 
              height: 100vh;
            }
            .container { 
              width: 100%; 
              max-width: 560px; 
            }
            iframe { 
              width: 100%; 
              height: 315px; 
              border: none; 
              border-radius: 12px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <iframe 
              src="https://www.youtube.com/embed/${youtubeId}?autoplay=1&controls=1&showinfo=0&modestbranding=1" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>
        </body>
      </html>
    `;
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>🎥 En Mi Vida</Text>
        <Text style={styles.subtitle}>
          Por qué Geotormenta es importante para mí
        </Text>
      </View>

      {/* Video Section */}
      <View style={styles.videoSection}>
        <Text style={styles.sectionTitle}>📹 Mi Video Personal</Text>
        
        <TouchableOpacity style={styles.videoCard} onPress={openVideo}>
          <View style={styles.videoPlaceholder}>
            <Text style={styles.playIcon}>▶️</Text>
            <Text style={styles.playText}>Ver Mi Video</Text>
          </View>
          
          <View style={styles.videoInfo}>
            <Text style={styles.videoTitle}>Mi Pasión por Geotormenta</Text>
            <Text style={styles.videoDescription}>
              En este video comparto por qué Geotormenta es una película especial para mí 
              y cómo ha influido en mi interés por la ciencia ficción y los desastres naturales.
            </Text>
            
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.watchButton} onPress={openVideo}>
                <Text style={styles.watchButtonText}>🎬 Ver en App</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.youtubeButton} onPress={openInYouTube}>
                <Text style={styles.youtubeButtonText}>📺 Abrir YouTube</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View>

     

      {/* Modal para YouTube Embed */}
      <Modal
        visible={isVideoVisible}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={closeVideo}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={closeVideo} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>✕ Cerrar</Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Mi Video Personal</Text>
          </View>
          
          <View style={styles.videoContainer}>
            <WebView
              source={{ html: getYouTubeEmbedHTML(myYouTubeId) }}
              style={styles.webview}
              allowsFullscreenVideo={true}
              javaScriptEnabled={true}
              domStorageEnabled={true}
            />
          </View>
          
          <View style={styles.modalContent}>
            <Text style={styles.modalDescription}>
              En este video comparto mi pasión por Geotormenta y cómo esta película 
              ha influido en mi vida personal y profesional como desarrollador.
            </Text>
            
      
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  header: {
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#1e293b',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#94a3b8',
    textAlign: 'center',
  },
  videoSection: {
    padding: 20,
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
  videoCard: {
    backgroundColor: '#1e293b',
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  videoPlaceholder: {
    backgroundColor: '#000',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIcon: {
    fontSize: 48,
    marginBottom: 10,
  },
  playText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  videoInfo: {
    padding: 20,
  },
  videoTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  videoDescription: {
    color: '#cbd5e1',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  watchButton: {
    backgroundColor: '#dc2626',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    flex: 1,
    marginRight: 8,
    alignItems: 'center',
  },
  watchButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  youtubeButton: {
    backgroundColor: '#ff0000',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    flex: 1,
    marginLeft: 8,
    alignItems: 'center',
  },
  youtubeButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  storySection: {
    padding: 20,
    paddingTop: 0,
  },
  storyCard: {
    backgroundColor: '#1e293b',
    padding: 20,
    borderRadius: 12,
  },
  storyText: {
    color: '#cbd5e1',
    fontSize: 16,
    lineHeight: 24,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#1e293b',
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
  },
  closeButton: {
    padding: 5,
  },
  closeButtonText: {
    color: '#3b82f6',
    fontSize: 16,
    fontWeight: '600',
  },
  modalTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    flex: 1,
  },
  videoContainer: {
    height: 250,
    backgroundColor: '#000',
  },
  webview: {
    flex: 1,
  },
  modalContent: {
    padding: 20,
    flex: 1,
  },
  modalDescription: {
    color: '#cbd5e1',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  openYouTubeButton: {
    backgroundColor: '#ff0000',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  openYouTubeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});