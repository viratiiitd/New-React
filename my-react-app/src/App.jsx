
import React,{useState} from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Sidebar from './Sidebar';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';




const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?cs=srgb&dl=pexels-padrinan-255379.jpg&fm=jpg',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Proj 1',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://picsum.photos/200/301',
    imageLabel: 'Image Text',
  },
  {
    title: 'Proj 2',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://picsum.photos/200/302',
    imageLabel: 'Image Text',
  },
  {
    title: 'Proj 3',
    date: 'Nov 10',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://picsum.photos/200/303',
    imageLabel: 'Image Text',
  },
  {
    title: 'Proj 4',
    date: 'Nov 09',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://picsum.photos/200/300',
    imageLabel: 'Image Text',
  },
];

function App() {
  return (
    <>
      
      
      <Header sections = {sections} title = 'Portfolio'></Header>
      <MainFeaturedPost post={mainFeaturedPost}></MainFeaturedPost>
      <Grid container spacing={5} sx={{ mt: 3 }}>
      {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
      </Grid>
      <Footer description='For Description' title = 'For Title' ></Footer>
    </>
  );
}

export default App;