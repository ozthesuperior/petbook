import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, TextInput, Alert } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const ForumScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [showNewPostModal, setShowNewPostModal] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  
  // Sample forum posts data
  const forumPosts = [
    {
      id: '1',
      title: 'New training tips for puppies',
      preview: 'Check out these effective methods for training your new puppy...',
      author: 'PetLover42',
      comments: 15,
      date: '2 hours ago'
    },
    {
      id: '2',
      title: 'Best dog foods for sensitive stomachs',
      preview: 'My vet recommended these brands after Max had digestive issues...',
      author: 'DogMom',
      comments: 23,
      date: '1 day ago'
    },
    {
      id: '3',
      title: 'Summer safety tips for dogs',
      preview: 'Keep your furry friends safe and cool during the hot summer months...',
      author: 'VetExpert',
      comments: 8,
      date: '3 days ago'
    },
    {
      id: '4',
      title: 'DIY dog toys from household items',
      preview: 'Save money and have fun making toys for your pets using common items...',
      author: 'CraftyPetOwner',
      comments: 31,
      date: '1 week ago'
    }
  ];

  const handleCreatePost = () => {
    if (newPostTitle.trim() === '' || newPostContent.trim() === '') {
      Alert.alert('Error', 'Please fill in both title and content');
      return;
    }
    
    // In a real app, this would save the post to a backend
    Alert.alert(
      'Post Created',
      `Your post "${newPostTitle}" has been created successfully!`,
      [{ text: 'OK' }]
    );
    
    // Reset form and close modal
    setNewPostTitle('');
    setNewPostContent('');
    setShowNewPostModal(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={[styles.header, { paddingTop: insets.top + 16 }]}>Pet Community Forum</Text>
        
        <TouchableOpacity 
          style={styles.newPostButton}
          onPress={() => setShowNewPostModal(true)}
        >
          <Icon name="add" size={20} color="white" />
          <Text style={styles.newPostButtonText}>New Post</Text>
        </TouchableOpacity>
        
        {forumPosts.map((post) => (
          <TouchableOpacity 
            key={post.id}
            style={styles.postItem}
            onPress={() => {
              // In a real app, this would navigate to a detailed post view
              Alert.alert(
                post.title,
                post.preview,
                [
                  { text: 'Read More', onPress: () => console.log('Navigate to post detail') },
                  { text: 'Cancel', style: 'cancel' }
                ]
              );
            }}
          >
            <Text style={styles.postTitle}>{post.title}</Text>
            <Text style={styles.postPreview}>{post.preview}</Text>
            <View style={styles.postMeta}>
              <Text style={styles.postAuthor}>By {post.author}</Text>
              <Text style={styles.postComments}>{post.comments} comments</Text>
              <Text style={styles.postDate}>{post.date}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      {/* New Post Modal */}
      <Modal
        visible={showNewPostModal}
        animationType="slide"
        transparent={false}
        onRequestClose={() => setShowNewPostModal(false)}
      >
        <SafeAreaView style={styles.modalContainer}>
          <View style={[styles.modalHeader, { paddingTop: insets.top + 16 }]}>
            <Text style={styles.modalTitle}>Create New Post</Text>
            <TouchableOpacity 
              style={styles.closeButton}
              onPress={() => setShowNewPostModal(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Post Title"
              value={newPostTitle}
              onChangeText={setNewPostTitle}
            />
            
            <TextInput
              style={[styles.input, styles.contentInput]}
              placeholder="Post Content"
              multiline
              numberOfLines={6}
              value={newPostContent}
              onChangeText={setNewPostContent}
            />
            
            <TouchableOpacity 
              style={styles.createPostButton}
              onPress={handleCreatePost}
            >
              <Text style={styles.createPostButtonText}>Create Post</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  newPostButton: {
    backgroundColor: '#2196F3',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  newPostButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  postItem: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  postPreview: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  postMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postAuthor: {
    fontSize: 12,
    color: '#999',
  },
  postComments: {
    fontSize: 12,
    color: '#4CAF50',
  },
  postDate: {
    fontSize: 12,
    color: '#999',
  },
  // Modal styles
  modalContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  closeButton: {
    padding: 8,
  },
  closeButtonText: {
    fontSize: 16,
    color: '#2196F3',
  },
  modalContent: {
    padding: 16,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    fontSize: 16,
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  contentInput: {
    height: 150,
    textAlignVertical: 'top',
  },
  createPostButton: {
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  createPostButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ForumScreen;
