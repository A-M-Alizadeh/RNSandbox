import { View, StyleSheet, Dimensions, Animated } from 'react-native';
import React, { useRef } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Slide, { SLIDE_HEIGHT } from './Slide';
import Subslide from './Subslide';

type Props = {};
const { width } = Dimensions.get('window');
const BORDER_RADIUS = 75;

const slides = [
  {
    title: 'Relaxed',
    color: '#BFEAF5',
    subtitle: 'This is the subtitle',
    description:
      'This is supposed to be description and what it is written here is Nonesense',
  },
  {
    title: 'Playful',
    color: '#BEECC4',
    subtitle: 'This is the subtitle',
    description:
      'This is supposed to be description and what it is written here is Nonesense',
  },
  {
    title: 'Excenteric',
    color: '#FFE4D9',
    subtitle: 'This is the subtitle',
    description:
      'This is supposed to be description and what it is written here is Nonesense',
  },
  {
    title: 'Funcky',
    color: '#FFDDDD',
    subtitle: 'This is the subtitle',
    description:
      'This is supposed to be description and what it is written here is Nonesense',
  },
];

const Onboarding = (props: Props) => {
  const scroll = useRef<ScrollView>(null);
  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={1}
          bounces={false}>
          {slides.map(({ title }, index) => (
            <Slide key={index} {...{ title }} right={!!(index % 2)} />
          ))}
        </Animated.ScrollView>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerUnderlay} />
        <Animated.View
          style={[
            styles.footerOverlay,
            { width: width * slides.length, flex: 1 },
          ]}>
          {slides.map(({ subtitle, description }, index) => (
            <Subslide
              key={index}
              last={index === slides.length - 1}
              {...{ subtitle, description }}
              onPress={() => {
                console.log('---------', index);
                if (scroll.current) {
                  scroll.current.scrollTo({
                    x: width * (index + 1),
                    animated: true,
                  });
                }
              }}
            />
          ))}
        </Animated.View>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    height: SLIDE_HEIGHT,
    backgroundColor: 'cyan',
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerUnderlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'cyan',
  },
  footerOverlay: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopLeftRadius: BORDER_RADIUS,
  },
});
