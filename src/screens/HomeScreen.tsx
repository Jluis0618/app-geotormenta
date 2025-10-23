import React, { useState, useRef } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  StyleSheet, 
  Image, 
  Dimensions,
  Animated
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const slides = [
    {
      id: 1,
      image: 'https://i.ytimg.com/vi/B_om37g3vJg/maxresdefault.jpg',
    },
    {
      id: 2,
      image: 'https://images.ecestaticos.com/Jd4yyf9-L-cIQgbnAoOQrOC_1aA=/100x0:1259x607/600x315/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F55c%2F90d%2F2e8%2F55c90d2e81ea750136b83ed3449bba3f.jpg',
    },
    {
      id: 3,
      image: 'https://m.media-amazon.com/images/M/MV5BOWM4M2VjMjItYTdkZS00ZjI0LTkzZDAtMGQ4MjVmODc1NTEzXkEyXkFqcGdeQXVyMjM4OTI2MTU@._V1_.jpg',
    },
    {
      id: 4,
      image: 'https://i.ytimg.com/vi/APBDcmrUNe0/maxresdefault.jpg',
    }
  ];

  const menuItems = [
    { title: '👥 Personajes', screen: 'Characters' as const, color: '#1e40af' },
    { title: '🎬 Momentos', screen: 'Moments' as const, color: '#dc2626' },
    { title: '📖 Acerca de', screen: 'About' as const, color: '#7c3aed' },
    { title: '🎥 En Mi Vida', screen: 'InMyLife' as const, color: '#ea580c' },
    { title: '💼 Contrátame', screen: 'HireMe' as const, color: '#0d9488' },
  ];

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Text style={styles.heroTitle}>🌪️ GEOTORMENTA</Text>      
        </View>

      {/* Image Slider */}
      <View style={styles.sliderContainer}>
        <Animated.ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={onScroll}
          scrollEventThrottle={16}
        >
          {slides.map((slide) => (
            <View key={slide.id} style={styles.slide}>
              <Image 
                source={{ uri: slide.image }} 
                style={styles.slideImage}
              />
            </View>
          ))}
        </Animated.ScrollView>
        
        {/* Indicators */}
        <View style={styles.indicatorContainer}>
          {slides.map((_, i) => {
            const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
            const scale = scrollX.interpolate({
              inputRange,
              outputRange: [0.8, 1.4, 0.8],
              extrapolate: 'clamp'
            });
            
            return (
              <Animated.View
                key={i}
                style={[
                  styles.indicator,
                  { transform: [{ scale }] }
                ]}
              />
            );
          })}
        </View>
      </View>

      {/* Navigation Menu */}
      <View style={styles.menuContainer}>
        <Text style={styles.menuTitle}>Explora la App</Text>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.menuButton, { backgroundColor: item.color }]}
            onPress={() => navigation.navigate(item.screen)}
          >
            <Text style={styles.menuButtonText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Info Card */}
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>🚨 La Historia</Text>
        <Text style={styles.infoText}>
          Cuando el campo magnético de la Tierra comienza a colapsar inexplicablemente, 
          un científico y su hermano deben trabajar juntos para lanzar un peligroso plan 
          que salve al planeta de una catastrófica geotormenta.
        </Text>
        
        <View style={styles.quickInfo}>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Año</Text>
            <Text style={styles.infoValue}>2017</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Duración</Text>
            <Text style={styles.infoValue}>109 min</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Género</Text>
            <Text style={styles.infoValue}>Ciencia Ficción</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  heroSection: {
    alignItems: 'center',
    padding: 30,
    paddingBottom: 20,
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 5,
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#94a3b8',
    textAlign: 'center',
  },
  sliderContainer: {
    height: 280,
    marginBottom: 10,
  },
  slide: {
    width: width,
    height: 280,
    position: 'relative',
  },
  slideImage: {
    width: '100%',
    height: '100%',
  },
  slideOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 20,
  },
  slideTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  slideDescription: {
    color: '#cbd5e1',
    fontSize: 16,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    width: '100%',
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'white',
    margin: 5,
  },
  menuContainer: {
    padding: 20,
    paddingTop: 10,
  },
  menuTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  menuButton: {
    padding: 18,
    borderRadius: 12,
    marginVertical: 6,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoCard: {
    backgroundColor: '#1e293b',
    margin: 20,
    marginTop: 10,
    padding: 20,
    borderRadius: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#3b82f6',
  },
  infoTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  infoText: {
    color: '#cbd5e1',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 15,
  },
  quickInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#334155',
    paddingTop: 15,
  },
  infoItem: {
    alignItems: 'center',
    flex: 1,
  },
  infoLabel: {
    color: '#94a3b8',
    fontSize: 12,
    marginBottom: 4,
  },
  infoValue: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});