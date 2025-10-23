import React, { useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  Image, 
  TouchableOpacity, 
  StyleSheet,
  Modal,
  Dimensions,
  Linking 
} from 'react-native';
import { WebView } from 'react-native-webview';
import { StackNavigationProp } from '@react-navigation/stack';

interface Moment {
  id: number;
  title: string;
  image: string;
  description: string;
  youtubeId: string;
  duration: string;
}

export default function MomentsScreen() {
  const [selectedMoment, setSelectedMoment] = useState<Moment | null>(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const moments: Moment[] = [
    {
      id: 1,
      title: 'La Tormenta en Hong Kong',
      image: 'https://anempireofwords.wordpress.com/wp-content/uploads/2017/11/geostorm.jpg',
      description: 'Escena épica donde una masiva tormenta eléctrica devasta Hong Kong, mostrando el poder destructivo de la geotormenta. Los edificios colapsan y la ciudad entera se sumerge en el caos mientras la población lucha por sobrevivir.',
      youtubeId: 'AZmJrYoJt70', // Reemplaza con el ID real del video
      duration: '2:30'
    },
    {
      id: 2,
      title: 'Salvando la Estación Espacial', 
      image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=300&fit=crop',
      description: 'Los astronautas luchan por sobrevivir cuando la estación espacial internacional es alcanzada por la tormenta solar. Una secuencia llena de tensión y heroísmo en el espacio que muestra la vulnerabilidad humana frente a las fuerzas de la naturaleza.',
      youtubeId: 'fDn0ELVfiU4', // Reemplaza con el ID real del video
      duration: '3:15'
    },
    {
      id: 3,
      title: 'El Plan Dutch Boy',
      image: 'https://m.media-amazon.com/images/M/MV5BOWM4M2VjMjItYTdkZS00ZjI0LTkzZDAtMGQ4MjVmODc1NTEzXkEyXkFqcGdeQXVyMjM4OTI2MTU@._V1_.jpg',
      description: 'Jake Lawson explica su audaz plan para detener la geotormenta usando satélites especializados. El momento crucial donde la teoría se convierte en la única esperanza para salvar a la humanidad de la extinción.',
      youtubeId: 'BuAnC7LtDI4', // Reemplaza con el ID real del video
      duration: '4:20'
    }
  ];

  const playVideo = (moment: Moment) => {
    setSelectedMoment(moment);
    setIsVideoVisible(true);
  };

  const closeVideo = () => {
    setIsVideoVisible(false);
    setSelectedMoment(null);
  };

  const openInYouTube = (youtubeId: string) => {
    const youtubeUrl = `https://www.youtube.com/watch?v=${youtubeId}`;
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
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>🎬 Momentos Destacados</Text>
        <Text style={styles.subtitle}>Las escenas más épicas de Geotormenta</Text>
        
        {moments.map((moment) => (
          <View key={moment.id} style={styles.momentCard}>
            <View style={styles.momentHeader}>
              <View style={styles.momentNumber}>
                <Text style={styles.momentNumberText}>{moment.id}</Text>
              </View>
              <Text style={styles.momentDuration}>⏱️ {moment.duration}</Text>
            </View>
            
            <Image source={{ uri: moment.image }} style={styles.momentImage} />
            
            <View style={styles.momentContent}>
              <Text style={styles.momentTitle}>{moment.title}</Text>
              <Text style={styles.momentDescription}>{moment.description}</Text>
              
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.playButton}
                  onPress={() => playVideo(moment)}
                >
                  <Text style={styles.playButtonText}>🎬 Ver en App</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                  style={styles.youtubeButton}
                  onPress={() => openInYouTube(moment.youtubeId)}
                >
                  <Text style={styles.youtubeButtonText}>📺 Abrir YouTube</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}

        <View style={styles.note}>
          <Text style={styles.noteText}>
            💡 Puedes ver los videos dentro de la app o abrirlos en YouTube
          </Text>
        </View>
      </ScrollView>

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
            <Text style={styles.modalTitle}>{selectedMoment?.title}</Text>
          </View>
          
          {selectedMoment && (
            <View style={styles.videoContainer}>
              <WebView
                source={{ html: getYouTubeEmbedHTML(selectedMoment.youtubeId) }}
                style={styles.webview}
                allowsFullscreenVideo={true}
                javaScriptEnabled={true}
                domStorageEnabled={true}
              />
            </View>
          )}
          
          <View style={styles.modalContent}>
            <Text style={styles.modalDescription}>
              {selectedMoment?.description}
            </Text>
            
            <TouchableOpacity
              style={styles.openYouTubeButton}
              onPress={() => selectedMoment && openInYouTube(selectedMoment.youtubeId)}
            >
              <Text style={styles.openYouTubeButtonText}>📺 Abrir en YouTube App</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#94a3b8',
    textAlign: 'center',
    marginBottom: 30,
  },
  momentCard: {
    backgroundColor: '#1e293b',
    borderRadius: 15,
    marginHorizontal: 20,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  momentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    paddingBottom: 0,
  },
  momentNumber: {
    backgroundColor: '#3b82f6',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  momentNumberText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  momentDuration: {
    color: '#94a3b8',
    fontSize: 12,
    fontWeight: '600',
  },
  momentImage: {
    width: '100%',
    height: 200,
  },
  momentContent: {
    padding: 20,
  },
  momentTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  momentDescription: {
    color: '#cbd5e1',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  playButton: {
    backgroundColor: '#dc2626',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    flex: 1,
    marginRight: 8,
    alignItems: 'center',
  },
  playButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  youtubeButton: {
    backgroundColor: '#ff0000',
    paddingHorizontal: 15,
    paddingVertical: 10,
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
  note: {
    backgroundColor: '#1e293b',
    margin: 20,
    padding: 15,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#f59e0b',
  },
  noteText: {
    color: '#fef3c7',
    fontSize: 14,
    textAlign: 'center',
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