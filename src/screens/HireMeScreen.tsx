import React, { useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  Image, 
  TouchableOpacity, 
  StyleSheet, 
  TextInput,
  Alert,
  Linking 
} from 'react-native';

export default function HireMeScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const skills = [
    'React Native', 'TypeScript', 'Expo', 'UI/UX Design',
    'JavaScript', 'Mobile Development', 'API Integration', 'Firebase'
  ];



 

  const openEmail = () => {
    Linking.openURL('mailto:tu.email@ejemplo.com?subject=Oportunidad de Trabajo&body=Hola, me interesa tu trabajo...');
  };

  const openLinkedIn = () => {
    Linking.openURL('https://linkedin.com/in/jldesigndev');
  };

  const openGitHub = () => {
    Linking.openURL('https://github.com/jluis0618');
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Image 
          source={{ uri: 'https://instagram.fhex5-1.fna.fbcdn.net/v/t51.2885-19/529290186_18318198700232764_3319663975722988560_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fhex5-1.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2QHj_5yb7_dPuTw-2r1FSnmuzLO2SwQbULO3bA4vjjsZlpbpZ64Fe9f0mYHki1x21iZBVvfGWjOYldgZATMrU1oP&_nc_ohc=RxX7sWqzRPcQ7kNvwEA_SRO&_nc_gid=U9-Tbf7MQ_IZZ1uIjkjzQw&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfeNqhWqbdnQegrpblLsnUq3lSEAuXfNsS9FLeJ56lYv8A&oe=68FF5EFB&_nc_sid=7a9f4b' }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Jose Luis de Leon</Text>
        <Text style={styles.title}>Desarrollador Mobile</Text>
        <Text style={styles.bio}>
          Apasionado por crear aplicaciones móviles increíbles con React Native y TypeScript. Y gestionar Base de Datos con SQL
        </Text>
      </View>

      {/* Contact Info */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📞 Información de Contacto</Text>
        <View style={styles.contactGrid}>
          <TouchableOpacity style={styles.contactItem} onPress={openEmail}>
            <Text style={styles.contactIcon}>📧</Text>
            <Text style={styles.contactText}>almontejose156@gmail.com</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.contactItem}>
            <Text style={styles.contactIcon}>📱</Text>
            <Text style={styles.contactText}>+1 849 354 0783</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.contactItem} onPress={openLinkedIn}>
            <Text style={styles.contactIcon}>💼</Text>
            <Text style={styles.contactText}>LinkedIn</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.contactItem} onPress={openGitHub}>
            <Text style={styles.contactIcon}>⚡</Text>
            <Text style={styles.contactText}>GitHub</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🛠️ Habilidades Técnicas</Text>
        <View style={styles.skillsContainer}>
          {skills.map((skill, index) => (
            <View key={index} style={styles.skillChip}>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>
      </View>


    
      {/* Availability */}
      <View style={styles.availability}>
        <Text style={styles.availabilityText}>✅ Disponible para nuevos proyectos</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  header: {
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#1e293b',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#3b82f6',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    color: '#60a5fa',
    marginBottom: 10,
    fontWeight: '600',
  },
  bio: {
    fontSize: 14,
    color: '#cbd5e1',
    textAlign: 'center',
    lineHeight: 20,
  },
  section: {
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
  contactGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e293b',
    padding: 15,
    borderRadius: 10,
    width: '48%',
    marginBottom: 10,
  },
  contactIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  contactText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillChip: {
    backgroundColor: '#3b82f6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    margin: 4,
  },
  skillText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  projectCard: {
    backgroundColor: '#1e293b',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  projectTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  projectDescription: {
    color: '#cbd5e1',
    fontSize: 14,
    marginBottom: 10,
    lineHeight: 20,
  },
  techContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  techChip: {
    backgroundColor: '#334155',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 4,
  },
  techText: {
    color: '#cbd5e1',
    fontSize: 10,
  },
  form: {
    backgroundColor: '#1e293b',
    padding: 20,
    borderRadius: 12,
  },
  input: {
    backgroundColor: '#0f172a',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    color: 'white',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#334155',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#10b981',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  availability: {
    backgroundColor: '#065f46',
    margin: 20,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  availabilityText: {
    color: '#d1fae5',
    fontSize: 16,
    fontWeight: 'bold',
  },
});